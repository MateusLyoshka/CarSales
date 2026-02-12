import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step2Props {
  formData: {
    color: string;
    mileage: string;
    fuelType: string;
    transmission: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export function Step2VehicleDetails({ formData, onChange }: Step2Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Detalhes do Veículo</h2>

      <div>
        <Label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
          Cor *
        </Label>
        <select
          id="color"
          name="color"
          value={formData.color}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Selecione uma cor...</option>
          <option value="preto">Preto</option>
          <option value="branco">Branco</option>
          <option value="prata">Prata</option>
          <option value="cinza">Cinza</option>
          <option value="vermelho">Vermelho</option>
          <option value="azul">Azul</option>
          <option value="marrom">Marrom</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div>
        <Label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-2">
          Quilometragem *
        </Label>
        <Input
          id="mileage"
          name="mileage"
          type="number"
          placeholder="Ex: 50000"
          value={formData.mileage}
          onChange={onChange}
          className="w-full"
        />
      </div>

      <div>
        <Label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-2">
          Combustível *
        </Label>
        <select
          id="fuelType"
          name="fuelType"
          value={formData.fuelType}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Selecione um combustível...</option>
          <option value="gasolina">Gasolina</option>
          <option value="diesel">Diesel</option>
          <option value="eletrico">Elétrico</option>
          <option value="hibrido">Híbrido</option>
          <option value="alcool">Álcool</option>
        </select>
      </div>

      <div>
        <Label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-2">
          Transmissão
        </Label>
        <select
          id="transmission"
          name="transmission"
          value={formData.transmission}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Selecione uma transmissão...</option>
          <option value="manual">Manual</option>
          <option value="automatica">Automática</option>
          <option value="cvt">CVT</option>
        </select>
      </div>
    </div>
  );
}
