import React, { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import { COURTS } from './constants';

interface CaseFormProps {
  selectedCourt: string;
  onSubmit: (data: any) => void;
  onBack: () => void;
}

export const CaseForm = ({ selectedCourt, onSubmit, onBack }: CaseFormProps) => {
  const [formData, setFormData] = useState({
    courtName: '',
    caseNumber: '',
    clientName: '',
    clientWhatsapp: '',
  });

  const selectedCourtData = COURTS.find(court => court.id === selectedCourt);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          Voltar
        </button>
        <h2 className="text-lg font-medium text-gray-900">
          Cadastro de Processo - {selectedCourtData?.name}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
        <div>
          <label htmlFor="processFile" className="block text-sm font-medium text-gray-700 mb-2">
            <Upload className="inline-block w-4 h-4 mr-1" />
            Processo (PDF)
          </label>
          <input
            id="processFile"
            type="file"
            accept=".pdf"
            className="w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="courtName" className="block text-sm font-medium text-gray-700 mb-2">
            Nome do Tribunal
          </label>
          <input
            id="courtName"
            name="courtName"
            type="text"
            value={formData.courtName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: TRF4"
            required
          />
        </div>

        <div>
          <label htmlFor="caseNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Número do Processo
          </label>
          <input
            id="caseNumber"
            name="caseNumber"
            type="text"
            value={formData.caseNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0000000-00.0000.0.00.0000"
            required
          />
        </div>

        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-2">
            Nome do Cliente
          </label>
          <input
            id="clientName"
            name="clientName"
            type="text"
            value={formData.clientName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="clientWhatsapp" className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp do Cliente
          </label>
          <input
            id="clientWhatsapp"
            name="clientWhatsapp"
            type="tel"
            value={formData.clientWhatsapp}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="(00) 00000-0000"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Cadastrar Processo
        </button>
      </form>
    </div>
  );
};