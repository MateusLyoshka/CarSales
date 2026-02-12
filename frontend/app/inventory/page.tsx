'use client';

import { useState } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Heart } from 'lucide-react';
import Image from 'next/image';

// Dados mockados de carros
const mockCars = [
  {
    id: 1,
    name: 'Toyota Corolla 2023',
    price: 95000,
    image: '/background.png',
    brand: 'Toyota',
    color: 'Branco',
    year: 2023,
    mileage: 5000,
    fuel: 'Gasolina',
  },
  {
    id: 2,
    name: 'Honda Civic 2022',
    price: 110000,
    image: '/background.png',
    brand: 'Honda',
    color: 'Preto',
    year: 2022,
    mileage: 15000,
    fuel: 'Gasolina',
  },
  {
    id: 3,
    name: 'Hyundai HB20 2023',
    price: 75000,
    image: '/background.png',
    brand: 'Hyundai',
    color: 'Prata',
    year: 2023,
    mileage: 3000,
    fuel: 'Gasolina',
  },
  {
    id: 4,
    name: 'Volkswagen Golf 2021',
    price: 130000,
    image: '/background.png',
    brand: 'Volkswagen',
    color: 'Azul',
    year: 2021,
    mileage: 25000,
    fuel: 'Gasolina',
  },
  {
    id: 5,
    name: 'Fiat Argo 2023',
    price: 65000,
    image: '/background.png',
    brand: 'Fiat',
    color: 'Vermelho',
    year: 2023,
    mileage: 2000,
    fuel: 'Flex',
  },
  {
    id: 6,
    name: 'Chevrolet Onix 2022',
    price: 70000,
    image: '/background.png',
    brand: 'Chevrolet',
    color: 'Cinza',
    year: 2022,
    mileage: 18000,
    fuel: 'Flex',
  },
  {
    id: 7,
    name: 'Renault Sandero 2021',
    price: 85000,
    image: '/background.png',
    brand: 'Renault',
    color: 'Laranja',
    year: 2021,
    mileage: 30000,
    fuel: 'Flex',
  },
  {
    id: 8,
    name: 'Ford Ka 2020',
    price: 60000,
    image: '/background.png',
    brand: 'Ford',
    color: 'Verde',
    year: 2020,
    mileage: 45000,
    fuel: 'Gasolina',
  },
  {
    id: 9,
    name: 'Peugeot 208 2022',
    price: 105000,
    image: '/background.png',
    brand: 'Peugeot',
    color: 'Branco',
    year: 2022,
    mileage: 20000,
    fuel: 'Gasolina',
  },
  {
    id: 10,
    name: 'Nissan Versa 2021',
    price: 88000,
    image: '/background.png',
    brand: 'Nissan',
    color: 'Prata',
    year: 2021,
    mileage: 35000,
    fuel: 'Gasolina',
  },
  {
    id: 11,
    name: 'Kia Forte 2023',
    price: 120000,
    image: '/background.png',
    brand: 'Kia',
    color: 'Preto',
    year: 2023,
    mileage: 8000,
    fuel: 'Gasolina',
  },
  {
    id: 12,
    name: 'Jeep Renegade 2022',
    price: 125000,
    image: '/background.png',
    brand: 'Jeep',
    color: 'Vermelho',
    year: 2022,
    mileage: 22000,
    fuel: 'Flex',
  },
  {
    id: 13,
    name: 'Suzuki Swift 2021',
    price: 78000,
    image: '/background.png',
    brand: 'Suzuki',
    color: 'Azul',
    year: 2021,
    mileage: 28000,
    fuel: 'Gasolina',
  },
  {
    id: 14,
    name: 'BYD Qin 2023',
    price: 115000,
    image: '/background.png',
    brand: 'BYD',
    color: 'Cinza',
    year: 2023,
    mileage: 4000,
    fuel: 'Elétrico',
  },
  {
    id: 15,
    name: 'Mitsubishi ASX 2022',
    price: 135000,
    image: '/background.png',
    brand: 'Mitsubishi',
    color: 'Preto',
    year: 2022,
    mileage: 19000,
    fuel: 'Gasolina',
  },
  {
    id: 16,
    name: 'Citroën C3 2021',
    price: 72000,
    image: '/background.png',
    brand: 'Citroën',
    color: 'Amarelo',
    year: 2021,
    mileage: 33000,
    fuel: 'Flex',
  },
  {
    id: 17,
    name: 'Mazda3 2023',
    price: 128000,
    image: '/background.png',
    brand: 'Mazda',
    color: 'Branco',
    year: 2023,
    mileage: 6000,
    fuel: 'Gasolina',
  },
  {
    id: 18,
    name: 'Audi A4 2020',
    price: 180000,
    image: '/background.png',
    brand: 'Audi',
    color: 'Prata',
    year: 2020,
    mileage: 50000,
    fuel: 'Gasolina',
  },
  {
    id: 19,
    name: 'BMW 320i 2021',
    price: 195000,
    image: '/background.png',
    brand: 'BMW',
    color: 'Azul',
    year: 2021,
    mileage: 40000,
    fuel: 'Gasolina',
  },
  {
    id: 20,
    name: 'Mercedes-Benz C200 2022',
    price: 220000,
    image: '/background.png',
    brand: 'Mercedes-Benz',
    color: 'Preto',
    year: 2022,
    mileage: 25000,
    fuel: 'Gasolina',
  },
  {
    id: 21,
    name: 'Tesla Model 3 2023',
    price: 280000,
    image: '/background.png',
    brand: 'Tesla',
    color: 'Branco',
    year: 2023,
    mileage: 2000,
    fuel: 'Elétrico',
  },
  {
    id: 22,
    name: 'Porsche 911 2021',
    price: 450000,
    image: '/background.png',
    brand: 'Porsche',
    color: 'Vermelho',
    year: 2021,
    mileage: 15000,
    fuel: 'Gasolina',
  },
  {
    id: 23,
    name: 'Ferrari F8 2020',
    price: 650000,
    image: '/background.png',
    brand: 'Ferrari',
    color: 'Vermelho',
    year: 2020,
    mileage: 8000,
    fuel: 'Gasolina',
  },
  {
    id: 24,
    name: 'Lamborghini Urus 2022',
    price: 550000,
    image: '/background.png',
    brand: 'Lamborghini',
    color: 'Amarelo',
    year: 2022,
    mileage: 12000,
    fuel: 'Gasolina',
  },
];

