'use server';

import { renderEmailHTML, renderEmailText } from './templateEmail';
import fs from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';
import { z } from 'zod';

// Schema de validação para os dados do formulário
const QuoteFormSchema = z.object({
  // Dados do usuário
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  company: z.string().optional(),
  message: z.string().optional(),

  // Dados da máquina
  machineId: z.string(),
  machineTitle: z.string(),
  machineSubtitle: z.string(),
  machineCapacity: z.number(),
  machineCapacityUnit: z.string(),
  machinePowerConsumption: z.number(),
  machineFootprint: z.string(),
  machineCategory: z.string()
});

export type QuoteFormData = z.infer<typeof QuoteFormSchema>;

// Configuração do transporter do nodemailer
const createEmailTransporter = () => {
  // Verificar se as credenciais estão disponíveis
  const gmailPassword = process.env.EMAIL_SITE_PASSWORD;
  const gmailSite = process.env.EMAIL_SITE;

  if (!gmailPassword) {
    throw new Error('EMAIL_SITE_PASSWORD não está configurado no arquivo .env');
  }

  if (!gmailSite) {
    throw new Error('EMAIL_SITE não está configurado no arquivo .env');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailSite,
      pass: gmailPassword
    }
    // Configurações adicionais para melhor compatibilidade
    // secure: true,
    // port: 465,
  });
};

export async function submitQuoteForm(data: QuoteFormData) {
  try {
    // Validar os dados recebidos
    const validatedData = QuoteFormSchema.parse(data);

    // Console log para visualizar os dados (mantido para debug)
    console.log('=== DADOS DA COTAÇÃO RECEBIDOS ===');
    console.log('📝 Dados do Cliente:');
    console.log('  Nome:', validatedData.name);
    console.log('  Email:', validatedData.email);
    console.log('  Telefone:', validatedData.phone);
    console.log('  Empresa:', validatedData.company || 'Não informado');
    console.log(
      '  Mensagem:',
      validatedData.message || 'Nenhuma mensagem adicional'
    );

    console.log('\n🏭 Dados da Máquina:');
    console.log('  ID:', validatedData.machineId);
    console.log('  Título:', validatedData.machineTitle);
    console.log('  Subtítulo:', validatedData.machineSubtitle);
    console.log(
      '  Capacidade:',
      `${validatedData.machineCapacity} ${validatedData.machineCapacityUnit}`
    );
    console.log('  Potência:', `${validatedData.machinePowerConsumption}kW`);
    console.log('  Área:', validatedData.machineFootprint);
    console.log('  Categoria:', validatedData.machineCategory);

    console.log(
      '\n⏰ Data/Hora da Solicitação:',
      new Date().toLocaleString('pt-BR')
    );
    console.log('=====================================');

    // Envio de email com nodemailer
    try {
      const transporter = createEmailTransporter();

      // Preparar anexos (logo e imagem da máquina)
      const logoPath = path.join(
        process.cwd(),
        'assets',
        'image',
        'logo2-no-bg.png'
      );

      const attachments = [];

      // Anexo do logo
      try {
        if (fs.existsSync(logoPath)) {
          attachments.push({
            filename: 'logo.png',
            path: logoPath,
            cid: 'logo' // CID usado no template
          });
        }
      } catch (error) {
        console.warn('⚠️ Erro ao carregar logo:', error);
      }

      // Renderizar templates de email
      const emailTemplate = renderEmailHTML(validatedData);
      const emailTextVersion = renderEmailText(validatedData);

      if (!process.env.EMAIL_SITE) {
        throw new Error('EMAIL_SITE não está configurado no arquivo .env');
      }

      if (!process.env.EMAIL_QUE_RECEBE_EMAILS) {
        throw new Error(
          'EMAIL_QUE_RECEBE_EMAILS não está configurado no arquivo .env'
        );
      }

      if (!process.env.EMAIL_SITE_PASSWORD) {
        throw new Error(
          'EMAIL_SITE_PASSWORD não está configurado no arquivo .env'
        );
      }

      // Configuração do email
      const mailOptions = {
        from: {
          name: 'Profills Carton - Site',
          address: process.env.EMAIL_SITE
        },
        to: process.env.EMAIL_QUE_RECEBE_EMAILS,
        subject: `Nova Cotação: ${validatedData.machineTitle} - ${validatedData.name}`,
        html: emailTemplate,
        text: emailTextVersion,
        attachments
      };

      console.log('📧 Enviando email...');
      await transporter.sendMail(mailOptions);
      console.log('✅ Email enviado com sucesso!');
    } catch (emailError) {
      console.error('❌ Erro ao enviar email:', emailError);
      // Não falha a operação se o email der erro, apenas registra
      console.log('⚠️  Cotação foi processada mas email não foi enviado');
    }

    // Pequeno delay para simular processamento
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message:
        'Cotação enviada com sucesso! Nossa equipe entrará em contato em breve.'
    };
  } catch (error) {
    console.error('❌ Erro ao processar cotação:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Dados inválidos no formulário',
        errors: error.issues
      };
    }

    return {
      success: false,
      message: 'Erro interno do servidor. Tente novamente.'
    };
  }
}
