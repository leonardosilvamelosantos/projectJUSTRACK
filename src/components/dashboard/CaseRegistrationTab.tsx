import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { COURTS } from './constants';
import { CourtSelector } from './CourtSelector';
import { CaseForm } from './CaseForm';

export const CaseRegistrationTab = () => {
  const [selectedCourt, setSelectedCourt] = useState<string>('');

  const handleSubmit = (formData: any) => {
    console.log('Form submitted:', { selectedCourt, ...formData });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {!selectedCourt ? (
        <CourtSelector onSelect={setSelectedCourt} />
      ) : (
        <CaseForm selectedCourt={selectedCourt} onSubmit={handleSubmit} onBack={() => setSelectedCourt('')} />
      )}
    </div>
  );
};