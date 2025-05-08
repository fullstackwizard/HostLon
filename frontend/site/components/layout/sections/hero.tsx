"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Hostlon</Badge>
            </span>
            <span> Hospedagem Premium no Brasil </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Hospedagem com a melhor <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Performance & Segurança
              </span> do Brasil para o seu Site.
            </h1>
          </div>

          <section className="w-full py-16 bg-[#0c0a09] px-4 md:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Coluna 1 - Lista de benefícios com ícone */}
              <div className="space-y-6">
                {[
                  "Servidor com Arquitetura Otimizada",
                  "Backup de 12 em 12 horas, fácil restauração",
                  "Recursos Dedicados + Isolamento de contas",
                  "Migração gratuita sem burocracia",
                ].map((text, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-green-400 text-xl">✔️</span>
                    <p className="text-lg text-gray-100">{text}</p>
                  </div>
                ))}
              </div>

              {/* Coluna 2 - Imagem otimizada */}
              <div className="flex justify-center">
                <Image
                  src="/googlerating.png"
                  alt="Mockup Painel HostLon"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-xl"
                />
              </div>

            </div>
          </section>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Planos de Hospedagem
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Entre em contato
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-light.jpeg"
                : "/hero-image-dark.jpeg"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
