"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

interface FipeQuery {
  brand: string;
  model: string;
  year: string;
  fuelType: string;
}

export default function FipePage() {
  const [formData, setFormData] = useState<FipeQuery>({
    brand: "",
    model: "",
    year: "",
    fuelType: "",
  });

  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsult = async () => {
    if (!formData.brand || !formData.model || !formData.year) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setIsLoading(true);
    
    // Simular uma consulta à API
    setTimeout(() => {
      console.log("Consultando FIPE com dados:", formData);
      alert(`Buscando dados FIPE para ${formData.brand} ${formData.model} ${formData.year}...`);
      setIsLoading(false);
    }, 1500);
  };

  // Dados de exemplo para as listas
  const brands = [
    "FIAT",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "Toyota",
    "Honda",
    "Hyundai",
    "Renault",
    "Peugeot",
    "Citroën",
    "BMW",
    "Mercedes-Benz",
    "Audi",
  ];

  const models: { [key: string]: string[] } = {
    FIAT: ["Uno", "Pálio", "Strada", "Argo"],
    Ford: ["Fiesta", "Focus", "Fusion", "EcoSport"],
    Chevrolet: ["Onix", "Cruze", "Prisma", "Celta"],
    Volkswagen: ["Gol", "Polo", "Golf", "Passat"],
    Toyota: ["Corolla", "Camry", "Yaris", "Hilux"],
    Honda: ["Civic", "Accord", "HR-V", "Fit"],
    Hyundai: ["HB20", "Elantra", "Tucson", "Santa Fe"],
    Renault: ["Sandero", "Duster", "Logan", "Captur"],
    Peugeot: ["208", "308", "2008", "3008"],
    Citroën: ["C3", "C4", "C5", "Aircross"],
    BMW: ["320i", "330i", "X1", "X3"],
    "Mercedes-Benz": ["C200", "E250", "GLA", "GLC"],
    Audi: ["A3", "A4", "Q3", "Q5"],
  };

  const years = Array.from({ length: 30 }, (_, i) => (2024 - i).toString());

  const fuelTypes = ["Gasolina", "Diesel", "Álcool", "Híbrido", "Elétrico"];

  const selectedModels = formData.brand ? (models[formData.brand as keyof typeof models] || []) : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow bg-linear-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Tabela FIPE</h1>
          <p className="text-gray-600 mb-8">Consulte o valor de mercado do seu veículo</p>

          <Card className="p-8 shadow-lg">
            <div className="space-y-6">
              {/* Marca */}
              <div>
                <Label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                  Marca do Veículo *
                </Label>
                <select
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione uma marca...</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Modelo */}
              <div>
                <Label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
                  Modelo *
                </Label>
                <select
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  disabled={!formData.brand}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {!formData.brand
                      ? "Selecione uma marca primeiro..."
                      : "Selecione um modelo..."}
                  </option>
                  {selectedModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ano */}
              <div>
                <Label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                  Ano do Veículo *
                </Label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione um ano...</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Combustível */}
              <div>
                <Label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-2">
                  Combustível
                </Label>
                <select
                  id="fuelType"
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione um combustível...</option>
                  {fuelTypes.map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel}
                    </option>
                  ))}
                </select>
              </div>

              {/* Informação */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Informação:</strong> Os dados FIPE mostram o valor de mercado do seu veículo com base nas
                  consultas mensais realizadas em concessionárias, revendedoras e leiloeiros cadastrados.
                </p>
              </div>

              {/* Botão Consultar */}
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleConsult}
                  disabled={isLoading}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Consultando..." : "Consultar"}
                </Button>
              </div>
            </div>
          </Card>

          {/* Resultados (Placeholder) */}
          {results && (
            <Card className="p-8 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Resultado da Consulta</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600">Resultados aparecerão aqui quando a API for conectada.</p>
              </div>
            </Card>
          )}

          {/* Informação Adicional */}
          <Card className="p-8 shadow-lg mt-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Como Funciona o FIPE</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>FIPE - Fundação Instituto de Pesquisas Econômicas</strong> fornece uma referência de
                preços de veículos usados no mercado brasileiro.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Atualização mensal de preços</li>
                <li>Base de dados com milhões de cotações</li>
                <li>Consulta gratuita de valores</li>
                <li>Referência aceita por bancos e financeiras</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Essa ferramenta é útil para quem quer saber o valor aproximado do seu veículo para venda ou avaliação.
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
