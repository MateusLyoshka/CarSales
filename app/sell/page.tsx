"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Step1BasicInfo } from "@/components/sell/step1-basic-info";
import { Step2VehicleDetails } from "@/components/sell/step2-vehicle-details";
import { Step3Photos } from "@/components/sell/step3-photos";
import { Step4Summary } from "@/components/sell/step4-summary";

export default function SellPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    mileage: "",
    fuelType: "",
    transmission: "",
    description: "",
    photos: [] as File[],
  });
  const [photoPreview, setPhotoPreview] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPhotos: File[] = [];
      const newPreviews: string[] = [];

      Array.from(files).forEach((file) => {
        newPhotos.push(file);
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            newPreviews.push(event.target.result as string);
            if (newPreviews.length === newPhotos.length) {
              setPhotoPreview((prev) => [...prev, ...newPreviews]);
            }
          }
        };
        reader.readAsDataURL(file);
      });

      setFormData((prev) => ({
        ...prev,
        photos: [...prev.photos, ...newPhotos],
      }));
    }
  };

  const removePhoto = (index: number) => {
    setPhotoPreview((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const isStep1Valid = formData.brand && formData.model && formData.year;
  const isStep2Valid = formData.color && formData.mileage && formData.fuelType;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Formulário enviado com sucesso! (dados não armazenados)");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="grow bg-linear-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Venda seu Carro</h1>
          <p className="text-gray-600 mb-8">Preencha as informações do seu veículo</p>

          {/* Indicador de Passos */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${
                    step >= stepNum
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {stepNum}
                </div>
                <span className="text-sm text-gray-600">
                  {stepNum === 1 && "Básico"}
                  {stepNum === 2 && "Detalhes"}
                  {stepNum === 3 && "Fotos"}
                  {stepNum === 4 && "Resumo"}
                </span>
                {stepNum < 4 && (
                  <div
                    className={`hidden sm:block w-full h-1 mt-4 -mb-16 ${
                      step > stepNum ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="p-8 shadow-lg">
              {step === 1 && (
                <Step1BasicInfo formData={formData} onChange={handleInputChange} />
              )}

              {step === 2 && (
                <Step2VehicleDetails formData={formData} onChange={handleInputChange} />
              )}

              {step === 3 && (
                <Step3Photos
                  formData={formData}
                  photoPreview={photoPreview}
                  onChange={handleInputChange}
                  onPhotoUpload={handlePhotoUpload}
                  onPhotoRemove={removePhoto}
                />
              )}

              {step === 4 && (
                <Step4Summary formData={formData} photoPreview={photoPreview} />
              )}
            </Card>

            {/* Botões de Navegação */}
            <div className="flex justify-between mt-8 gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="px-6"
              >
                ← Voltar
              </Button>

              <div className="flex gap-4">
                {step < 4 && (
                  <Button
                    type="button"
                    onClick={() => {
                      if (step === 1 && isStep1Valid) setStep(2);
                      else if (step === 2 && isStep2Valid) setStep(3);
                      else if (step === 3) setStep(4);
                      else alert("Preencha os campos obrigatórios");
                    }}
                    className="px-6 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Próximo →
                  </Button>
                )}

                {step === 4 && (
                  <Button
                    type="submit"
                    className="px-6 bg-green-600 hover:bg-green-700 text-white"
                  >
                    Publicar Anúncio
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
