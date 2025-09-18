import React, { useState } from "react";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { machinesData } from "../data/machines-data";

interface MobileCalculatorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileCalculatorDrawer({
  isOpen,
  onClose,
}: MobileCalculatorDrawerProps) {
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerMonth, setDaysPerMonth] = useState(22);
  const [selectedMachine, setSelectedMachine] = useState("speed-line");

  const machine = machinesData.find((m) => m.id === selectedMachine);
  const monthlyProduction = machine
    ? machine.capacity * hoursPerDay * daysPerMonth
    : 0;

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={handleOpenChange}>
      <DrawerContent className="md:hidden">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-primary flex items-center gap-2 text-lg font-semibold">
            <Calculator className="size-5" />
            Calculadora de Produtividade
          </DrawerTitle>
          <DrawerDescription>
            Calcule a produtividade estimada da máquina selecionada
          </DrawerDescription>
        </DrawerHeader>

        {/* Conteúdo da calculadora - Mobile Optimized */}
        <div className="space-y-6 px-4 pb-8">
          {/* Seleção de máquina */}
          <div className="space-y-3">
            <label className="text-foreground text-sm font-semibold">
              Selecionar Máquina:
            </label>
            <Select value={selectedMachine} onValueChange={setSelectedMachine}>
              <SelectTrigger className="border-primary/20 focus:border-primary focus:ring-primary/20 h-12 w-full">
                <SelectValue placeholder="Selecione uma máquina" />
              </SelectTrigger>
              <SelectContent className="z-[100]">
                {machinesData.map((machine) => (
                  <SelectItem key={machine.id} value={machine.id}>
                    <div className="flex flex-col items-start py-1">
                      <span className="text-sm font-semibold">
                        {machine.title}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-foreground text-sm font-semibold">
                Horas por dia:
              </label>
              <div className="relative">
                <Input
                  type="number"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  min="1"
                  max="24"
                  className="focus:border-primary focus:ring-primary h-9 py-2 pr-8 text-center text-sm font-semibold"
                  placeholder="8"
                />
                <span className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2 text-sm font-medium">
                  h
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-foreground text-sm font-semibold">
                Dias por mês:
              </label>
              <div className="relative">
                <Input
                  type="number"
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                  min="1"
                  max="31"
                  className="focus:border-primary focus:ring-primary h-9 py-2 pr-8 text-center text-sm font-semibold"
                  placeholder="22"
                />
                <span className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2 text-sm font-medium">
                  d
                </span>
              </div>
            </div>
          </div>

          {/* Resultado principal */}
          <div className="bg-primary/10 border-primary/20 rounded-md border py-4 text-center">
            <div className="text-primary mb-2 text-2xl font-semibold">
              {monthlyProduction.toLocaleString()}
            </div>
            <div className="text-primary/70 text-sm font-medium tracking-wide uppercase">
              Unidades por mês
            </div>
          </div>

          {/* Cards de informações */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/30 rounded-md border p-4 text-center">
              <div className="text-muted-foreground mb-1 text-xs font-medium uppercase">
                Potência necessária
              </div>
              <div className="text-primary text-lg font-semibold">
                {machine?.powerConsumption} kW
              </div>
            </div>

            <div className="bg-muted/30 rounded-md border p-4 text-center">
              <div className="text-muted-foreground mb-1 text-xs font-medium uppercase">
                Produção/hora
              </div>
              <div className="text-primary text-lg font-semibold">
                {machine?.capacity}
              </div>
            </div>
          </div>

          {/* Informações da máquina */}
          {machine && (
            <div className="bg-muted/20 rounded-md p-4">
              <h4 className="text-primary mb-2 text-sm font-semibold">
                {machine.title}
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {machine.description.substring(0, 120)}...
              </p>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
