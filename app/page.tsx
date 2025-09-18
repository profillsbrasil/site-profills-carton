import NavbarHome from "./_components/navbar-home";
import HeroSection from "./_components/hero-section";
import AboutSection from "./_components/about-section";
import ProductsSection from "./_components/products-section";
import PackagingShowcase from "./_components/packaging-showcase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="relative min-h-screen w-full">
        <HeroSection />
        <NavbarHome />
        <AboutSection />
        <ProductsSection />
        <PackagingShowcase />
      </main>
    </div>
  );
}
