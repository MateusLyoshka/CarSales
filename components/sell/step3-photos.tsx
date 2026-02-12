import { Label } from "@/components/ui/label";

interface Step3Props {
  formData: {
    description: string;
  };
  photoPreview: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onPhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhotoRemove: (index: number) => void;
}

export function Step3Photos({
  formData,
  photoPreview,
  onChange,
  onPhotoUpload,
  onPhotoRemove,
}: Step3Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Fotos do Carro</h2>

      <div>
        <Label htmlFor="photos" className="block text-sm font-medium text-gray-700 mb-2">
          Carregue até 10 fotos do seu carro
        </Label>
        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-400 transition">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20a4 4 0 004 4h24a4 4 0 004-4V16a4 4 0 00-4-4h-8l-4-4z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx={24} cy={24} r={6} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="photos"
                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-700"
              >
                <span>Clique para carregar</span>
                <input
                  id="photos"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={onPhotoUpload}
                  className="sr-only"
                />
              </label>
              <p className="pl-1">ou arraste e solte</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
          </div>
        </div>
      </div>

      {/* Preview de Fotos */}
      {photoPreview.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Fotos Carregadas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {photoPreview.map((preview, index) => (
              <div key={index} className="relative group">
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => onPhotoRemove(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                >
                  ✕
                </button>
                <p className="text-xs text-gray-600 mt-1">Foto {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Dica:</strong> Tire fotos claras do carro de diferentes ângulos - frente, trás, costados e interior.
        </p>
      </div>

      <div>
        <Label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Descrição Adicional
        </Label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Descreva o estado do carro, histórico, defeitos ou características especiais..."
          value={formData.description}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
