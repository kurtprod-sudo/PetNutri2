import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-gray-500 py-12 px-6 lg:px-24 text-center text-sm border-t border-gray-800">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="font-bold text-gray-400">PetNutri © {new Date().getFullYear()} - Todos os direitos reservados.</p>
        <p className="px-4">
          Aviso: O PetNutri é uma ferramenta de auxílio nutricional e não substitui a consulta presencial com um médico veterinário, especialmente em pets com doenças pré-existentes.
        </p>
      </div>
    </footer>
  );
};