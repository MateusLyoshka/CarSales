import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step1Props {
  formData: {
    brand: string;
    model: string;
    year: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export function Step1BasicInfo({ formData, onChange }: Step1Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Informações Básicas</h2>

      <div>
        <Label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
          Marca do Carro *
        </Label>
        <Input
          id="brand"
          name="brand"
          type="text"
          placeholder="Ex: Ford, Toyota, Chevrolet..."
          value={formData.brand}
          onChange={onChange}
          className="w-full"
        />
      </div>

      <div>
        <Label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
          Modelo *
        </Label>
        <Input
          id="model"
          name="model"
          type="text"
          placeholder="Ex: Mustang, Corolla, Onix..."
          value={formData.model}
          onChange={onChange}
          className="w-full"
        />
      </div>

      <div>
        <Label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
          Ano do Carro *
        </Label>
        <Input
          id="year"
          name="year"
          type="number"
          placeholder="Ex: 2020"
          value={formData.year}
          onChange={onChange}
          className="w-full"
        />
      </div>
    </div>
  );
}
