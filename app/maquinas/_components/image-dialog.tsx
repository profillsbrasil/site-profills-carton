"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Package, Loader2, ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImageDialogProps {
  image: string | StaticImageData;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageDialog({
  image,
  title,
  isOpen,
  onClose,
}: ImageDialogProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      // Reset states when closing
      setTimeout(() => {
        setIsLoading(true);
        setHasError(false);
      }, 200);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="border-primary/20 flex h-[95vh] w-[95vw] max-w-[90vw] flex-col p-0 md:h-[80vh] md:max-w-[85vw] md:min-w-[70vw]">
        {/* Header */}
        <DialogHeader className="border-primary/10 flex-shrink-0 border-b p-4 pb-3 md:p-6 md:pb-4">
          <DialogTitle className="text-primary flex items-center gap-2 text-lg md:gap-3 md:text-2xl">
            <Package className="size-5 md:size-6" />
            <span className="truncate">{title}</span>
          </DialogTitle>
        </DialogHeader>

        {/* Container principal da imagem */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-2 md:p-4">
          {/* Loading State */}
          {isLoading && (
            <div className="bg-muted/50 absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="text-primary size-8 animate-spin md:size-12" />
                <span className="text-muted-foreground text-sm font-medium">
                  Carregando imagem...
                </span>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="flex flex-col items-center gap-4 p-8">
              <ImageIcon className="text-muted-foreground size-16 md:size-24" />
              <div className="text-center">
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Erro ao carregar imagem
                </h3>
                <p className="text-muted-foreground text-sm">
                  Não foi possível carregar a imagem. Tente novamente.
                </p>
              </div>
            </div>
          )}

          {/* Image */}
          {!hasError && (
            <Image
              src={image}
              alt={title}
              className={`h-auto max-h-[75vh] w-full max-w-full object-contain transition-opacity duration-300 md:h-[70vh] md:w-fit ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              loading="eager"
              priority
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 70vw, 85vw"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
