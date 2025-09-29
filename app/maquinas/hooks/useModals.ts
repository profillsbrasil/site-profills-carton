import { useState } from 'react';

import { type StaticImageData } from 'next/image';

import { type MachineData } from '../data/machines-data';

export function useModals() {
  // Estado dos modais
  const [selectedMachineForQuote, setSelectedMachineForQuote] =
    useState<MachineData | null>(null);
  const [selectedImageForDialog, setSelectedImageForDialog] = useState<{
    image: string | StaticImageData;
    title: string;
  } | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Função para fechar todos os modais
  const closeAllModals = () => {
    setSelectedMachineForQuote(null);
    setSelectedImageForDialog(null);
    setIsCalculatorOpen(false);
  };

  // Handlers para Quote Modal
  const openQuoteModal = (machine: MachineData) => {
    closeAllModals();
    setSelectedMachineForQuote(machine);
  };

  const closeQuoteModal = () => {
    setSelectedMachineForQuote(null);
  };

  // Handlers para Image Dialog
  const openImageDialog = (image: string | StaticImageData, title: string) => {
    closeAllModals();
    setSelectedImageForDialog({ image, title });
  };

  const closeImageDialog = () => {
    setSelectedImageForDialog(null);
  };

  // Handlers para Calculator Drawer
  const openCalculator = () => {
    closeAllModals();
    setIsCalculatorOpen(true);
  };

  const closeCalculator = () => {
    setIsCalculatorOpen(false);
  };

  return {
    // Estado
    selectedMachineForQuote,
    selectedImageForDialog,
    isCalculatorOpen,

    // Handlers
    quote: {
      open: openQuoteModal,
      close: closeQuoteModal
    },

    image: {
      open: openImageDialog,
      close: closeImageDialog
    },
    calculator: {
      open: openCalculator,
      close: closeCalculator
    }
  };
}
