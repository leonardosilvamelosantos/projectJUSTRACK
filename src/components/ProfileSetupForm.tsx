import React, { useState } from 'react';
import { Upload, MapPin, Phone } from 'lucide-react';

interface ProfileSetupFormProps {
  onComplete: (data: any) => void;
}

export const ProfileSetupForm = ({ onComplete }: ProfileSetupFormProps) => {
  const [formData, setFormData] = useState({
    oabNumber: '',
    oabState: '',
    address: '',
    whatsapp: '',
    howFound: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Complete seu Perfil</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número OAB
            </label>
            <input
              type="text"
              name="oabNumber"
              value={formData.oabNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estado OAB
            </label>
            <select
              name="oabState"
              value={formData.oabState}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Selecione</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              {/* Add other states */}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline-block w-4 h-4 mr-1" />
            Endereço Completo
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Rua, número, complemento, cidade, estado"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="inline-block w-4 h-4 mr-1" />
            WhatsApp
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="(00) 00000-0000"
            required
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Upload className="inline-block w-4 h-4 mr-1" />
              Documento Profissional
            </label>
            <input
              type="file"
              accept="image/*,.pdf"
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Upload className="inline-block w-4 h-4 mr-1" />
              Foto da Carteira OAB
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Como conheceu a plataforma?
          </label>
          <select
            name="howFound"
            value={formData.howFound}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Selecione</option>
            <option value="indicacao">Indicação</option>
            <option value="redes_sociais">Redes Sociais</option>
            <option value="pesquisa">Pesquisa Google</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Finalizar Cadastro
        </button>
      </form>
    </div>
  );
};