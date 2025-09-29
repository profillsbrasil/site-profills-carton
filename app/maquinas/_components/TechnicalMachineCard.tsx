import { useMemo } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  TrendingUp,
  Zap,
  Layers,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Package,
  Expand,
  Cpu,
  Factory,
  Settings,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { type MachineData } from "../data/machines-data";

interface TechnicalMachineCardProps {
  machine: MachineData;
  onQuoteClick: (machine: MachineData) => void;
  onImageClick: (image: string | StaticImageData, title: string) => void;
}

const categoryIcons = {
  premium: <Cpu className="size-4" />,
  industrial: <Factory className="size-4" />,
  compact: <Settings className="size-4" />,
  specialized: <Layers className="size-4" />,
};

// Componente para métricas reutilizáveis
interface MetricCardProps {
  icon: React.ReactNode;
  value: string | number;
  unit: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}

function MetricCard({
  icon,
  value,
  unit,
  label,
  size = "md",
}: MetricCardProps) {
  const sizeClasses = {
    sm: {
      container: "px-2 py-1.5 md:px-3 md:py-2",
      icon: "size-3 md:size-4",
      value: "text-sm md:text-base",
      unit: "text-[10px] md:text-xs",
    },
    md: {
      container: "px-2 py-1.5 md:px-4 md:py-2",
      icon: "size-3 md:size-4",
      value: "text-sm font-bold md:text-lg",
      unit: "text-[10px] md:text-xs",
    },
    lg: {
      container: "p-3 md:p-4",
      icon: "size-4 md:size-5",
      value: "text-lg font-bold md:text-2xl",
      unit: "text-[10px] md:text-xs",
    },
  };

  const classes = sizeClasses[size];

  return (
    <div
      className={`bg-primary/10 rounded-md text-center ${classes.container}`}
    >
      <div className="mb-1 flex items-center justify-center gap-3">
        <span className={`text-primary flex items-center ${classes.icon}`}>
          {icon}
        </span>
        <span className={`text-primary ${classes.value}`}>
          {typeof value === "number" ? value.toLocaleString("pt-BR") : value}
        </span>
      </div>
      <div className={`text-muted-foreground uppercase ${classes.unit}`}>
        {unit}
        {label && ` - ${label}`}
      </div>
    </div>
  );
}

