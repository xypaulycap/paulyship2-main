"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, Anchor } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Shipping", href: "/shipping" },
    { name: "Terminals", href: "/terminals" },
    { name: "About", href: "/about" },
    { name: "HSEQ", href: "/hseq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Anchor className="h-5 w-5 text-white" />
            </div> */}
            <img src="/images/logo7.jpeg" alt="" className="w-[75px]" />
            <span className="text-xl font-bold text-green-900">
              Oriana Shipping B.V
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-green-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Phone className="h-4 w-4" />
              <span>+31 10 123 4567</span>
            </div>
            <Button size="sm" className="bg-green-900 hover:bg-green-700">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center space-x-2">
                  {/* <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Anchor className="h-5 w-5 text-white" />
            </div> */}
                  <img src="/images/logo7.jpeg" alt="" className="w-[75px]" />
                  <span className="text-xl font-bold text-green-900">
                    Oriana Shipping B.V
                  </span>
                </Link>

                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-slate-600 hover:text-green-800 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="pt-6 border-t">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Phone className="h-4 w-4" />
                      <span>+31 10 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Mail className="h-4 w-4" />
                      <span>info@orianashippingbv.nl</span>
                    </div>
                    <Button className="w-full bg-green-900 hover:bg-green-700">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
