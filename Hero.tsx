
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-dark text-white pt-20 pb-16 px-6 lg:px-24 flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 uppercase">
          VOCÊ ESTÁ MATANDO SEU PET COM <span className="text-red-500">"SÓ UM PEDACINHO"</span>?
        </h1>
        <h2 className="text-xl md:text-2xl font-normal text-yellow-400 mb-10 max-w-2xl mx-auto">
          A obesidade silenciosa tira, em média, 2 anos da vida do seu melhor amigo. Pare de chutar a quantidade. Use a ciência.
        </h2>
        
        <a 
          href="https://pay.hotmart.com/C104254337F?checkoutMode=10" 
          className="pulsating-btn inline-block bg-sage hover:bg-green-600 text-white font-black text-lg md:text-xl py-6 px-8 rounded-xl transition-all uppercase tracking-wider mb-12 cursor-pointer no-underline"
        >
          QUERO PROTEGER MEU PET POR R$ 29,90
        </a>

        <div className="w-full aspect-square md:aspect-video max-w-4xl bg-gray-800 rounded-3xl overflow-hidden shadow-2xl relative border-4 border-gray-700">
          <div className="grid grid-cols-2 h-full w-full">
            <div className="relative h-full border-r-2 border-white/20">
              <img 
                src="https://i.postimg.cc/jjfBwCVb/cachorrosaudavel.jpg" 
                alt="Cachorro Saudável" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-900/10 flex flex-col items-center justify-end pb-8">
                 <span className="bg-green-600 px-4 py-1 rounded text-xs md:text-sm font-bold uppercase mb-2 shadow-lg">Saudável</span>
              </div>
            </div>
            <div className="relative h-full">
              <img 
                src="https://i.postimg.cc/SK9H2j0p/cachorroobeso.jpg" 
                alt="Cachorro Obeso" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-900/10 flex flex-col items-center justify-end pb-8">
                 <span className="bg-red-600 px-4 py-1 rounded text-xs md:text-sm font-bold uppercase mb-2 shadow-lg">Obeso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