export function TechnicalMachineCard({
  machine,
  onQuoteClick,
  onImageClick,
}: TechnicalMachineCardProps) {
  // Memoizar dados processados para evitar re-calculations
  const processedData = useMemo(() => {
    const footprintValue = machine.footprint.split(" ")[0];
    const limitedHighlights = machine.highlights.slice(0, 4);

    return {
      footprintValue,
      limitedHighlights,
    };
  }, [machine.footprint, machine.highlights]);
  return (
    <Card className="group hover:border-primary/30 gap-0 pt-0 transition-all duration-500">
      <CardHeader className="border-primary/30 border-b p-4 md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
          {/* Informações principais */}
          <div className="flex items-center gap-3">
            <div className="bg-muted/30 text-primary border-primary/30 flex size-8 items-center justify-center rounded-md border md:size-10">
              {categoryIcons[machine.category]}
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="text-primary text-lg leading-tight md:text-2xl">
                {machine.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm font-medium md:text-base">
                {machine.subtitle}
              </CardDescription>
            </div>
          </div>

          {/* Métricas técnicas */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            <div className="bg-muted/30 rounded-md px-2 py-1.5 text-center md:px-4 md:py-2">
              <div className="flex items-center gap-1 md:gap-2">
                <TrendingUp className="text-primary size-3 md:size-4" />
                <span className="text-primary text-sm font-bold md:text-lg">
                  <NumberTicker
                    value={machine.capacity}
                    textColor="text-primary"
                  />
                </span>
              </div>
              <span className="text-muted-foreground text-[10px] uppercase md:text-xs">
                {machine.capacityUnit}
              </span>
            </div>
            <div className="bg-muted/30 rounded-md px-2 py-1.5 text-center md:px-4 md:py-2">
              <div className="flex items-center gap-1 md:gap-2">
                <Zap className="text-primary size-3 md:size-4" />
                <span className="text-primary text-sm font-bold md:text-lg">
                  {machine.powerConsumption} kW
                </span>
              </div>
              <span className="text-muted-foreground text-[10px] uppercase md:text-xs">
                Potência
              </span>
            </div>
            <div className="bg-muted/30 rounded-md px-2 py-1.5 text-center md:px-4 md:py-2">
              <div className="flex items-center gap-1 md:gap-2">
                <Layers className="text-primary size-3 md:size-4" />
                <span className="text-primary text-sm font-bold md:text-lg">
                  {processedData.footprintValue}
                </span>
              </div>
              <span className="text-muted-foreground text-[10px] uppercase md:text-xs">
                m²
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Seção da imagem */}
        <div className="bg-muted/30 group/image relative aspect-[16/9]">
          <div
            className="flex h-full cursor-pointer items-center justify-center p-8"
            onClick={() => onImageClick(machine.machineImage, machine.title)}
          >
            <Image
              src={machine.machineImage}
              alt={machine.title}
              loading="eager"
              className="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover/image:scale-110"
            />

            {/* Overlay para indicar que é clicável */}
            <div className="bg-primary/5 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
              <div className="bg-primary/10 border-primary/20 rounded-full border p-3 backdrop-blur-sm">
                <Expand className="text-primary size-6" />
              </div>
            </div>
          </div>

          {/* Overlays */}
          <Badge
            className="bg-muted/30 border-primary/30 text-primary absolute top-4 left-5 rounded-md py-1 text-xs uppercase md:text-sm"
            variant="outline"
          >
            ID: {machine.id}
          </Badge>

          <Badge className="bg-muted/30 border-primary/30 text-primary absolute right-4 bottom-4 flex items-center gap-2 py-1">
            {machine.powerConsumption} kW
          </Badge>
        </div>

        {/* Conteúdo principal reorganizado */}
        <div className="px-3 py-3 md:px-6 md:py-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-primary/10 grid h-8 w-full grid-cols-2 gap-1 md:h-10 md:gap-2">
              <TabsTrigger
                value="overview"
                className="flex items-center gap-1 text-xs md:gap-2 md:text-sm"
              >
                <BarChart3 className="size-3 md:size-4" />
                <span className="hidden md:inline">Visão Geral</span>
                <span className="md:hidden">Geral</span>
              </TabsTrigger>
              <TabsTrigger
                value="packaging"
                className="flex items-center gap-1 text-xs md:gap-2 md:text-sm"
              >
                <Package className="size-3 md:size-4" />
                Embalagens
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="overview"
              className="space-y-4 pt-2 md:space-y-6"
            >
              {/* Descrição */}
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                {machine.description}
              </p>

              {/* Métricas em cards */}
              <div className="grid gap-3 md:grid-cols-3 md:gap-4">
                <MetricCard
                  icon={<TrendingUp />}
                  value={machine.capacity}
                  unit={machine.capacityUnit}
                  size="lg"
                />
                <MetricCard
                  icon={<Zap />}
                  value={`${machine.powerConsumption}kW`}
                  unit="Potência"
                  size="lg"
                />
                <MetricCard
                  icon={<Layers />}
                  value={machine.footprint}
                  unit="Área Operação"
                  size="lg"
                />
              </div>
            </TabsContent>

            <TabsContent
              value="packaging"
              className="mt-4 space-y-3 md:mt-6 md:space-y-4"
            >
              {/* Imagem única do produto */}
              <div className="bg-muted/50 relative overflow-hidden rounded-md p-4 md:p-6">
                <div className="flex h-full items-center justify-center">
                  <Image
                    src={machine.productImage}
                    alt={`Produto ${machine.title}`}
                    loading="lazy"
                    className="h-full  object-contain transition-transform duration-300 hover:scale-105 w-1/3"
                  />
                </div>
                <Badge
                  className="absolute top-3 right-3 text-xs"
                  variant="outline"
                >
                  Produto
                </Badge>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">
                Exemplo de embalagem que pode ser produzida
              </p>
            </TabsContent>
          </Tabs>

          {/* Características Principais */}
          <div className="mt-4 flex flex-col gap-2 md:mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary size-4 md:size-5" />
              <h4 className="text-sm font-semibold md:text-base">
                Características
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {processedData.limitedHighlights.map((highlight, idx) => (
                <Badge
                  key={`highlight-${idx}`}
                  variant="outline"
                  className="gap-1.5 py-0.5 text-xs md:gap-2 md:py-1 md:text-sm"
                >
                  <div className="bg-primary size-1 rounded-full md:size-1.5" />
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-6 md:pt-10">
            <Button
              onClick={() => onQuoteClick(machine)}
              className="w-full"
              size="lg"
            >
              Solicitar Cotação
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
