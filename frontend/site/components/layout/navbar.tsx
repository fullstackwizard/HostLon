"use client";
import LogoHostlon from "../ui/logo";
import { ChevronsDown, Menu, User, HelpCircle, Circle, FileText, Flame } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { LucideIcon, Globe, Server, Mail, Share2 } from "lucide-react";

export type RouteProps = {
  href: string;
  label: string;
  icon: LucideIcon;
};
interface RouteProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  { href: "#hospedagem", label: "Hospedagem", icon: Server },
  { href: "#revenda", label: "Revenda", icon: Share2 },
  { href: "#email", label: "E-Mail", icon: Mail },
  { href: "#dominio", label: "Domínio", icon: Globe },
];


const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <LogoHostlon />
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <LogoHostlon />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base flex items-center space-x-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-400 hover:to-yellow-300 transition-all duration-300">
              <Flame className="size-5 text-orange-500 animate-pulse" />
              <span className="font-bold">OFERTAS</span>
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {routeList.map(({ href, label, icon: Icon }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuTrigger className="bg-card text-base flex items-center space-x-2 hover:text-primary">
                <Icon className="size-4 text-primary" />
                <span>{label}</span>

              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-60 p-4 space-y-2">
                  <p className="font-semibold text-foreground text-sm">{label}</p>
                  <p className="text-muted-foreground text-xs leading-snug">
                    Conheça nossos planos de {label.toLowerCase()} com alta performance.
                  </p>
                  <Link
                    href={href}
                    className="inline-block mt-2 text-sm font-medium text-primary underline"
                  >
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      aria-label="Vermais"
                    >
                      <Link href="/segunda-via" className="flex items-center space-x-2">
                        <span>Ver mais</span>
                      </Link>
                    </Button>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}

        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />
        <Button
          asChild
          size="sm"
          variant="ghost"
          aria-label="Segunda via da fatura"
        >
          <Link href="/segunda-via" className="flex items-center space-x-2">
            <FileText className="size-5" />
            <span>2ª via da fatura</span>
          </Link>
        </Button>

        <Button asChild size="sm" variant="ghost" aria-label="Minha conta">
          <Link
            href="/minha-conta" // Altere para a rota real da sua área do usuário
            aria-label="Ir para a área do usuário"
          >
            <User className="size-5 mr-1" />
            Painel
          </Link>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          aria-label="Status do sistema"
          className="flex items-center space-x-2 text-green-600"
        >
          <Circle className="fill-green-500 stroke-green-600 size-3" />
          <span className="text-sm">Status</span>
        </Button>
      </div>
    </header>
  );
};
