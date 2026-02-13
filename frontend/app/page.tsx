"use client";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Carousel from "@/components/carousel/carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white to-blue-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Bem-vindo ao CarsHub</h1>
        <p className="text-gray-700 text-lg mb-8">
          A plataforma número 1 para compra, venda e avaliação de veículos. 
          Conectando compradores e vendedores com segurança e transparência.
        </p>
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}
