'use client';

import { useState } from 'react';

import Image from 'next/image';

import logo from '@/assets/image/logo2-no-bg.png';

import { CategoryFilters } from './_components/CategoryFilters';
import { DesktopCalculator } from './_components/DesktopCalculator';
import { MobileCalculatorDrawer } from './_components/MobileCalculatorDrawer';
// Componentes locais
import { TechnicalMachineCard } from './_components/TechnicalMachineCard';
import { ImageDialog } from './_components/image-dialog';
import NavbarOutros from './_components/navbar-outros';
import { QuoteModal } from './_components/quote-modal';
// Dados e tipos
import { type MachineCategory, machinesData } from './data/machines-data';
// Hooks
import { useModals } from './hooks/useModals';

export default function Maquinas() {
  const [selectedCategory, setSelectedCategory] =
    useState<MachineCategory>('all');

  // Usar hooks customizados para gerenciar modais
  const modals = useModals();

  // Filtrar máquinas por categoria
  const filteredMachines =
    selectedCategory === 'all'
      ? machinesData
      : machinesData.filter((machine) => machine.category === selectedCategory);

  return (
    <div className='from-background via-muted/20 to-background min-h-screen w-full bg-gradient-to-br'>
      <NavbarOutros />

      <section className='w-full'>
        <div className='mx-auto w-full max-w-7xl px-4 pt-4 pb-8 md:px-8 md:pt-8 md:pb-16'>
          {/* Hero Section */}
          <div className='relative mb-8 overflow-hidden rounded-md border bg-white bg-gradient-to-br md:mb-12 md:rounded-md'>
            <div className='px-4 pt-4 pb-6 md:p-16'>
              <div className='mx-auto max-w-5xl text-center'>
                {/* Logo e badge - Mobile Responsive */}
                <div className='mb-6 hidden items-center justify-center gap-2 md:mb-8 md:flex md:gap-4'>
                  <Image
                    src={logo}
                    alt='Profills'
                    loading='eager'
                    className='h-12 w-fit opacity-90 md:h-16'
                  />
                </div>

                <h1 className='from-primary to-secondary mb-3 bg-gradient-to-r bg-clip-text text-2xl leading-tight font-bold text-transparent md:mb-6 md:text-6xl'>
                  Linha Completa de Máquinas
                </h1>

                <p className='text-muted-foreground mx-auto mb-0 max-w-4xl text-sm leading-relaxed md:mb-8 md:text-xl'>
                  Descubra nossa linha completa de máquinas industriais de
                  última geração, projetadas com tecnologia avançada para
                  maximizar produtividade, eficiência e sustentabilidade em
                  operações industriais.
                </p>
              </div>
            </div>
          </div>

          {/* Filtros de categoria */}
          <CategoryFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onCalculatorOpen={modals.calculator.open}
          />

          {/* Layout principal com sidebar responsivo */}
          <div className='grid gap-4 md:grid-cols-4 md:gap-8'>
            {/* Sidebar - Desktop apenas */}
            <div className='hidden space-y-6 md:col-span-1 md:block'>
              <DesktopCalculator />
            </div>

            {/* Grid principal de máquinas - Full width mobile */}
            <div className='w-full max-w-full overflow-x-hidden md:col-span-3'>
              <div className='w-full space-y-4 md:space-y-8'>
                {filteredMachines.map((machine) => (
                  <div
                    key={machine.id}
                    id={machine.id}
                    className='w-full max-w-full scroll-mt-24'>
                    <TechnicalMachineCard
                      machine={machine}
                      onQuoteClick={modals.quote.open}
                      onImageClick={modals.image.open}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drawer mobile para calculadora */}
          <MobileCalculatorDrawer
            isOpen={modals.isCalculatorOpen}
            onClose={modals.calculator.close}
          />
        </div>
      </section>

      {/* Modais */}
      {modals.selectedMachineForQuote && (
        <QuoteModal
          machine={modals.selectedMachineForQuote}
          isOpen={!!modals.selectedMachineForQuote}
          onClose={modals.quote.close}
        />
      )}

      {modals.selectedImageForDialog && (
        <ImageDialog
          image={modals.selectedImageForDialog.image}
          title={modals.selectedImageForDialog.title}
          isOpen={!!modals.selectedImageForDialog}
          onClose={modals.image.close}
        />
      )}
    </div>
  );
}
