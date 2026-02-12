"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-blue-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="CarsHub Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-blue-900">CarsHub</span>
          </Link>

          {/* Menu Principal */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/inventory">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium"
              >
                Inventory
              </Button>
            </Link>
            <Link href="/sell">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium"
              >
                Sell Your Car
              </Button>
            </Link>
            <Link href="/fipe">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium"
              >
                FIPE
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium"
              >
                About Us
              </Button>
            </Link>
          </nav>

          {/* Botões de Autenticação */}
          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 font-medium"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Registrar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}