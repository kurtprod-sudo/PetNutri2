import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-dark text-white py-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
          QUANTO VALE <span className="text-yellow-400">2 ANOS A MAIS</span> COM ELE?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Lado A */}
          <div className="p-8 border-2 border-gray-700 rounded-3xl opacity-60">
            <h4 className="text-xl font-bold uppercase mb-4 text-gray-400">Tratamento Tradicional</h4>
            <div className="space-y-4 text-left text-gray-400">
               <p className="flex justify-between"><span>Consulta Vet:</span> <span>R$ 400,00</span></p>
               <p className="flex justify-between"><span>Exames:</span> <span>R$ 600,00</span></p>
               <p className="flex justify-between"><span>Remédios Articulação:</span> <span>R$ 1.500,00</span></p>
            </div>
            <hr className="my-6 border-gray-700" />
            <p className="text-3xl font-black">R$ 2.500,00</p>
            <p className="text-sm text-gray-500 mt-2 uppercase">Gasto por Ano</p>
          </div>

          {/* Lado B */}
          <div className="p-8 border-4 border-sage rounded-3xl bg-gray-900/50 relative shadow-2xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sage text-white px-6 py-1 rounded-full font-black text-sm uppercase">O Caminho Inteligente</div>
            <h4 className="text-xl font-black uppercase mb-4 text-sage">PetNutri Vitalício</h4>
            <div className="space-y-4 text-left">
               <p className="flex justify-between text-gray-300"><span>Acesso Ilimitado:</span> <span className="text-sage font-bold">SIM</span></p>
               <p className="flex justify-between text-gray-300"><span>Cães e Gatos:</span> <span className="text-sage font-bold">SIM</span></p>
               <p className="flex justify-between text-gray-300"><span>Atualizações:</span> <span className="text-sage font-bold">SIM</span></p>
            </div>
            <hr className="my-6 border-gray-700" />
            <div className="flex flex-col items-center">
               <p className="text-gray-400 line-through text-lg">R$ 197,00</p>
               <p className="text-6xl font-black text-yellow-400">R$ 29,90</p>
               <p className="text-sm text-sage mt-2 font-bold uppercase">PAGAMENTO ÚNICO</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <p className="text-xl text-gray-300">
             "Menos que uma pizza. Menos que um saco de petisco industrializado."
           </p>
           <a 
            href="https://pay.hotmart.com/C104254337F" 
            className="pulsating-btn inline-block bg-sage hover:bg-green-600 text-white font-black text-2xl py-8 px-12 rounded-2xl transition-all uppercase tracking-widest shadow-lg no-underline"
           >
            BAIXAR AGORA - ACESSO IMEDIATO
           </a>
        </div>
      </div>
    </section>
  );
};