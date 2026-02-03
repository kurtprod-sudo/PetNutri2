
import React from 'react';

export const Problem: React.FC = () => {
  const icons = [
    { title: "Alerta de Saúde", text: "Problemas hepáticos", icon: "⚠️" },
    { title: "Dinheiro Perdido", text: "Tratamentos caros", icon: "💸" },
    { title: "Saúde em Risco", text: "Dores articulares", icon: "🦴" },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-red-600 text-center mb-10 uppercase italic">
          O ERRO INVISÍVEL NA SUA COZINHA
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <p>
              Você acha que está agradando, mas cada grama errada de ração ou petisco é uma <span className="font-bold underline decoration-red-500">bomba relógio</span> para o fígado e as articulações dele.
            </p>
            <p>
              Veterinários cobram <span className="font-bold">R$ 400,00</span> por uma consulta nutricional única. O PetNutri faz isso na palma da sua mão, todos os dias, por uma fração desse valor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {icons.map((item, idx) => (
              <div key={idx} className="flex items-center p-6 bg-red-50 border-l-8 border-red-500 rounded-r-xl shadow-sm">
                <span className="text-4xl mr-6">{item.icon}</span>
                <div>
                  <h4 className="font-black text-red-700 uppercase">{item.title}</h4>
                  <p className="text-red-900 opacity-80">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