// Opções de filtros
const BRANDS = ['Toyota', 'Honda', 'Hyundai', 'Volkswagen', 'Fiat', 'Chevrolet', 'Renault', 'Ford', 'Peugeot', 'Nissan', 'Kia', 'Jeep', 'Suzuki', 'BYD', 'Mitsubishi', 'Citroën', 'Mazda', 'Audi', 'BMW', 'Mercedes-Benz', 'Tesla', 'Porsche', 'Ferrari', 'Lamborghini'];
const COLORS = ['Branco', 'Preto', 'Prata', 'Cinza', 'Vermelho', 'Azul', 'Verde', 'Amarelo', 'Laranja'];
const FUEL_TYPES = ['Gasolina', 'Flex', 'Elétrico', 'Diesel'];

const CARS_PER_PAGE = 20;

interface Filters {
  priceMin: string;
  priceMax: string;
  brand: string[];
  color: string[];
  fuel: string[];
  search: string;
}

export default function InventoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({
    priceMin: '',
    priceMax: '',
    brand: [],
    color: [],
    fuel: [],
    search: '',
  });
  const [favorites, setFavorites] = useState<number[]>([]);

  // Calcular índices para paginação
  const startIndex = (currentPage - 1) * CARS_PER_PAGE;
  const endIndex = startIndex + CARS_PER_PAGE;
  const displayedCars = mockCars.slice(startIndex, endIndex);
  const totalPages = Math.ceil(mockCars.length / CARS_PER_PAGE);

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setCurrentPage(1);
  };

  const handleBrandToggle = (brand: string) => {
    setFilters((prev) => ({
      ...prev,
      brand: prev.brand.includes(brand)
        ? prev.brand.filter((b) => b !== brand)
        : [...prev.brand, brand],
    }));
    setCurrentPage(1);
  };

  const handleColorToggle = (color: string) => {
    setFilters((prev) => ({
      ...prev,
      color: prev.color.includes(color)
        ? prev.color.filter((c) => c !== color)
        : [...prev.color, color],
    }));
    setCurrentPage(1);
  };

  const handleFuelToggle = (fuel: string) => {
    setFilters((prev) => ({
      ...prev,
      fuel: prev.fuel.includes(fuel)
        ? prev.fuel.filter((f) => f !== fuel)
        : [...prev.fuel, fuel],
    }));
    setCurrentPage(1);
  };

  const toggleFavorite = (carId: number) => {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Search Bar */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Pesquisar por marca, modelo ou ano..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10"
                />
              </div>
              <Button className="h-10 bg-blue-600 hover:bg-blue-700">
                Buscar
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar com Filtros */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 space-y-6">
                <h2 className="text-lg font-bold text-gray-900">Filtros</h2>

                {/* Filtro de Preço */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Preço
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">
                        Mínimo
                      </label>
                      <Input
                        type="number"
                        placeholder="R$ 0"
                        value={filters.priceMin}
                        onChange={(e) =>
                          handleFilterChange('priceMin', e.target.value)
                        }
                        className="h-8 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">
                        Máximo
                      </label>
                      <Input
                        type="number"
                        placeholder="R$ 999.999"
                        value={filters.priceMax}
                        onChange={(e) =>
                          handleFilterChange('priceMax', e.target.value)
                        }
                        className="h-8 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Filtro de Marca */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Marca
                  </h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {BRANDS.map((brand) => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.brand.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro de Cor */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Cor
                  </h3>
                  <div className="space-y-2">
                    {COLORS.map((color) => (
                      <label key={color} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.color.includes(color)}
                          onChange={() => handleColorToggle(color)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro de Combustível */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Combustível
                  </h3>
                  <div className="space-y-2">
                    {FUEL_TYPES.map((fuel) => (
                      <label key={fuel} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.fuel.includes(fuel)}
                          onChange={() => handleFuelToggle(fuel)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{fuel}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Botão Limpar Filtros */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setFilters({
                      priceMin: '',
                      priceMax: '',
                      brand: [],
                      color: [],
                      fuel: [],
                      search: '',
                    });
                    setCurrentPage(1);
                  }}
                >
                  Limpar Filtros
                </Button>
              </div>
            </aside>

            {/* Grid de Carros */}
            <section className="lg:col-span-3">
              <div className="mb-4">
                <p className="text-gray-600 text-sm">
                  Mostrando {displayedCars.length} de {mockCars.length} veículos
                </p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {displayedCars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group"
                  >
                    {/* Imagem do Carro */}
                    <div className="relative h-64 bg-gray-200 overflow-hidden">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badge Anos */}
                      <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                        {car.year}
                      </div>

                      {/* Botão Favorito */}
                      <button
                        onClick={() => toggleFavorite(car.id)}
                        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favorites.includes(car.id)
                              ? 'fill-red-500 text-red-500'
                              : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Info do Carro */}
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                        {car.name}
                      </h3>

                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                        <div>
                          <span className="font-semibold">Km:</span> {car.mileage.toLocaleString()}
                        </div>
                        <div>
                          <span className="font-semibold">Cor:</span> {car.color}
                        </div>
                        <div>
                          <span className="font-semibold">Combustível:</span> {car.fuel}
                        </div>
                        <div>
                          <span className="font-semibold">Marca:</span> {car.brand}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                        <div className="text-lg font-bold text-blue-600">
                          R$ {car.price.toLocaleString('pt-BR')}
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {displayedCars.length === 0 && (
                <div className="bg-white rounded-lg shadow p-12 text-center">
                  <p className="text-gray-500 text-lg">
                    Nenhum veículo encontrado com os filtros selecionados.
                  </p>
                </div>
              )}

              {/* Paginação */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(1)}
                  >
                    Primeira
                  </Button>

                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  >
                    Anterior
                  </Button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? 'default' : 'outline'}
                          className={currentPage === pageNum ? 'bg-blue-600' : ''}
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>

                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    Próxima
                  </Button>

                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    Última
                  </Button>

                  <span className="text-sm text-gray-600 ml-4">
                    Página {currentPage} de {totalPages}
                  </span>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
