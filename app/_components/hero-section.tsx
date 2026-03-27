'use client';

import Image from 'next/image';
import Link from 'next/link';

import image5 from '@/assets/image/maquinas-teste/MAQUINA-DE-BISNAGA-bg.png';
import image4 from '@/assets/image/maquinas-teste/MINI-POUCH2-bg.png';
import image3 from '@/assets/image/maquinas-teste/Pouch Render Máximo-bg.png';
import image2 from '@/assets/image/maquinas-teste/TC-4S-200-360-2-bg.png';
import image1 from '@/assets/image/maquinas-teste/maquina2.png';
import tree from '@/assets/image/tree-img2.png';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { Marquee } from '@/components/magicui/marquee';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, Circle } from 'lucide-react';

const images = [image1, image2, image3, image4, image5];

export default function HeroSection() {
  return (
    <section className='bg-muted/30 relative flex min-h-[92vh] w-full flex-col overflow-hidden'>
      {/* Background tree - only visible on desktop */}
      <div className='absolute inset-0 -z-10 hidden items-center justify-end md:flex'>
        <Image
          src={tree}
          alt='Arvore'
          loading='eager'
          className='h-full w-full scale-x-[-1] opacity-100 md:w-1/2 md:opacity-10'
        />
      </div>

      {/* Top marquee banner */}
      <div className='bg-primary absolute top-0 left-0 z-10 flex h-8 w-full items-center justify-center text-white'>
        <Marquee className='flex items-center text-xs font-semibold tracking-wide'>
          <span className='flex items-center gap-3 uppercase'>
            <Circle className='h-1.5 w-1.5 fill-current' />
            Embalagens Cartonadas
          </span>
          <span className='flex items-center gap-3 uppercase'>
            <Circle className='h-1.5 w-1.5 fill-current' />
            Bisnagas
          </span>
          <span className='flex items-center gap-3 uppercase'>
            <Circle className='h-1.5 w-1.5 fill-current' />
            Stand-Up Pouch
          </span>
          <span className='flex items-center gap-3 uppercase'>
            <Circle className='h-1.5 w-1.5 fill-current' />
            Potes
          </span>
          <span className='flex items-center gap-3 uppercase'>
            <Circle className='h-1.5 w-1.5 fill-current' />
            Mini Pouch
          </span>
        </Marquee>
      </div>

      {/* Main content container */}
      <div className='flex flex-1 flex-col items-center justify-center px-4 pt-12 md:px-8 md:pt-8'>
        <div className='flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-12 md:flex-row'>
          {/* Content section */}
          <div className='flex w-full flex-col gap-6 text-center md:w-1/2 md:gap-8 md:text-left'>
            <div className='w-full'>
              <h1 className='mb-6 font-serif text-3xl leading-tight font-bold tracking-tight md:mb-8 md:text-6xl md:leading-14'>
                <BoxReveal boxColor={'#45ad4a'} duration={0.5}>
                  <span className='text-foreground'>Construindo um</span>
                </BoxReveal>
                <BoxReveal boxColor={'#45ad4a'} duration={0.5}>
                  <span className='from-primary to-primary/60 block bg-gradient-to-r bg-clip-text text-transparent'>
                    Futuro Sustentável
                  </span>
                </BoxReveal>
              </h1>
              <BoxReveal boxColor={'#45ad4a'} duration={0.5}>
                <p className='text-muted-foreground mx-auto max-w-xl text-left text-base leading-relaxed md:mx-0 md:text-lg'>
                  Máquinas envasadoras de alta performance para embalagens
                  cartonadas, pouches, bisnagas e potes. Tecnologia brasileira
                  com presença em mais de 10 países.
                </p>
              </BoxReveal>
            </div>

            <div className='flex flex-col gap-3 md:flex-row md:gap-4'>
              <Link href='#products' className='w-full md:w-auto'>
                <Button
                  size='lg'
                  className='group bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto'>
                  Conheça Nossos Produtos
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Button>
              </Link>
            </div>
          </div>

          {/* Images section */}
          <div className='flex w-full items-center justify-center md:w-1/2'>
            {/* Mobile: Single featured image */}
            <div className='block w-full max-w-sm md:hidden'>
              <Image
                src={image1}
                loading='eager'
                alt='Máquina Profills para produção de embalagens sustentáveis'
                className='h-auto w-full object-contain drop-shadow-2xl'
                priority
              />
            </div>

            {/* Desktop: Full carousel */}
            <Carousel
              plugins={[
                Autoplay({
                  delay: 4000
                })
              ]}
              className='hidden h-full w-full items-center justify-center md:flex'>
              <CarouselContent className='rounded-md'>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className='relative'>
                      <Image
                        src={image}
                        loading='eager'
                        alt='Máquina Profills para produção de embalagens sustentáveis'
                        className={`h-auto w-full scale-105 rounded-md object-contain drop-shadow-xl`}
                        priority
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
