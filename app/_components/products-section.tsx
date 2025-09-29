import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import logo from '@/assets/image/logo2-no-bg.png';
import tubeMachine from '@/assets/image/maquinas-teste/MAQUINA-DE-BISNAGA-bg.png';
import miniPouch from '@/assets/image/maquinas-teste/MINI-POUCH2-bg.png';
import producaoIndustrial from '@/assets/image/maquinas-teste/Pouch Render Máximo-bg.png';
import tc4s from '@/assets/image/maquinas-teste/TC-4S-200-360-2-bg.png';
import mainMachine from '@/assets/image/maquinas-teste/maquina2.png';
import standUpPouch from '@/assets/image/produtos/pouch-bg.png';
import bisnaga from '@/assets/image/produtos/t1-removebg-preview.png';
import embalagemCartonada from '@/assets/image/produtos/t2-removebg-preview.png';
import embalagemCilindrica from '@/assets/image/produtos/t4-removebg-preview.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { NumberTicker } from '../../components/magicui/number-ticker';
import {
  ArrowRight,
  ChevronRight,
  Settings,
  TrendingUp,
  Zap
} from 'lucide-react';

// Interface padronizada para produtos

interface ProductData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  capacity: number;
  capacityUnit: string;
  image: string | StaticImageData;
  productImage: string | StaticImageData;
  badge: {
    text: string;
    icon: React.ReactNode;
    color: string;
  };
}

const productsData: ProductData[] = [
  {
    id: 'mini-pouch',
    name: 'Linha Mini Pouch',
    subtitle: 'Embalagens Stand-Up Pouch Mini',
    description:
      'Máquina compacta para produção de pouches flexíveis com alta precisão, sistema de dosagem volumétrica e servoacionamento para vedação segura.',
    highlights: ['Alta Precisão', 'Vedação Segura', 'Servoacionamento'],
    capacity: 1500,
    capacityUnit: 'un/h',
    image: miniPouch,
    productImage: standUpPouch,
    badge: {
      text: 'Compacta',
      icon: <Settings className='size-3' />,
      color: 'bg-primary/10 text-primary border-primary/20'
    }
  },
  {
    id: 'cartonadas',
    name: 'Linha Embalagens Cartonadas',
    subtitle: 'Embalagens Cartonadas Gable Top',
    description:
      'Sistema avançado para envase de líquidos em gable top, com dosagem volumétrica precisa, selagem térmica eficiente e alta higiene.',
    highlights: ['Sistema Estéril', 'Selagem Térmica', 'Alta Higiene'],
    capacity: 3000,
    capacityUnit: 'un/h',
    image: mainMachine,
    productImage: embalagemCartonada,
    badge: {
      text: 'Mais Popular',
      icon: <TrendingUp className='size-3' />,
      color: 'bg-primary/10 text-primary border-primary/20'
    }
  },
  {
    id: 'potes',
    name: 'Linha Potes',
    subtitle: 'Envasadora Rotativa para Potes',
    description:
      'Sistema rotativo especializado para embalagens cilíndricas, oferecendo fechamento automático e dupla funcionalidade para líquidos e secos.',
    highlights: [
      'Sistema Rotativo',
      'Fechamento Automático',
      'Dupla Funcionalidade'
    ],
    capacity: 1000,
    capacityUnit: 'un/h',
    image: tc4s,
    productImage: embalagemCilindrica,
    badge: {
      text: 'Versátil',
      icon: <Zap className='size-3' />,
      color: 'bg-primary/10 text-primary border-primary/20'
    }
  },
  {
    id: 'bisnagas',
    name: 'Linha Bisnagas',
    subtitle: 'Envasadoras para Bisnagas',
    description:
      'Solução especializada para envase em bisnagas plásticas, adaptável a múltiplas viscosidades com sistema de dosagem por prensa extrusora.',
    highlights: [
      'Múltiplas Viscosidades',
      'Fechamento Automático',
      'Versatilidade'
    ],
    capacity: 1800,
    capacityUnit: 'un/h',
    image: tubeMachine,
    productImage: bisnaga,
    badge: {
      text: 'Especializada',
      icon: <Settings className='size-3' />,
      color: 'bg-primary/10 text-primary border-primary/20'
    }
  }
];

