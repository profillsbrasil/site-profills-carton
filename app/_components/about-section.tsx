import Image from 'next/image';

import raiz from '@/assets/image/raizes.png';
import { Card, CardContent } from '@/components/ui/card';

import { Eye, Globe2, Handshake, MapPin, Recycle, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='bg-muted/30 relative overflow-hidden py-14 md:py-20'>
      <div className='absolute top-24 -right-35 -z-10 scale-x-[-1]'>
        <Image
          src={raiz}
          alt='Arvore'
          loading='eager'
          className='h-full w-full scale-110 rotate-20 opacity-5'
        />
      </div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 text-center'>
          <h2 className='from-primary to-primary/60 mb-3 block bg-gradient-to-r bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl'>
            Quem Somos
          </h2>
          <p className='text-muted-foreground mx-auto max-w-3xl text-base leading-relaxed md:text-lg'>
            Dinâmica e tecnológica, a Profills produz Máquinas Envasadoras para
            produtos líquidos, pastosos e sólidos. Desde 2013, unimos inovação,
            os melhores componentes e um time qualificado para superar as
            expectativas dos nossos clientes no Brasil e no exterior.
          </p>
        </div>

        <div className='mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <Card className='group border-border/60 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <div className='from-primary/10 absolute -inset-1 rounded-md bg-gradient-to-br to-transparent blur' />
            </div>
            <CardContent className='p-6 text-center'>
              <div className='bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'>
                <Target className='text-primary h-8 w-8' />
              </div>
              <h3 className='mb-2 text-lg font-semibold'>Missão</h3>
              <p className='text-muted-foreground text-sm'>
                Embalar o mundo com tecnologia, qualidade e responsabilidade.
              </p>
            </CardContent>
          </Card>

          <Card className='group border-border/60 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <div className='from-primary/10 absolute -inset-1 rounded-md bg-gradient-to-br to-transparent blur' />
            </div>
            <CardContent className='p-6 text-center'>
              <div className='bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'>
                <Eye className='text-primary h-8 w-8' />
              </div>
              <h3 className='mb-2 text-lg font-semibold'>Visão</h3>
              <p className='text-muted-foreground text-sm'>
                Ser referência em confiança e inovação, presente em todas as
                gôndolas do mercado.
              </p>
            </CardContent>
          </Card>

          <Card className='group border-border/60 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <div className='from-primary/10 absolute -inset-1 rounded-md bg-gradient-to-br to-transparent blur' />
            </div>
            <CardContent className='p-6 text-center'>
              <div className='bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'>
                <Handshake className='text-primary h-8 w-8' />
              </div>
              <h3 className='mb-2 text-lg font-semibold'>Valores</h3>
              <p className='text-muted-foreground text-sm'>
                Qualidade, confiança, segurança, valorização das pessoas e
                proteção dos recursos sociais, ambientais e econômicos.
              </p>
            </CardContent>
          </Card>

          <Card className='group border-border/60 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <div className='from-primary/10 absolute -inset-1 rounded-md bg-gradient-to-br to-transparent blur' />
            </div>
            <CardContent className='p-6 text-center'>
              <div className='bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'>
                <Recycle className='text-primary h-8 w-8' />
              </div>
              <h3 className='text-foreground mb-2 text-lg font-semibold'>
                Compromisso
              </h3>
              <p className='text-muted-foreground text-sm'>
                Sustentabilidade e combate ao desperdício por meio de soluções
                de processamento e envase inteligentes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='rounded-md border bg-white p-8'>
          <div className='grid items-center gap-8 lg:grid-cols-2'>
            <div>
              <h3 className='from-primary to-primary/60 mb-4 block bg-gradient-to-r bg-clip-text text-center font-serif text-2xl font-bold text-transparent md:text-left'>
                Nossa História
              </h3>
              <p className='text-muted-foreground mb-4 leading-relaxed'>
                Nascemos em 2013 fabricando máquinas envasadoras verticais. De
                lá pra cá, ampliamos nosso portfólio, atravessamos fronteiras e
                nos tornamos referência em produção no setor, com foco em
                tecnologia acessível e eficiente.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                Com sede no Brasil e unidades em Curitiba (PR), Cerqueira César
                (SP) e Belém (PA), atendemos todos os estados e expandimos para
                o mercado internacional oferecendo instalação, suporte e
                capacitação.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='group border-border/60 bg-muted/30 hover:bg-primary/10 rounded-lg border p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm'>
                <div className='text-primary mb-1 text-sm font-medium'>
                  Desde
                </div>
                <div className='mb-1 text-2xl font-bold'>2013</div>
                <div className='text-muted-foreground text-xs'>
                  Ano de fundação
                </div>
              </div>
              <div className='group border-border/60 bg-muted/30 hover:bg-primary/10 rounded-lg border p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm'>
                <div className='text-primary mb-1 text-sm font-medium'>
                  Equipe
                </div>
                <div className='mb-1 text-2xl font-bold'>100+</div>
                <div className='text-muted-foreground text-xs'>
                  Colaboradores diretos
                </div>
              </div>
              <div className='group border-border/60 bg-muted/30 hover:bg-primary/10 rounded-lg border p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm'>
                <div className='mx-auto mb-1 flex h-6 w-6 items-center justify-center'>
                  <MapPin className='text-primary h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5' />
                </div>
                <div className='mb-1 text-2xl font-bold'>3</div>
                <div className='text-muted-foreground text-xs'>
                  Unidades no Brasil
                </div>
              </div>
              <div className='group border-border/60 bg-muted/30 hover:bg-primary/10 rounded-lg border p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm'>
                <div className='mx-auto mb-1 flex h-6 w-6 items-center justify-center'>
                  <Globe2 className='text-primary h-5 w-5 transition-transform duration-300 group-hover:scale-110' />
                </div>
                <div className='mb-1 text-2xl font-bold'>10+</div>
                <div className='text-muted-foreground text-xs'>
                  Presença internacional
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
