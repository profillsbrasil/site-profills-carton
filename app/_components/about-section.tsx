import Image from 'next/image';

import raiz from '@/assets/image/raizes.png';

import { Eye, Handshake, Recycle, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='bg-muted/30 relative overflow-hidden py-14 md:py-20'>
      <div className='absolute top-24 -right-35 -z-10 scale-x-[-1]'>
        <Image
          src={raiz}
          alt='Arvore'
          loading='lazy'
          className='h-full w-full scale-110 rotate-20 opacity-5'
        />
      </div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 text-center'>
          <h2 className='text-foreground mb-3 font-serif text-3xl font-bold tracking-tight md:text-4xl'>
            Quem Somos
          </h2>
          <p className='text-muted-foreground mx-auto max-w-3xl text-base leading-relaxed md:text-lg'>
            Dinâmica e tecnológica, a Profills produz Máquinas Envasadoras para
            produtos líquidos, pastosos e sólidos. Desde 2013, unimos inovação,
            os melhores componentes e um time qualificado para superar as
            expectativas dos nossos clientes no Brasil e no exterior.
          </p>
        </div>

        <div className='mb-12 grid gap-8 md:grid-cols-2'>
          <div className='border-primary/30 border-l-2 pl-6'>
            <div className='mb-2 flex items-center gap-3'>
              <Target className='text-primary h-5 w-5' />
              <h3 className='text-lg font-semibold'>Missão</h3>
            </div>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Embalar o mundo com tecnologia, qualidade e responsabilidade.
            </p>
          </div>

          <div className='border-primary/30 border-l-2 pl-6'>
            <div className='mb-2 flex items-center gap-3'>
              <Eye className='text-primary h-5 w-5' />
              <h3 className='text-lg font-semibold'>Visão</h3>
            </div>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Ser referência em confiança e inovação, presente em todas as
              gôndolas do mercado.
            </p>
          </div>

          <div className='border-primary/30 border-l-2 pl-6'>
            <div className='mb-2 flex items-center gap-3'>
              <Handshake className='text-primary h-5 w-5' />
              <h3 className='text-lg font-semibold'>Valores</h3>
            </div>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Qualidade, confiança, segurança, valorização das pessoas e
              proteção dos recursos sociais, ambientais e econômicos.
            </p>
          </div>

          <div className='border-primary/30 border-l-2 pl-6'>
            <div className='mb-2 flex items-center gap-3'>
              <Recycle className='text-primary h-5 w-5' />
              <h3 className='text-lg font-semibold'>Compromisso</h3>
            </div>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Sustentabilidade e combate ao desperdício por meio de soluções
              de processamento e envase inteligentes.
            </p>
          </div>
        </div>

        <div className='rounded-md border bg-white p-8'>
          <div className='grid items-center gap-8 lg:grid-cols-2'>
            <div>
              <h3 className='text-foreground mb-4 text-center font-serif text-2xl font-bold tracking-tight md:text-left'>
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
            <div className='flex flex-wrap items-center justify-center gap-6 pt-4 md:justify-start md:gap-0 md:divide-x md:divide-border'>
              <div className='text-center md:pr-8'>
                <div className='text-foreground text-3xl font-bold'>2013</div>
                <div className='text-muted-foreground text-xs'>Fundação</div>
              </div>
              <div className='text-center md:px-8'>
                <div className='text-foreground text-3xl font-bold'>100+</div>
                <div className='text-muted-foreground text-xs'>Colaboradores</div>
              </div>
              <div className='text-center md:px-8'>
                <div className='text-foreground text-3xl font-bold'>3</div>
                <div className='text-muted-foreground text-xs'>Unidades no Brasil</div>
              </div>
              <div className='text-center md:pl-8'>
                <div className='text-foreground text-3xl font-bold'>10+</div>
                <div className='text-muted-foreground text-xs'>Países atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
