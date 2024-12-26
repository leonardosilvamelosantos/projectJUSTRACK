import React from 'react';
import { COURTS } from './constants';
import { Building2, Scale, Gavel, LandPlot } from 'lucide-react';

const COURT_ICONS: Record<string, React.ComponentType<any>> = {
  estadual: Building2,
  regional: Scale,
  federal: Gavel,
  superior: LandPlot,
  militar: Gavel,
  eleitoral: Scale,
  trabalho: Building2,
};

interface CourtSelectorProps {
  onSelect: (courtId: string) => void;
}

export const CourtSelector = ({ onSelect }: CourtSelectorProps) => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-6">Selecione o Tribunal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURTS.map((court) => {
          const Icon = COURT_ICONS[court.type] || Building2;
          return (
            <button
              key={court.id}
              onClick={() => onSelect(court.id)}
              className="flex flex-col items-center p-8 text-center rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors duration-200"
            >
              <Icon className="w-12 h-12 text-blue-600 mb-4" />
              <span className="text-lg font-medium text-gray-900">{court.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};