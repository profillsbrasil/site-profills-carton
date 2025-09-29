import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id='contact' className='bg-muted/30 py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
          <div className='text-primary mb-4 flex items-center justify-center space-x-2'>
            <Mail className='h-5 w-5' />
            <span className='text-sm font-medium tracking-wider uppercase'>
              Entre em Contato
            </span>
          </div>
          <h2 className='text-foreground mb-6 font-serif text-3xl font-bold md:text-4xl'>
            Vamos Construir um Futuro Sustentável Juntos
          </h2>
          <p className='text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed'>
            Entre em contato conosco para descobrir como nossas soluções podem
            transformar sua produção de embalagens.
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-3'>
          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <Card className='border-border'>
              <CardHeader>
                <CardTitle className='text-foreground font-serif text-xl'>
                  Solicite um Orçamento
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <label className='text-foreground text-sm font-medium'>
                      Nome *
                    </label>
                    <Input
                      placeholder='Seu nome completo'
                      className='border-border'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-foreground text-sm font-medium'>
                      Empresa
                    </label>
                    <Input
                      placeholder='Nome da sua empresa'
                      className='border-border'
                    />
                  </div>
                </div>

                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <label className='text-foreground text-sm font-medium'>
                      Email *
                    </label>
                    <Input
                      type='email'
                      placeholder='seu@email.com'
                      className='border-border'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-foreground text-sm font-medium'>
                      Telefone
                    </label>
                    <Input
                      placeholder='(11) 99999-9999'
                      className='border-border'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-foreground text-sm font-medium'>
                    Produto de Interesse
                  </label>
                  <select className='border-border bg-background text-foreground w-full rounded-md border px-3 py-2'>
                    <option>Selecione um produto</option>
                    <option>EcoPack Pro 3000</option>
                    <option>GreenBox Compact</option>
                    <option>BioPack Industrial</option>
                    <option>SafePack Medical</option>
                    <option>Consultoria Personalizada</option>
                  </select>
                </div>

                <div className='space-y-2'>
                  <label className='text-foreground text-sm font-medium'>
                    Mensagem *
                  </label>
                  <Textarea
                    placeholder='Conte-nos sobre suas necessidades e como podemos ajudar...'
                    className='border-border min-h-[120px]'
                  />
                </div>

                <Button className='bg-primary hover:bg-primary/90 text-primary-foreground w-full'>
                  Enviar Solicitação
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            <Card className='border-border'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg'>
                    <MapPin className='text-primary h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-foreground mb-1 font-semibold'>
                      Endereço
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      Av. Industrial Sustentável, 1000
                      <br />
                      Distrito Ecológico
                      <br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-border'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg'>
                    <Phone className='text-primary h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-foreground mb-1 font-semibold'>
                      Telefone
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      +55 (11) 3456-7890
                      <br />
                      +55 (11) 99999-9999
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-border'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg'>
                    <Mail className='text-primary h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-foreground mb-1 font-semibold'>
                      Email
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      contato@profillscartons.com
                      <br />
                      vendas@profillscartons.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-border'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg'>
                    <Clock className='text-primary h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-foreground mb-1 font-semibold'>
                      Horário
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
