import { useCallback, useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { machinesData } from '../data/machines-data';
import { BarChart3 } from 'lucide-react';

export function DesktopCalculator() {
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerMonth, setDaysPerMonth] = useState(22);
  const [selectedMachine, setSelectedMachine] = useState('speed-line');

  // Validação e handlers para inputs
  const handleHoursChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (value >= 1 && value <= 24) {
        setHoursPerDay(value);
      }
    },
    []
  );

  const handleDaysChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (value >= 1 && value <= 31) {
        setDaysPerMonth(value);
      }
    },
    []
  );

  // Memoizar machine para evitar re-renders desnecessários
  const machine = machinesData.find((m) => m.id === selectedMachine);

  // Calcular produção mensal com validação
  const monthlyProduction =
    machine && hoursPerDay > 0 && daysPerMonth > 0
      ? machine.capacity * hoursPerDay * daysPerMonth
      : 0;

  return (
    <Card className='gap-0 md:sticky md:top-24'>
      <CardHeader className='p-4 md:px-6 md:py-0'>
        <CardTitle className='text-primary flex items-center gap-2 text-lg md:text-xl'>
          <BarChart3 className='size-4 md:size-5' />
          <span className='hidden md:inline'>Calculadora</span>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4 p-4 md:space-y-5 md:px-6 md:py-0'>
        <div className='space-y-2'>
          <label className='text-foreground text-sm font-semibold'>
            Máquina:
          </label>
          <Select value={selectedMachine} onValueChange={setSelectedMachine}>
            <SelectTrigger className='border-primary/20 focus:border-primary focus:ring-primary/20 h-fit w-full'>
              <SelectValue placeholder='Selecione uma máquina' />
            </SelectTrigger>
            <SelectContent>
              {machinesData.map((machine) => (
                <SelectItem key={machine.id} value={machine.id}>
                  <div className='flex flex-col'>
                    <span className='font-medium'>{machine.title}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <label className='text-foreground text-sm font-semibold'>
              Horas por dia:
            </label>
            <div className='relative'>
              <Input
                type='number'
                value={hoursPerDay}
                onChange={handleHoursChange}
                min='1'
                max='24'
                step='1'
                className='focus:border-primary focus:ring-primary h- pr-6 text-center text-sm font-semibold'
                placeholder='8'
                aria-label='Horas por dia'
              />
              <span className='text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 text-xs font-medium'>
                h
              </span>
            </div>
          </div>

          <div className='space-y-2'>
            <label className='text-foreground text-sm font-semibold'>
              Dias por mês:
            </label>
            <div className='relative'>
              <Input
                type='number'
                value={daysPerMonth}
                onChange={handleDaysChange}
                min='1'
                max='31'
                step='1'
                className='focus:border-primary focus:ring-primary h-10 pr-6 text-center text-sm font-semibold'
                placeholder='22'
                aria-label='Dias por mês'
              />
              <span className='text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 text-xs font-medium'>
                d
              </span>
            </div>
          </div>
        </div>

        <div className='bg-primary/10 border-primary/20 rounded-md border p-4 text-center md:p-4'>
          <div className='text-primary text-2xl font-bold md:text-2xl'>
            {monthlyProduction > 0
              ? monthlyProduction.toLocaleString('pt-BR')
              : '---'}
          </div>
          <div className='text-primary/70 text-sm font-medium md:text-sm'>
            Unidades/mês
          </div>
          {monthlyProduction === 0 && (
            <div className='text-muted-foreground mt-1 text-xs'>
              Selecione uma máquina e ajuste os valores
            </div>
          )}
        </div>

        <div className='grid gap-3 md:gap-4'>
          <div className='bg-muted/30 rounded-md border p-3 md:p-3'>
            <div className='text-muted-foreground mb-1 text-xs font-medium md:text-xs'>
              Potência necessária:
            </div>
            <div className='text-primary text-base font-semibold md:text-base'>
              {machine?.powerConsumption
                ? `${machine.powerConsumption} kW`
                : '---'}
            </div>
          </div>

          <div className='bg-muted/30 rounded-md border p-3 md:p-3'>
            <div className='text-muted-foreground mb-1 text-xs font-medium md:text-xs'>
              Área operação:
            </div>
            <div className='text-primary text-base font-semibold md:text-base'>
              {machine?.footprint || '---'}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
