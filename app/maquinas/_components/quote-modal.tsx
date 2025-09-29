"use client";

import React, { useRef, useEffect, useTransition } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Package,
  CheckCircle2,
  Mail,
  User,
  Phone,
  Building,
  MessageSquare,
  Zap,
  Factory,
  TrendingUp,
  Loader2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { submitQuoteForm, type QuoteFormData } from "@/lib/actions/formEmail";
import { toast } from "sonner";
import { type MachineData } from "../data/machines-data";

// Schema de validação do formulário (client-side)
const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços")
    .refine(
      (value) => value.trim().split(" ").length >= 2,
      "Digite seu nome completo (nome e sobrenome)",
    ),
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Digite um email válido"),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .refine((value) => {
      const cleaned = value.replace(/\D/g, "");
      return cleaned.length >= 10 && cleaned.length <= 11;
    }, "Telefone deve ter 10 ou 11 dígitos")
    .refine((value) => {
      const cleaned = value.replace(/\D/g, "");
      // Verifica se não são todos números iguais
      return !/^(\d)\1+$/.test(cleaned);
    }, "Digite um telefone válido"),
  company: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface QuoteModalProps {
  machine: MachineData;
  isOpen: boolean;
  onClose: () => void;
}

// Função utilitária para formatar telefone brasileiro
const formatPhoneNumber = (value: string): string => {
  // Remove tudo que não for dígito
  const cleaned = value.replace(/\D/g, "");

  // Limita a 11 dígitos (celular com DDD)
  const truncated = cleaned.substring(0, 11);

  // Aplica formatação progressiva
  if (truncated.length === 0) return "";
  if (truncated.length <= 2) return `(${truncated}`;
  if (truncated.length <= 6) {
    return `(${truncated.substring(0, 2)}) ${truncated.substring(2)}`;
  }
  if (truncated.length <= 10) {
    // Telefone fixo: (11) 9999-9999
    return `(${truncated.substring(0, 2)}) ${truncated.substring(2, 6)}-${truncated.substring(6)}`;
  }
  // Celular: (11) 99999-9999
  return `(${truncated.substring(0, 2)}) ${truncated.substring(2, 7)}-${truncated.substring(7)}`;
};

