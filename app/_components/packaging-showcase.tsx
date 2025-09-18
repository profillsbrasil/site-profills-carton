import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Package, Sparkles, Shield, Zap } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import cosmeticTubes from "@/assets/image/produtos/t1-removebg-preview.png";
import tetraPackages from "@/assets/image/produtos/t2-removebg-preview.png";
import bisnagas from "@/assets/image/produtos/t3-removebg-preview.png";
import copos from "@/assets/image/produtos/t4-removebg-preview.png";

interface PackagingType {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
  icon: React.ReactNode;
  features: string[];
  badge: {
    text: string;
    icon: React.ReactNode;
    color: string;
  };
  stats: {
    durability: string;
    sustainability: string;
  };
}

const PackagingCard = ({ packaging }: { packaging: PackagingType }) => {
  return (
    <Card className="group relative overflow-hidden border-0 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)]">
      <CardContent className="p-0">
        {/* Layout Principal */}
        <div className="relative">
          {/* Seção Visual Superior */}
          <div className="relative h-64 overflow-hidden md:h-80">
            {/* Círculo de fundo para contexto */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="from-primary/10 to-primary/20 h-32 w-32 rounded-full bg-gradient-to-br opacity-60 blur-3xl md:h-48 md:w-48"></div>
            </div>

            {/* Badge flutuante */}
            <div className="absolute top-4 right-4 z-20">
              <div
                className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${packaging.badge.color} shadow-lg`}
              >
                {packaging.badge.icon}
                {packaging.badge.text}
              </div>
            </div>

            {/* Imagem do produto */}
            <div className="relative z-10 flex h-full items-center justify-center p-5 transition-transform duration-700 ease-out group-hover:scale-110">
              <Image
                src={packaging.image}
                alt={packaging.name}
                loading="eager"
                className="h-40 w-auto object-contain drop-shadow-2xl md:h-52"
              />
            </div>

            {/* Stats flutuantes */}
            <div className="absolute bottom-4 left-8 z-20 flex gap-2">
              <div className="bg-muted/30 rounded-md border border-white/20 p-2 shadow-lg backdrop-blur-md">
                <div className="text-center">
                  <div className="text-primary text-xs font-bold">
                    {packaging.stats.sustainability}
                  </div>
                  <div className="text-[10px] font-medium tracking-wide uppercase opacity-70">
                    Sustentável
                  </div>
                </div>
              </div>
              <div className="bg-muted/30 rounded-md border border-white/20 p-2 shadow-lg backdrop-blur-md">
                <div className="text-center">
                  <div className="text-primary text-xs font-bold">
                    {packaging.stats.durability}
                  </div>
                  <div className="text-[10px] font-medium tracking-wide uppercase opacity-70">
                    Durável
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Conteúdo */}
          <div className="space-y-4 p-6 md:px-8 md:pt-8">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-primary/5 flex h-12 w-12 shrink-0 items-center justify-center rounded-md">
                  <div className="text-primary">{packaging.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-primary text-lg leading-tight font-bold md:text-xl">
                    {packaging.name}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed md:text-base">
                    {packaging.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Features com design elegante */}
            <div className="space-y-2">
              {packaging.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="bg-muted/30 hover:bg-muted/50 flex items-center gap-3 rounded-lg p-3 transition-colors duration-300"
                >
                  <div className="bg-primary h-2 w-2 rounded-full shadow-sm"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function PackagingShowcase() {
  const packagingTypes: PackagingType[] = [
    {
      id: "bisnagas-cosmeticos",
      name: "Bisnagas para Cosméticos",
      description:
        "Embalagens biodegradáveis para produtos de beleza e cuidados pessoais com design premium.",
      image: cosmeticTubes,
      icon: <Package className="h-6 w-6" />,
      features: [
        "100% biodegradável",
        "Resistente à umidade",
        "Design elegante premium",
      ],
      badge: {
        text: "Premium",
        icon: <Sparkles className="h-3 w-3" />,
        color:
          "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-700 border border-amber-200",
      },
      stats: {
        durability: "98%",
        sustainability: "100%",
      },
    },
    {
      id: "copos-ecologicos",
      name: "Copos Ecológicos",
      description:
        "Copos sustentáveis em diferentes tamanhos para bebidas quentes e frias com isolamento superior.",
      image: copos,
      icon: <Recycle className="h-6 w-6" />,
      features: [
        "Material kraft natural",
        "Isolamento térmico superior",
        "100% compostável",
      ],
      badge: {
        text: "Eco-Friendly",
        icon: <Leaf className="h-3 w-3" />,
        color:
          "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 border border-green-200",
      },
      stats: {
        durability: "95%",
        sustainability: "100%",
      },
    },
    {
      id: "embalagens-tetra",
      name: "Embalagens Tetra",
      description:
        "Embalagens tipo tetra pak para líquidos com proteção UV superior e sistema de vedação avançado.",
      image: tetraPackages,
      icon: <Shield className="h-6 w-6" />,
      features: [
        "Proteção UV avançada",
        "Longa durabilidade",
        "Sistema reciclável",
      ],
      badge: {
        text: "Proteção+",
        icon: <Shield className="h-3 w-3" />,
        color:
          "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-700 border border-cyan-200",
      },
      stats: {
        durability: "99%",
        sustainability: "95%",
      },
    },
    {
      id: "pouches-flexiveis",
      name: "Pouches Flexíveis",
      description:
        "Sachês e pouches para diversos produtos em material kraft sustentável com tecnologia de barreira.",
      image: bisnagas,
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Flexibilidade total",
        "Barreira de proteção avançada",
        "Sistema de abertura fácil",
      ],
      badge: {
        text: "Versátil",
        icon: <Zap className="h-3 w-3" />,
        color:
          "bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-700 border border-purple-200",
      },
      stats: {
        durability: "97%",
        sustainability: "98%",
      },
    },
  ];

  return (
    <section className="bg-muted/30 pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header Premium */}
        <div className="mb-16 text-center md:mb-20">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-primary text-3xl leading-tight font-bold md:text-5xl">
              Portfólio de Embalagens
            </h2>
            <p className="text-muted-foreground mx-auto max-w-4xl text-lg leading-relaxed font-light md:text-xl">
              Descubra nossa linha completa de embalagens sustentáveis,
              desenvolvidas com tecnologia avançada e materiais 100%
              biodegradáveis para atender às necessidades mais exigentes do
              mercado.
            </p>
          </div>
        </div>

        {/* Grid Responsivo Premium */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {packagingTypes.map((packaging) => (
            <div key={packaging.id} className="w-full">
              <PackagingCard packaging={packaging} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
