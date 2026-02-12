interface Step4Props {
  formData: {
    brand: string;
    model: string;
    year: string;
    color: string;
    mileage: string;
    fuelType: string;
    transmission: string;
    description: string;
  };
  photoPreview: string[];
}

export function Step4Summary({ formData, photoPreview }: Step4Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Resumo do Anúncio</h2>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Marca:</p>
            <p className="font-semibold text-gray-900">{formData.brand}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Modelo:</p>
            <p className="font-semibold text-gray-900">{formData.model}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Ano:</p>
            <p className="font-semibold text-gray-900">{formData.year}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Cor:</p>
            <p className="font-semibold text-gray-900">{formData.color}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Quilometragem:</p>
            <p className="font-semibold text-gray-900">{formData.mileage} km</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Combustível:</p>
            <p className="font-semibold text-gray-900">{formData.fuelType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Transmissão:</p>
            <p className="font-semibold text-gray-900">{formData.transmission || "Não informado"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Fotos:</p>
            <p className="font-semibold text-gray-900">{photoPreview.length} foto(s)</p>
          </div>
        </div>

        {formData.description && (
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600 mb-2">Descrição:</p>
            <p className="text-gray-900">{formData.description}</p>
          </div>
        )}
      </div>

      {photoPreview.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Galeria de Fotos</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {photoPreview.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <strong>Pronto!</strong> Você está pronto para publicar seu anúncio.
        </p>
      </div>
    </div>
  );
}
