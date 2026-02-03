
import React from 'react';

export const Solution: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-16 uppercase">
          TRANSFORME A SAÚDE DELE EM 3 CLIQUES
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mockup do App */}
          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="bg-dark rounded-[3rem] p-4 shadow-2xl border-[8px] border-gray-800">
              <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-[500px]">
                <div className="bg-sage p-4 text-white text-center font-bold">PetNutri App</div>
                <div className="p-6 space-y-4 flex-grow">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400">1. Selecione o Pet</label>
                    <div className="flex gap-2">
                       <button className="flex-1 py-2 bg-sage text-white text-sm rounded-lg font-bold">🐶 Rex</button>
                       <button className="flex-1 py-2 bg-gray-100 text-gray-400 text-sm rounded-lg font-bold">🐱 Mia</button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400">2. Peso Atual</label>
                    <div className="w-full py-2 px-3 bg-gray-50 border rounded-lg text-sm font-bold">12.5 kg</div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="bg-sage/10 p-4 rounded-xl text-center">
                       <p className="text-[10px] text-sage font-black uppercase">Cota Diária Recomendada</p>
                       <p className="text-3xl font-black text-sage">185g</p>
                    </div>
                    <div className="mt-4 bg-yellow-50 p-4 rounded-xl text-center border border-yellow-100">
                       <p className="text-[10px] text-yellow-700 font-black uppercase">Limite de Petiscos</p>
                       <p className="text-xl font-black text-yellow-700">2 Unidades</p>
                    </div>
                  </div>
                </div>
                <button className="m-4 py-3 bg-sage text-white rounded-xl font-black uppercase text-sm">Gerar Relatório PDF</button>
              </div>
            </div>
            {/* Elementos decorativos do mockup */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 p-4 rounded-full shadow-lg font-black text-dark -rotate-12">FÁCIL!</div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                "Cálculo exato de calorias para Cães e Gatos.",
                "Conversor de Petiscos: Saiba exatamente quantos 'bifinhos' ele pode comer.",
                "Gerador de PDF para acompanhamento veterinário."
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-sage p-1 rounded-full mr-4 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-gray-800">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 italic text-lg font-medium">
              * Baseado em protocolos internacionais de nutrologia veterinária.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