// Componente Card redesenhado - Design elegante e responsivo mobile-first
const ProductCard = ({ product }: { product: ProductData }) => {
  return (
    <Card className='group relative overflow-hidden border-0 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)]'>
      <CardContent className='p-0'>
        {/* Layout Principal - Mobile-first com flexbox */}
        <div className='flex flex-col md:flex-row'>
          {/* Seção da Máquina - Responsiva */}
          <div className='relative flex flex-1 items-center justify-center bg-gradient-to-br p-6 md:p-12'>
            {/* Círculo sutil de fundo para dar contexto */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='from-primary/5 to-primary/10 h-60 w-60 rounded-full bg-gradient-to-br opacity-60 blur-3xl md:h-80 md:w-80'></div>
            </div>

            {/* Imagem da máquina com efeito glassmorphism */}
            <div className='relative z-10 transition-transform duration-700 ease-out group-hover:scale-105'>
              <div className='relative'>
                <Image
                  src={product.image}
                  alt={product.name}
                  loading='lazy'
                  className={`h-64 w-full object-contain drop-shadow-2xl md:h-80`}
                />
              </div>
            </div>

            {/* Métrica de capacidade - Responsiva */}
            <div className='bg-muted absolute bottom-4 left-4 z-10 rounded-md border border-white/20 p-3 shadow-lg backdrop-blur-md md:bottom-8 md:left-16 md:p-4'>
              <div className='text-center'>
                <div className='mb-1 text-2xl font-bold md:text-3xl'>
                  <NumberTicker
                    value={product.capacity}
                    textColor='text-primary'
                  />
                </div>
                <div className='text-xs font-medium tracking-wide uppercase'>
                  {product.capacityUnit}
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Conteúdo - Layout flex responsivo */}
          <div className='flex flex-1 flex-col justify-between p-6 md:p-12'>
            {/* Header */}
            <div className='space-y-4 md:space-y-6'>
              <div className='text-center md:text-left'>
                <h3 className='from-primary to-primary/60 mb-2 block bg-gradient-to-r bg-clip-text text-xl leading-tight font-bold text-transparent md:mb-3 md:text-3xl'>
                  {product.name}
                </h3>
                <p className='text-muted-foreground mb-4 text-base font-medium md:mb-6 md:text-lg'>
                  {product.subtitle}
                </p>
              </div>

              {/* Produto Final - Layout flex responsivo */}
              <div className='relative'>
                <div className='flex flex-row gap-4 md:items-center md:gap-6'>
                  <div className='relative flex justify-center md:justify-start'>
                    <div className='bg-muted flex h-20 w-16 items-center justify-center rounded-md px-2 md:h-24 md:w-20'>
                      <Image
                        src={product.productImage}
                        alt={product.subtitle}
                        loading='lazy'
                        className='h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110 md:h-16'
                      />
                    </div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-muted-foreground text-left text-sm leading-relaxed md:text-base'>
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Destaques - Flex wrap responsivo */}
              <div className='hidden flex-wrap justify-center gap-2 md:flex md:justify-start'>
                {product.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className='bg-muted text-muted-foreground hover:bg-muted-foreground/10 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors md:px-4 md:py-2 md:text-sm'>
                    <div className='bg-primary h-1.5 w-1.5 rounded-full'></div>
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Ação */}
            <div className='pt-6 md:pt-8'>
              <Link href={`/maquinas#${product.id}`} className='block'>
                <Button className='group/btn bg-primary hover:bg-primary/90 w-full rounded-md px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:px-8 md:py-4 md:text-base'>
                  Ver Mais Detalhes
                  <ChevronRight className='ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 md:h-5 md:w-5' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ProductsSection() {
  return (
    <section id='products' className='bg-muted/30 pt-0 pb-16 md:pb-20'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        {/* Header Responsivo - Mobile-first */}
        <div className='text-center'>
          <div className='mb-4 flex items-center justify-center'>
            <Image
              src={logo}
              alt='Profills'
              className='h-16 w-fit opacity-90 md:h-24'
            />
          </div>

          <div className='mb-8 space-y-4 md:mb-12 md:space-y-6'>
            <p className='text-muted-foreground mx-auto max-w-4xl px-4 text-lg leading-relaxed font-light md:text-xl'>
              Conheça nossa linha completa de máquinas industriais projetadas
              para diferentes necessidades, todas com foco na sustentabilidade e
              alta produtividade.
            </p>
          </div>
        </div>

        {/* Grid de Produtos - Layout Responsivo */}
        <div className='mb-12 space-y-6 md:mb-16 md:space-y-8'>
          {productsData.map((product) => (
            <div key={product.id} className='w-full'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Seção Destaque - Linha Speed Responsiva */}
        <div className='relative overflow-hidden rounded-md border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-lg md:rounded-3xl'>
          {/* Padrão de fundo sutil responsivo */}
          <div className='absolute inset-0 opacity-40'>
            <div className='bg-primary/20 absolute top-0 left-1/3 h-64 w-64 rounded-full blur-3xl md:h-96 md:w-96'></div>
            <div className='bg-secondary/20 absolute right-1/4 bottom-0 h-48 w-48 rounded-full blur-3xl md:h-64 md:w-64'></div>
          </div>

          <div className='relative z-10'>
            <div className='flex flex-col items-center md:flex-row'>
              {/* Seção de Conteúdo */}
              <div className='flex-1 p-8 md:p-16'>
                <div className='space-y-6 md:space-y-8'>
                  {/* Header Premium */}
                  <div className='space-y-4 text-center md:space-y-6 md:text-left'>
                    <h3 className='from-primary to-primary/60 mb-3 block bg-gradient-to-r bg-clip-text text-3xl leading-tight font-bold text-transparent md:mb-4 md:text-5xl'>
                      Linha Speed
                    </h3>
                    <h4 className='text-primary mb-4 text-xl font-semibold md:mb-6 md:text-3xl'>
                      Stand-Up Pouch Industrial
                    </h4>
                    <p className='text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:mx-0 md:text-lg'>
                      Nossa solução mais avançada para envase em embalagens
                      stand-up pouch, combinando acionamento mecânico de
                      precisão com tecnologia IoT integrada para máxima
                      eficiência e controle total do processo.
                    </p>
                  </div>

                  {/* Métricas Premium - Grid Responsivo */}
                  <div className='grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-6'>
                    <div className='bg-muted/30 flex-1 rounded-md border border-slate-200 px-3 py-4 text-center md:px-4'>
                      <div className='text-secondary text-xl font-bold md:text-2xl'>
                        <NumberTicker value={5400} textColor='text-primary' />
                      </div>
                      <div className='text-xs leading-tight font-medium tracking-wide uppercase'>
                        Unidades/Hora
                      </div>
                    </div>
                    <div className='bg-muted/30 flex-1 rounded-md border border-slate-200 px-3 py-4 text-center md:px-4'>
                      <div className='text-primary text-xl font-bold md:text-2xl'>
                        IoT
                      </div>
                      <div className='text-xs leading-tight font-medium tracking-wide uppercase'>
                        Controle
                        <br />
                        Integrado
                      </div>
                    </div>
                    <div className='bg-muted/30 flex-1 rounded-md border border-slate-200 px-3 py-4 text-center md:px-4'>
                      <div className='text-primary text-xl font-bold md:text-2xl'>
                        99%
                      </div>
                      <div className='text-xs leading-tight font-medium tracking-wide uppercase'>
                        Precisão
                      </div>
                    </div>
                    <div className='bg-muted/30 flex-1 rounded-md border border-slate-200 px-3 py-2 text-center md:px-4'>
                      <div className='text-primary text-xl font-bold md:text-2xl'>
                        24/7
                      </div>
                      <div className='text-xs leading-tight font-medium tracking-wide uppercase'>
                        Operação
                      </div>
                    </div>
                  </div>

                  {/* CTA Premium */}
                  <div className='flex justify-center pt-2'>
                    <Link href='/maquinas' className='w-full'>
                      <Button className='bg-primary hover:bg-primary/90 text-primary-foreground group w-full rounded-md border-0 px-6 py-3 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:px-8 md:py-4 md:text-lg'>
                        Conhecer Linha
                        <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 md:ml-3 md:h-5 md:w-5' />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Seção Visual */}
              <div className='relative flex-1 p-8 md:p-12'>
                {/* Container da máquina com efeito glassmorphism */}
                <div className='relative'>
                  {/* Círculo de fundo para contexto */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='from-primary/10 to-secondary/10 h-64 w-64 rounded-full bg-gradient-to-br blur-3xl md:h-96 md:w-96'></div>
                  </div>

                  {/* Imagem principal */}
                  <div className='relative z-10 scale-100 transition-transform duration-700 hover:scale-110 md:scale-105'>
                    <Image
                      src={producaoIndustrial}
                      alt='Linha Speed Stand-Up Pouch'
                      loading='lazy'
                      className='h-auto w-full object-contain drop-shadow-2xl'
                    />
                  </div>

                  {/* Produto em destaque - Responsivo */}
                  <div className='absolute -bottom-4 -left-4 z-20 md:-bottom-8 md:-left-8'>
                    <div className='rounded-md border border-slate-300/60 bg-white/70 p-4 shadow-2xl backdrop-blur-md md:rounded-3xl md:p-6'>
                      <div className='flex h-16 w-14 items-center justify-center md:h-24 md:w-20'>
                        <Image
                          src={standUpPouch}
                          alt='Stand-Up Pouch'
                          loading='lazy'
                          className='h-full w-auto object-contain drop-shadow-lg transition-transform duration-500 hover:scale-110'
                        />
                      </div>
                      <div className='mt-2 text-center md:mt-3'>
                        <div className='text-xs font-semibold text-slate-700'>
                          Produto Final
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
