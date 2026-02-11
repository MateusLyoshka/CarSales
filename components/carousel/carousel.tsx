"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface CarItem {
  id: number;
  image: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  rating: number;
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars: CarItem[] = [
    {
      id: 1,
      image: "/fundo_home.png",
      brand: "Toyota",
      model: "Corolla",
      year: 2023,
      price: 95000,
      rating: 4.8,
    },
    {
      id: 2,
      image: "/fundo_home.png",
      brand: "Honda",
      model: "Civic",
      year: 2023,
      price: 110000,
      rating: 4.7,
    },
    {
      id: 3,
      image: "/fundo_home.png",
      brand: "BMW",
      model: "320i",
      year: 2022,
      price: 185000,
      rating: 4.9,
    },
    {
      id: 4,
      image: "/fundo_home.png",
      brand: "Volkswagen",
      model: "Polo",
      year: 2023,
      price: 75000,
      rating: 4.6,
    },
    {
      id: 5,
      image: "/fundo_home.png",
      brand: "Hyundai",
      model: "HB20",
      year: 2024,
      price: 65000,
      rating: 4.5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  const currentCar = cars[currentIndex];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Carros em Destaque
          </h2>
          <p className="text-gray-600">
            Confira nossos veículos mais procurados
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between h-96">
            {/* Botão Esquerda */}
            <button
              onClick={prevSlide}
              className="absolute left-4 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Imagem do Carro */}
            <div className="flex-1 h-full relative">
              <Image
                src={currentCar.image}
                alt={`${currentCar.brand} ${currentCar.model}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Informações do Carro */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-3xl font-bold mb-2">
                {currentCar.brand} {currentCar.model}
              </h3>
              <p className="text-gray-200 mb-4">Ano: {currentCar.year}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">Preço</p>
                  <p className="text-2xl font-bold">
                    R$ {currentCar.price.toLocaleString("pt-BR")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-300">Avaliação</p>
                  <p className="text-2xl font-bold">⭐ {currentCar.rating}</p>
                </div>
              </div>
            </div>

            {/* Botão Direita */}
            <button
              onClick={nextSlide}
              className="absolute right-4 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 py-4 bg-gray-100">
            {cars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-400 w-2 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Cards com Mais Carros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition border border-blue-100 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-blue-50 transition">
                  <Heart size={20} className="text-blue-600" />
                </button>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {car.brand} {car.model}
                </h4>
                <p className="text-gray-600 text-sm mb-3">Ano: {car.year}</p>
                <div className="flex items-center justify-between">
                  <p className="text-blue-600 font-bold">
                    R$ {car.price.toLocaleString("pt-BR")}
                  </p>
                  <p className="text-yellow-500">⭐ {car.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}