export function QuoteModal({ machine, isOpen, onClose }: QuoteModalProps) {
  const [isPending, startTransition] = useTransition();
  const dialogContentRef = useRef<HTMLDivElement>(null);

  // Configuração do React Hook Form
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    mode: "onChange", // Valida em tempo real
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  // Verifica se o formulário está válido para habilitar o botão
  const { name, email, phone } = form.watch();
  const { errors } = form.formState;

  const isFormValid =
    name?.trim() &&
    email?.trim() &&
    phone?.trim() &&
    !errors.name &&
    !errors.email &&
    !errors.phone &&
    Object.keys(errors).length === 0;

  // Reset scroll quando o modal abre
  useEffect(() => {
    if (isOpen && dialogContentRef.current) {
      // Reset scroll para o topo
      dialogContentRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  // Reset form quando fechar
  useEffect(() => {
    if (!isOpen) {
      form.reset();
    }
  }, [isOpen, form]);

  // Submissão do formulário

  const onSubmit = async (values: QuoteFormValues) => {
    // Força validação antes de submeter
    const isValid = await form.trigger();

    if (!isValid) {
      toast.error("Por favor, corrija os campos destacados em vermelho.");
      return;
    }

    startTransition(async () => {
      try {
        // Preparar dados completos para envio
        const formData: QuoteFormData = {
          ...values,
          // Dados da máquina
          machineId: machine.id,
          machineTitle: machine.title,
          machineSubtitle: machine.subtitle,
          machineCapacity: machine.capacity,
          machineCapacityUnit: machine.capacityUnit,
          machinePowerConsumption: machine.powerConsumption,
          machineFootprint: machine.footprint,
          machineCategory: machine.category,
        };

        const result = await submitQuoteForm(formData);

        if (result.success) {
          toast.success(result.message);
          form.reset();
          onClose();
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        console.error("Erro ao enviar cotação:", error);
        toast.error("Erro interno. Tente novamente.");
      }
    });
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        ref={dialogContentRef}
        className="h-[95vh] w-[95vw] max-w-4xl overflow-y-auto p-4 md:h-[90vh] md:min-w-6xl md:p-6"
      >
        <DialogHeader className="space-y-2 md:space-y-3">
          <DialogTitle className="text-primary flex items-center gap-2 text-lg md:gap-3 md:text-2xl">
            <Package className="h-5 w-5 md:h-6 md:w-6" />
            <span className="line-clamp-2 md:line-clamp-1">
              Solicitar Cotação - {machine.title}
            </span>
          </DialogTitle>
          <DialogDescription className="text-left text-sm md:text-base">
            Configure sua cotação personalizada e conheça todos os detalhes
            técnicos desta máquina.
          </DialogDescription>
        </DialogHeader>

        {/* Layout Principal - Responsivo */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          {/* Imagem da Máquina - Mais compacta no mobile */}
          <div className="flex-shrink-0 md:w-2/5">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video md:aspect-square">
                  <Image
                    src={machine.machineImage}
                    alt={machine.title}
                    fill
                    loading="eager"
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Especificações - Layout otimizado */}
          <div className="flex-1 space-y-4 md:space-y-6">
            {/* Informações Principais */}
            <div className="space-y-3 md:space-y-4">
              <div className="space-y-1 md:space-y-2">
                <h3 className="text-primary text-lg font-bold md:text-xl">
                  {machine.subtitle}
                </h3>
                <p className="text-muted-foreground hidden text-sm leading-relaxed md:block">
                  {machine.description}
                </p>
              </div>

              {/* Métricas Principais - Grid responsivo melhorado */}
              <div className="hidden grid-cols-1 gap-3 md:grid md:grid-cols-3 md:gap-4">
                <div className="bg-primary/10 rounded-md p-3 text-center">
                  <div className="mb-1 flex items-center justify-center gap-1">
                    <TrendingUp className="text-primary h-4 w-4" />
                    <span className="text-primary text-lg font-bold md:text-xl">
                      {machine.capacity}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-xs uppercase">
                    {machine.capacityUnit}
                  </span>
                </div>
                <div className="bg-primary/10 rounded-md p-3 text-center">
                  <div className="mb-1 flex items-center justify-center gap-1">
                    <Zap className="text-primary h-4 w-4" />
                    <span className="text-primary text-lg font-bold md:text-xl">
                      {machine.powerConsumption}kW
                    </span>
                  </div>
                  <span className="text-muted-foreground text-xs uppercase">
                    Potência
                  </span>
                </div>
                <div className="bg-primary/10 rounded-md p-3 text-center">
                  <div className="mb-1 flex items-center justify-center gap-1">
                    <Factory className="text-primary h-4 w-4" />
                    <span className="text-primary text-sm font-bold md:text-lg">
                      {machine.footprint.split(" ")[0]}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-xs uppercase">
                    Área m²
                  </span>
                </div>
              </div>

              {/* Características Principais */}
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="text-primary h-4 w-4" />
                  Características
                </h4>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {machine.highlights.map((highlight, idx) => (
                    <Badge
                      key={idx}
                      className="bg-primary/10 text-primary text-xs"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Accordion para Embalagens Compatíveis */}
              <Accordion
                type="single"
                defaultValue="packaging"
                collapsible
                className="hidden w-full md:block"
              >
                <AccordionItem value="packaging">
                  <AccordionTrigger className="text-primary hover:text-primary/80 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Embalagens Compatíveis
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 md:space-y-4">
                      {/* Imagem única do produto */}
                      <div className="bg-muted/30 relative overflow-hidden rounded-md p-4 md:p-6">
                        <div className="flex h-full items-center justify-center">
                          <Image
                            src={machine.productImage}
                            alt={`Produto ${machine.title}`}

                            className="object-contain w-1/3 transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <Badge
                          className="absolute top-3 right-3 text-xs"
                          variant="outline"
                        >
                          Produto
                        </Badge>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Formulário de Contato - Espaçamento otimizado */}
        <div className="space-y-4 border-t pt-4 md:space-y-6 md:pt-6">
          <h3 className="flex items-center gap-2 text-base font-semibold md:text-lg">
            <Mail className="text-primary h-4 w-4 md:h-5 md:w-5" />
            Dados para Cotação
          </h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="gap-1">
                      <FormLabel className="flex items-center gap-2 font-medium">
                        <User className="text-primary h-4 w-4" />
                        Nome Completo *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          autoComplete="name"
                          disabled={isPending}
                          className={
                            form.formState.errors.name
                              ? "border-red-500 placeholder:text-sm focus:border-red-500 focus:ring-red-500/20 md:placeholder:text-base"
                              : "placeholder:text-sm md:placeholder:text-base"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 font-medium">
                        <Mail className="text-primary h-4 w-4" />
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          autoComplete="email"
                          disabled={isPending}
                          className={
                            form.formState.errors.email
                              ? "border-red-500 placeholder:text-sm focus:border-red-500 focus:ring-red-500/20 md:placeholder:text-base"
                              : "placeholder:text-sm md:placeholder:text-base"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 font-medium">
                        <Phone className="text-primary h-4 w-4" />
                        WhatsApp *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(99) 99999-9999"
                          autoComplete="tel"
                          maxLength={15}
                          disabled={isPending}
                          className={
                            form.formState.errors.phone
                              ? "border-red-500 placeholder:text-sm focus:border-red-500 focus:ring-red-500/20 md:placeholder:text-base"
                              : "placeholder:text-sm md:placeholder:text-base"
                          }
                          {...field}
                          onChange={(e) => {
                            const formattedValue = formatPhoneNumber(
                              e.target.value,
                            );
                            field.onChange(formattedValue);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 font-medium">
                        <Building className="text-primary h-4 w-4" />
                        Empresa
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nome da sua empresa"
                          autoComplete="organization"
                          className="placeholder:text-sm md:placeholder:text-base"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 font-medium">
                      <MessageSquare className="text-primary h-4 w-4" />
                      Necessidades Específicas
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva seus requisitos, volume de produção esperado, tipo de produto a envasar..."
                        rows={3}
                        className="h-20 w-full resize-none placeholder:text-sm md:h-28 md:placeholder:text-base"
                        maxLength={1000}
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="flex flex-col items-center gap-3 border-t pt-4 md:flex-row md:justify-between md:pt-6">
                <div className="text-muted-foreground text-xs md:text-sm">
                  * Campos obrigatórios para envio da cotação
                </div>
                <div className="flex flex-col items-center gap-4 md:flex-row-reverse">
                  <Button
                    type="submit"
                    disabled={isPending || !isFormValid}
                    className="text-primary-foreground w-full shadow-lg disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                    size="lg"
                  >
                    {isPending ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Mail className="mr-2 h-4 w-4" />
                    )}
                    {isPending ? "Enviando..." : "Solicitar Cotação"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={onClose}
                    disabled={isPending}
                    className="w-full md:w-auto"
                  >
                    Cancelar
                  </Button>
                </div>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
