import AboutSection from './_components/about-section';
import HeroSection from './_components/hero-section';
import NavbarHome from './_components/navbar-home';
import PackagingShowcase from './_components/packaging-showcase';
import ProductsSection from './_components/products-section';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <main className='relative min-h-screen w-full'>
        <HeroSection />
        <NavbarHome />
        <AboutSection />
        <ProductsSection />
        <PackagingShowcase />
      </main>
    </div>
  );
}
