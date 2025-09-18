"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/image/logo2-no-bg.png";

const links = [
  { href: "/", label: "Início" },
  { href: "/#about", label: "Sobre" },
  { href: "/#products", label: "Produtos" },
  { href: "/maquinas", label: "Máquinas" },
];

export default function NavbarOutros() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="border-border bg-background/80 sticky top-0 z-50 h-[8vh] w-full border-b backdrop-blur-md">
      <div className="mx-auto h-full w-full max-w-7xl px-4 md:px-6">
        <div className="flex h-full items-center justify-center md:justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={logo}
              loading="eager"
              alt="Profills Cartons Logo"
              className="h-10 w-auto transition-opacity duration-200 group-hover:opacity-90 md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <div className="flex items-center space-x-1">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="group relative px-4 py-2 text-sm font-medium transition-all duration-200"
                >
                  <span
                    className={`group-hover:text-primary transition-colors duration-200 ${
                      link.href === "/maquinas"
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                  <div className="bg-primary/80 absolute bottom-0 left-0 h-[0.09rem] w-0 transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href={`https://wa.me/5551996474579?text=${encodeURIComponent(
                "Olá tudo bem?\nEu vim através do site da *Profills Carton* e gostaria de solicitar um orçamento.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group bg-primary/90 text-primary-foreground hover:bg-primary h-9 shadow-lg transition-all duration-200 hover:shadow-xl">
                <Phone className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                Entrar em Contato
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Drawer */}
          <div className="flex items-center md:hidden">
            <Drawer
              direction="right"
              open={drawerOpen}
              onOpenChange={setDrawerOpen}
            >
              <DrawerTrigger asChild className="absolute right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-muted/50 h-9 w-9 transition-all duration-200"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-background/95 h-full w-[85vw] max-w-sm backdrop-blur-md">
                <DrawerHeader className="border-border/50 flex items-center justify-between border-b pb-4">
                  <DrawerTitle className="sr-only">
                    Menu de Navegação
                  </DrawerTitle>
                  <div className="flex w-full items-center justify-between">
                    <Image
                      src={logo}
                      alt="Profills Cartons Logo"
                      className="h-8 w-auto"
                    />
                    <DrawerClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-foreground h-8 w-8"
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Fechar menu</span>
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerHeader>

                <div className="flex flex-col space-y-1 p-6">
                  {links.map((link) => (
                    <DrawerClose key={link.label} asChild>
                      <Link
                        href={link.href}
                        className="group hover:bg-muted/50 flex items-center rounded-lg px-3 py-4 text-base font-medium transition-all duration-200"
                      >
                        <div className="bg-primary mr-3 h-1.5 w-1.5 rounded-full opacity-0 transition-all duration-200 group-hover:scale-125 group-hover:opacity-100" />
                        <span
                          className={`group-hover:text-primary transition-colors duration-200 ${
                            link.href === "/maquinas"
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </DrawerClose>
                  ))}
                </div>

                <DrawerFooter className="border-border/50 mt-auto border-t pt-6">
                  <DrawerClose asChild>
                    <Link
                      href={`https://wa.me/5551996474579?text=${encodeURIComponent(
                        "Olá tudo bem?\nEu vim através do site da *Profills Carton* e gostaria de solicitar um orçamento.",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="group bg-primary/90 text-primary-foreground hover:bg-primary w-full shadow-lg transition-all duration-200 hover:shadow-xl">
                        <Phone className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                        Entrar em Contato
                      </Button>
                    </Link>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
