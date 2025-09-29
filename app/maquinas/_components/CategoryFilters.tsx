import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import {
  MACHINE_CATEGORIES,
  type MachineCategory
} from '../data/machines-data';
import { Calculator } from 'lucide-react';

interface CategoryFiltersProps {
  selectedCategory: MachineCategory;
  onCategoryChange: (category: MachineCategory) => void;
  onCalculatorOpen: () => void;
}

export function CategoryFilters({
  selectedCategory,
  onCategoryChange,
  onCalculatorOpen
}: CategoryFiltersProps) {
  return (
    <div className='border-border mb-4 rounded-md border bg-white shadow-sm md:mb-5 md:rounded-md'>
      {/* Header mobile com calculadora */}
      <div className='mb-2 flex items-center justify-between p-3 md:hidden'>
        <h3 className='text-foreground text-base font-semibold'>Filtros</h3>
        <Button
          onClick={onCalculatorOpen}
          size='sm'
          variant='outline'
          className='bg-primary/5 text-primary hover:bg-primary/10 border-primary/20 h-8 px-3'>
          <Calculator className='mr-1.5 size-3.5' />
          <span className='text-xs'>Calculadora</span>
        </Button>
      </div>

      {/* Container dos filtros */}
      <div className='relative'>
        <div className='flex w-full flex-col gap-3 p-3 md:flex-row md:items-center md:justify-center md:gap-4 md:p-4'>
          {/* Filtros por categoria - Scroll horizontal mobile */}
          <div className='flex flex-col md:flex-row md:items-center md:justify-center'>
            <div className='scrollbar-hide flex gap-3 overflow-x-auto px-2 pb-2 md:gap-2 md:overflow-visible md:px-0 md:pb-0'>
              {MACHINE_CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category.id;
                return (
                  <Badge
                    key={category.id}
                    variant={isSelected ? 'default' : 'outline'}
                    className={cn(
                      // Base styles
                      'flex-shrink-0 cursor-pointer rounded-md border transition-all duration-200 active:scale-95',
                      'min-w-0 px-4 py-2 text-xs font-medium whitespace-nowrap md:text-sm',
                      // Conditional styles
                      isSelected
                        ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                        : 'bg-background hover:border-primary/30 text-foreground hover:bg-primary/10'
                    )}
                    onClick={() => onCategoryChange(category.id)}>
                    {category.label}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
