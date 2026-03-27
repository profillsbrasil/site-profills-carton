import Image, { StaticImageData } from 'next/image';

import cosmeticTubes from '@/assets/image/produtos/t1-removebg-preview.png';
import tetraPackages from '@/assets/image/produtos/t2-removebg-preview.png';
import bisnagas from '@/assets/image/produtos/t3-removebg-preview.png';
import copos from '@/assets/image/produtos/t4-removebg-preview.png';

import { Leaf, Package, Recycle, Shield, Sparkles, Zap } from 'lucide-react';

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
}

const PackagingCard = ({ packaging }: { packaging: PackagingType }) => {
  return (
    <div className='group flex gap-5 rounded-lg border bg-white p-5 transition-all duration-300 hover:shadow-md md:p-6'>
      {/* Product image - compact */}
      <div className='bg-muted/30 flex h-24 w-20 shrink-0 items-center justify-center rounded-md md:h-28 md:w-24'>
        <Image
          src={packaging.image}
          alt={packaging.name}
          loading='lazy'
          className='h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-110 md:h-20'
        />
      </div>

      {/* Content */}
      <div className='flex-1 space-y-2'>
        <div className='flex items-start justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <div className='text-primary'>{packaging.icon}</div>
            <h3 className='text-foreground text-base leading-tight font-bold md:text-lg'>
              {packaging.name}
            </h3>
          </div>
          <div
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${packaging.badge.color}`}>
            {packaging.badge.icon}
            {packaging.badge.text}
          </div>
        </div>

        <p className='text-muted-foreground text-sm leading-relaxed'>
          {packaging.description}
        </p>

        <div className='flex flex-wrap gap-2 pt-1'>
          {packaging.features.map((feature, featureIndex) => (
            <span
              key={featureIndex}
              className='bg-muted/50 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium'>
              <div className='bg-primary h-1 w-1 rounded-full'></div>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function PackagingShowcase() {
  const packagingTypes: PackagingType[] = [
    {
      id: 'bisnagas-cosmeticos',
      name: 'Bisnagas para Cosméticos',
      description:
        'Embalagens biodegradáveis para produtos de beleza e cuidados pessoais com design premium.',
      image: cosmeticTubes,
      icon: <Package className='h-6 w-6' />,
      features: [
        '100% biodegradável',
        'Resistente à umidade',
        'Design elegante premium'
      ],
      badge: {
        text: 'Premium',
        icon: <Sparkles className='h-3 w-3' />,
        color:
          'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-700 border border-amber-200'
      }
    },
    {
      id: 'copos-ecologicos',
      name: 'Copos Ecológicos',
      description:
        'Copos sustentáveis em diferentes tamanhos para bebidas quentes e frias com isolamento superior.',
      image: copos,
      icon: <Recycle className='h-6 w-6' />,
      features: [
        'Material kraft natural',
        'Isolamento térmico superior',
        '100% compostável'
      ],
      badge: {
        text: 'Eco-Friendly',
        icon: <Leaf className='h-3 w-3' />,
        color:
          'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 border border-green-200'
      }
    },
    {
      id: 'embalagens-tetra',
      name: 'Embalagens Tetra',
      description:
        'Embalagens tipo tetra pak para líquidos com proteção UV superior e sistema de vedação avançado.',
      image: tetraPackages,
      icon: <Shield className='h-6 w-6' />,
      features: [
        'Proteção UV avançada',
        'Longa durabilidade',
        'Sistema reciclável'
      ],
      badge: {
        text: 'Proteção+',
        icon: <Shield className='h-3 w-3' />,
        color:
          'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-700 border border-cyan-200'
      }
    },
    {
      id: 'pouches-flexiveis',
      name: 'Pouches Flexíveis',
      description:
        'Sachês e pouches para diversos produtos em material kraft sustentável com tecnologia de barreira.',
      image: bisnagas,
      icon: <Zap className='h-6 w-6' />,
      features: [
        'Flexibilidade total',
        'Barreira de proteção avançada',
        'Sistema de abertura fácil'
      ],
      badge: {
        text: 'Versátil',
        icon: <Zap className='h-3 w-3' />,
        color:
          'bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-700 border border-purple-200'
      }
    }
  ];

  return (
    <section className='bg-muted/30 pb-16 md:pb-20'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        {/* Header Premium */}
        <div className='mb-10 text-center md:mb-12 md:text-left'>
          <h2 className='text-foreground mb-3 font-serif text-3xl leading-tight font-bold tracking-tight md:text-4xl'>
            Portfólio de Embalagens
          </h2>
          <p className='text-muted-foreground max-w-3xl text-base leading-relaxed md:text-lg'>
            Nossa linha completa de embalagens sustentáveis, com tecnologia
            avançada e materiais 100% biodegradáveis.
          </p>
        </div>

        {/* Grid Responsivo Premium */}
        <div className='grid gap-4 md:grid-cols-2'>
          {packagingTypes.map((packaging) => (
            <PackagingCard key={packaging.id} packaging={packaging} />
          ))}
        </div>
      </div>
    </section>
  );
}
