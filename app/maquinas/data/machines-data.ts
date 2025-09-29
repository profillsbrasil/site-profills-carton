import { type StaticImageData } from "next/image";
import standUpPouch from "@/assets/image/produtos/pouch-bg.png";
import miniPouch from "@/assets/image/maquinas-teste/MINI-POUCH2-bg.png";
import mainMachine from "@/assets/image/maquinas-teste/maquina2.png";
import tc4s from "@/assets/image/maquinas-teste/TC-4S-200-360-2-bg.png";
import maquinaBisnaga from "@/assets/image/maquinas-teste/MAQUINA-DE-BISNAGA-bg.png";
import producaoIndustrial from "@/assets/image/maquinas-teste/Pouch Render Máximo-bg.png";
import bisnaga from "@/assets/image/produtos/t1-removebg-preview.png";
import embalagemCartonada from "@/assets/image/produtos/t2-removebg-preview.png";
import embalagemCilindrica from "@/assets/image/produtos/t4-removebg-preview.png";

// Definição dos tipos
interface TechnicalSpec {
  property: string;
  value: string | React.ReactNode;
  unit?: string;
  category?: string;
}

interface PackagingSpec {
  property: string;
  value: string | React.ReactNode;
  unit?: string;
}

export interface MachineData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  machineImage: string | StaticImageData;
  productImage: string | StaticImageData;
  capacity: number;
  capacityUnit: string;
  powerConsumption: number;
  footprint: string;
  category: "industrial" | "compact" | "specialized" | "premium";
  technicalSpecs: TechnicalSpec[];
  packagingSpecs: PackagingSpec[];
  highlights: string[];
  applications: string[];
}



