import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/image/logo2-no-bg.png';
import treeFooter from '@/assets/image/tree-footer.png';

import { Instagram, Mail } from 'lucide-react';

const products = [
  { name: 'Linha Speed', href: '/maquinas#speed-line' },
  { name: 'Linha Cartonadas', href: '/maquinas#cartonadas' },
  { name: 'Linha Mini Pouch', href: '/maquinas#mini-pouch' },
  { name: 'Linha Bisnagas', href: '/maquinas#bisnagas' },
  { name: 'Linha Potes', href: '/maquinas#potes' }
];

const services = [
  {
    name: 'Consultoria Técnica',
    href: `https://wa.me/5551996474579?text=${encodeURIComponent(
      'Olá tudo bem?\nEu vim através do site da *Profills Carton* e gostaria de solicitar uma consultoria técnica especializada.'
    )}`
  },
  {
    name: 'Manutenção',
    href: `https://wa.me/5551996474579?text=${encodeURIComponent(
      'Olá tudo bem?\nEu vim através do site da *Profills Carton* e gostaria de solicitar serviços de manutenção.'
    )}`
  },
  {
    name: 'Treinamento',
    href: `https://wa.me/5551996474579?text=${encodeURIComponent(
      'Olá tudo bem?\nEu vim através do site da *Profills Carton* e gostaria de solicitar treinamento para operação das máquinas.'
    )}`
  },
  {
    name: 'Suporte Técnico',
    href: `https://wa.me/5551996474579?text=${encodeURIComponent(
      'Olá tudo bem?\nEu vim através do site da *Profills Carton* e gostaria de solicitar suporte técnico.'
    )}`
  },
  {
    name: 'Peças e Acessórios',
    href: `https://wa.me/5551996474579?text=${encodeURIComponent(
      'Olá tudo bem?\nEu vim através do site da *Profills Carton* e gostaria de solicitar peças e acessórios.'
    )}`
  }
];

export default function Footer() {
  return (
    <footer className='relative overflow-hidden border-t bg-gradient-to-br from-white to-slate-50/50'>
      {/* Elementos de fundo decorativos */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='bg-primary/5 absolute -bottom-48 -left-24 h-96 w-96 rounded-full blur-3xl'></div>
        <div className='bg-secondary/5 absolute -top-24 -right-32 h-80 w-80 rounded-full blur-3xl'></div>
        <div className='bg-primary/3 absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full blur-3xl'></div>
      </div>

      <div className='absolute top-0 right-0 w-full'>
        <Image
          src={treeFooter}
          alt='Profills Carton'
          className='hidden h-fit w-1/2 object-cover opacity-3 md:block md:w-1/3 md:opacity-5'
        />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 pt-8 md:px-8 md:pt-10'>
        {/* Header minimalista do Footer */}
        <div className='mb-8 text-center md:mb-12'>
          <div className='mb-4 flex items-center justify-center md:mb-6'>
            <div className='relative'>
              <Image
                src={logo}
                alt='Profills Carton'
                className='h-16 w-fit opacity-90 transition-transform duration-300 hover:scale-105'
              />
            </div>
          </div>
        </div>

        {/* Layout flexbox moderno e minimalista */}
        <div className='mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:gap-12'>
          <div className='flex flex-row px-5 md:w-2/3'>
            {/* Produtos */}
            <div className='flex-1'>
              <h3 className='text-primary mb-3 text-base font-semibold md:mb-4 md:text-lg'>
                Produtos
              </h3>
              <div className='flex flex-col gap-2 md:gap-3'>
                {products.map((product, index) => (
                  <div key={index} className='group'>
                    <Link
                      href={product.href}
                      className='text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1 md:text-base'>
                      <div className='bg-primary/20 h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-125'></div>
                      {product.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Serviços */}
            <div className='flex-1'>
              <h3 className='text-primary mb-3 text-right text-base font-semibold md:mb-4 md:text-left md:text-lg'>
                Serviços
              </h3>
              <div className='flex flex-col gap-2 md:gap-3'>
                {services.map((service, index) => (
                  <div key={index} className='group'>
                    <Link
                      href={service.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-primary flex items-center justify-end gap-2 text-sm transition-all duration-300 hover:translate-x-1 md:justify-start md:text-base'>
                      <div className='bg-primary/20 hidden h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-125 md:block'></div>
                      {service.name}
                      <div className='bg-primary/20 ml-2 h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-125 md:hidden'></div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contato Rápido - Minimalista */}
          <div className='flex-1'>
            <h3 className='text-primary mb-3 hidden text-base font-semibold md:mb-4 md:block md:text-lg'>
              Contato
            </h3>
            <div className='flex flex-col gap-2 md:gap-3'>
              <Link
                href='https://www.instagram.com/profillscarton/'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-muted/30 group hover:bg-muted/50 block cursor-pointer rounded-md border border-white/20 px-3 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md md:px-4 md:py-3'>
                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 group-hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-md transition-colors'>
                    <Instagram className='text-primary h-4 w-4' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-xs font-medium tracking-wide uppercase opacity-70'>
                      Instagram
                    </p>
                    <p className='text-sm font-semibold'>@profillscarton</p>
                  </div>
                </div>
              </Link>

              <Link
                href='mailto:contato@profillscarton.com'
                className='bg-muted/30 group hover:bg-muted/50 block cursor-pointer rounded-md border border-white/20 px-3 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md md:px-4 md:py-3'>
                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 group-hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-md transition-colors'>
                    <Mail className='text-primary h-4 w-4' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-xs font-medium tracking-wide uppercase opacity-70'>
                      Email
                    </p>
                    <p className='text-sm font-semibold'>
                      contato@profillscarton.com
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Minimalista */}
        <div className='border-primary/20 border-t py-5 text-center md:py-8'>
          <p className='text-primary flex flex-col items-center justify-center text-xs md:flex-row md:text-sm'>
            © 2025 Profills Carton. <span>Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
