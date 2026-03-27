import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { ArrowRight, MessageCircle } from 'lucide-react';

import AboutSection from './_components/about-section';
import HeroSection from './_components/hero-section';
import NavbarHome from './_components/navbar-home';
import PackagingShowcase from './_components/packaging-showcase';
import ProductsSection from './_components/products-section';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <main className='relative min-h-screen w-full'>
        <HeroSection />
        <NavbarHome />
        <AboutSection />
        <ProductsSection />
        <PackagingShowcase />

        {/* CTA Section */}
        <section className='border-t bg-white py-16 md:py-20'>
          <div className='mx-auto max-w-7xl px-4 md:px-8'>
            <div className='flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left'>
              <div className='max-w-2xl'>
                <h2 className='text-foreground mb-2 font-serif text-2xl font-bold tracking-tight md:text-3xl'>
                  Pronto para modernizar sua produção?
                </h2>
                <p className='text-muted-foreground text-base md:text-lg'>
                  Solicite um orçamento sem compromisso. Nossa equipe técnica
                  responde em até 24 horas.
                </p>
              </div>
              <div className='flex flex-col gap-3 sm:flex-row'>
                <Link
                  href={`https://wa.me/5551996474579?text=${encodeURIComponent(
                    'Olá tudo bem?\nEu vim através do site da *Profills Carton* e gostaria de solicitar um orçamento.'
                  )}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Button
                    size='lg'
                    className='bg-primary hover:bg-primary/90 text-primary-foreground group'>
                    <MessageCircle className='mr-2 h-4 w-4' />
                    Solicitar Orçamento
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Button>
                </Link>
                <Link href='/maquinas'>
                  <Button size='lg' variant='outline' className='border-primary/20 text-primary hover:bg-primary/5'>
                    Ver Máquinas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