export const machinesData: MachineData[] = [
  {
    id: "speed-line",
    title: "Linha Speed",
    subtitle: "Stand-Up Pouch Industrial Premium",
    description:
      "Nossa solução mais avançada para envase em embalagens stand-up pouch, combinando acionamento mecânico de precisão com tecnologia IoT integrada para máxima eficiência.",
    machineImage: producaoIndustrial,
    productImage: standUpPouch,
    capacity: 5400,
    capacityUnit: "un/h",
    powerConsumption: 8.97,
    footprint: "5.3 x 3.3m",
    category: "premium",
    highlights: [
      "Tecnologia IoT Integrada",
      "Monitoramento Remoto",
      "Acionamento Servo",
      "Alta Capacidade",
    ],
    applications: ["Líquidos", "Pós", "Produtos alimentícios"],
    technicalSpecs: [
      {
        property: "Capacidade de Produção",
        value: "Até 5.400 unidades/hora",
        category: "performance",
      },
      {
        property: "Sistema datador",
        value: "Hotstamping ou inkjet",
        category: "control",
      },
      {
        property: "Sistema de Dosagem",
        value: "Temporizado / Bomba positiva / Volumétrico",
        category: "control",
      },
      {
        property: "Tensão Operativa",
        value: "220 [V] - 60 [Hz]",
        category: "power",
      },
      {
        property: "Potência Ativa Instalada",
        value: "8,97 [kW]",
        category: "power",
      },
      {
        property: "Potência Ativa Consumida",
        value: "6,65 [kW.h]",
        category: "power",
      },
      {
        property: "Comando",
        value: "CLP com IHM Touchscreen + IoT",
        category: "control",
      },
      {
        property: "Consumo de Ar",
        value: "349 [L/min]",
        category: "performance",
      },
      {
        property: "Área de Operação",
        value: "5.300x3.300 [mm²]",
        category: "dimensions",
      },
      {
        property: "Material de Fabricação",
        value: "Aço inoxidável AISI 304, alumínio, policarbonato e aço carbono",
        category: "materials",
      },
    ],
    packagingSpecs: [
      { property: "Largura do Filme", value: "320 a 650 [mm]" },
      { property: "Espessura do Filme", value: "130 a 160 [µm]" },
      {
        property: "Embalagem Final",
        value: "Altura: 125 a 280 [mm] | Largura: 100 a 200 [mm]",
      },
      {
        property: "Embalagem Compatível",
        value: "PET + PE / PET + PE + Al / BOPP / BOPPA / EVOH",
      },
      {
        property: "Produto de Envase",
        value: "Líquidos, pós e alguns sólidos",
      },
    ],
  },
  {
    id: "cartonadas",
    title: "Linha Embalagens Cartonadas",
    subtitle: "Embalagens Cartonadas Gable Top",
    description:
      "Desenvolvida para o envase de líquidos em embalagens do tipo gable top. Ideal para leite, sucos e molhos, opera com dosagem volumétrica e sistema de selagem térmica eficiente.",
    machineImage: mainMachine,
    productImage: embalagemCartonada,
    capacity: 3000,
    capacityUnit: "un/h",
    powerConsumption: 5.2,
    footprint: "2.85 x 1.8m",
    category: "industrial",
    highlights: ["Sistema Estéril", "Selagem Térmica", "Alta Higiene"],
    applications: ["Leite e derivados", "Sucos", "Molhos"],
    technicalSpecs: [
      { property: "Sistema Datador", value: "Inkjet", category: "control" },
      {
        property: "Sistema de Injeção",
        value: "Temporizado",
        category: "control",
      },
      {
        property: "Conjunto Dosador",
        value: "Volumétrico",
        category: "control",
      },
      {
        property: "Sistema de Esterilização",
        value: "Lâmpada Germicida com Ultravioleta",
        category: "control",
      },
      {
        property: "Comando",
        value: "CLP com IHM Touchscreen",
        category: "control",
      },
      {
        property: "Sistema de Solda",
        value: "Barra quente, ar quente e pressão",
        category: "performance",
      },
      {
        property: "Esteira de Saída",
        value: "1,5 metros",
        category: "dimensions",
      },
      {
        property: "Bomba de Transferência",
        value: "Bomba Centrífuga",
        category: "performance",
      },
      {
        property: "Dimensões do Equipamento",
        value: "2,85m x 1,80m x 1,65m",
        category: "dimensions",
      },
      {
        property: "NR 12",
        value: "Portas de policarbonato, proteções elétricas e mecânicas",
        category: "control",
      },
      {
        property: "Material de Fabricação",
        value: "Aço inox AISI 304 e alumínio",
        category: "materials",
      },
    ],
    packagingSpecs: [
      { property: "Volume de Envase", value: "250 ml a 5.000 ml" },
      { property: "Material", value: "PEBD + PAPEL CARTÃO + PEBD" },
      {
        property: "Tamanho da Base",
        value:
          "Regular: 70x70 | Slim: 57x57, 65x65, 91x91, 95x95, 140x140, 70x95 [mm]",
      },
    ],
  },
  {
    id: "mini-pouch",
    title: "Linha Mini Pouch",
    subtitle: "Embalagens Stand-Up Pouch Compacta",
    description:
      "Projetada para o envase de líquidos em embalagens do tipo mini stand-up pouchs, opera com até 1.500 unidades/hora. Utiliza sistema de dosagem volumétrica com servoacionamento.",
    machineImage: miniPouch,
    productImage: standUpPouch,
    capacity: 1500,
    capacityUnit: "un/h",
    powerConsumption: 3.55,
    footprint: "3.8 x 2.5m",
    category: "compact",
    highlights: [
      "Alta Precisão",
      "Vedação Segura",
      "Servoacionamento",
      "Design Compacto",
    ],
    applications: [
      "Líquidos de pequeno volume",
      "Condimentos",
      "Produtos de higiene",
    ],
    technicalSpecs: [
      {
        property: "Capacidade de Produção",
        value: "Até 1.500 unidades/hora",
        category: "performance",
      },
      {
        property: "Sistema datador",
        value: "Hotstamping ou inkjet",
        category: "control",
      },
      {
        property: "Sistema de Dosagem",
        value: "Temporizado / Volumétrico",
        category: "control",
      },
      {
        property: "Tensão Operativa",
        value: "220 [V] - 60 [Hz]",
        category: "power",
      },
      {
        property: "Potência Ativa Instalada",
        value: "3,55 [kW]",
        category: "power",
      },
      {
        property: "Potência Ativa Consumida",
        value: "3,10 [kW.h]",
        category: "power",
      },
      {
        property: "Comando",
        value: "CLP com IHM Touchscreen",
        category: "control",
      },
      {
        property: "Consumo de Ar",
        value: "363 [L/min]",
        category: "performance",
      },
      {
        property: "Área de Operação",
        value: "3.800x2.500 [mm²]",
        category: "dimensions",
      },
      {
        property: "Material de Fabricação",
        value: "Aço inoxidável AISI 304, alumínio, policarbonato e aço carbono",
        category: "materials",
      },
    ],
    packagingSpecs: [
      { property: "Largura do Filme", value: "200 a 280 [mm]" },
      { property: "Espessura do Filme", value: "50 a 100 [µm]" },
      {
        property: "Embalagem Final",
        value: "Altura: 86,5 a 125 [mm] | Largura: 75 a 95 [mm]",
      },
      {
        property: "Embalagem Compatível",
        value: "PET + PE / PET + PE + Al / BOPP / BOPPA / EVOH",
      },
      { property: "Produto de Envase", value: "Líquidos" },
    ],
  },
  {
    id: "bisnagas",
    title: "Linha Bisnagas",
    subtitle: "Envasadoras para Bisnagas Especializadas",
    description:
      "Projetada para o envase de líquidos em bisnagas plásticas, alcança até 1.800 unidades/hora. Adapta-se a diferentes viscosidades com sistema de dosagem por prensa extrusora.",
    machineImage: maquinaBisnaga,
    productImage: bisnaga,
    capacity: 1800,
    capacityUnit: "un/h",
    powerConsumption: 6.0,
    footprint: "3.4 x 3.0m",
    category: "specialized",
    highlights: [
      "Múltiplas Viscosidades",
      "Fechamento Automático",
      "Versatilidade",
    ],
    applications: ["Cosméticos", "Produtos de higiene", "Condimentos pastosos"],
    technicalSpecs: [
      {
        property: "Capacidade de Produção",
        value: "Até 1.800 unidades/hora",
        category: "performance",
      },
      { property: "Sistema datador", value: "Inkjet", category: "control" },
      {
        property: "Sistema de Dosagem",
        value: "Prensa extrusora / Bomba positiva / Volumétrico",
        category: "control",
      },
      {
        property: "Tensão Operativa",
        value: "220 [V] - 60 [Hz]",
        category: "power",
      },
      {
        property: "Potência Ativa Instalada",
        value: "6,00 [kW]",
        category: "power",
      },
      {
        property: "Potência Ativa Consumida",
        value: "4,85 [kW.h]",
        category: "power",
      },
      {
        property: "Comando",
        value: "CLP com IHM Touchscreen",
        category: "control",
      },
      {
        property: "Consumo de Ar",
        value: "255 [L/min]",
        category: "performance",
      },
      {
        property: "Área de Operação",
        value: "3.400x3.000 [mm²]",
        category: "dimensions",
      },
      {
        property: "Material de Fabricação",
        value: "Aço inoxidável AISI 304, alumínio, policarbonato e aço carbono",
        category: "materials",
      },
    ],
    packagingSpecs: [
      { property: "Diâmetro do Tubo", value: "10 a 52 [mm]" },
      { property: "Comprimento do Tubo", value: "60 a 250 [mm]" },
      { property: "Volume do Tubo", value: "1,5 a 350 [mL]" },
      {
        property: "Embalagem Compatível",
        value: "Bisnagas plásticas, metálicas e cartonadas",
      },
      {
        property: "Produto de Envase",
        value: "Líquidos de várias viscosidades",
      },
    ],
  },
  {
    id: "potes",
    title: "Linha Potes",
    subtitle: "Envasadora Rotativa para Potes e Copos",
    description:
      "Projetada para o envase automático de produtos líquidos e secos em potes, copos ou embalagens de tubo Calippo. Indicada para laticínios, sobremesas, alimentos pastosos e cosméticos.",
    machineImage: tc4s,
    productImage: embalagemCilindrica,
    capacity: 1000,
    capacityUnit: "un/h",
    powerConsumption: 1.3,
    footprint: "3.1 x 2.5m",
    category: "specialized",
    highlights: [
      "Sistema Rotativo",
      "Fechamento Automático",
      "Dupla Funcionalidade",
    ],
    applications: ["Produtos lácteos", "Cosméticos", "Líquidos e secos"],
    technicalSpecs: [
      {
        property: "Capacidade de Produção",
        value: "Até 1.000 unidades/hora*",
        category: "performance",
      },
      { property: "Sistema datador", value: "Inkjet", category: "control" },
      {
        property: "Sistema de Dosagem",
        value: "Temporizado",
        category: "control",
      },
      {
        property: "Tensão Operativa",
        value: "220 [V] - 60 [Hz]",
        category: "power",
      },
      {
        property: "Potência Ativa Instalada",
        value: "1,30 [kW]",
        category: "power",
      },
      {
        property: "Potência Ativa Consumida",
        value: "1,15 [kW.h]",
        category: "power",
      },
      {
        property: "Comando",
        value: "CLP com IHM Touchscreen",
        category: "control",
      },
      {
        property: "Consumo de Ar",
        value: "114 [L/min]",
        category: "performance",
      },
      {
        property: "Área de Operação",
        value: "3.100x2.500 [mm²]",
        category: "dimensions",
      },
      {
        property: "Material de Fabricação",
        value: "Aço inoxidável AISI 304, alumínio, policarbonato e aço carbono",
        category: "materials",
      },
    ],
    packagingSpecs: [
      { property: "Diâmetro da Embalagem", value: "40 a 80 [mm]" },
      { property: "Altura da Embalagem", value: "60 a 150 [mm]" },
      { property: "Sistema de Fechamento", value: "Automático" },
      {
        property: "Embalagem Compatível",
        value: "Potes plásticos e cartonados",
      },
      { property: "Produto de Envase", value: "Líquidos e secos" },
    ],
  },
];

export const MACHINE_CATEGORIES = [
  { id: "all" as const, label: "Todas" },
  { id: "premium" as const, label: "Premium" },
  { id: "industrial" as const, label: "Industrial" },
  { id: "compact" as const, label: "Compacta" },
  { id: "specialized" as const, label: "Especializada" },
] as const;

export type MachineCategory = (typeof MACHINE_CATEGORIES)[number]["id"];
