
import React, { useState } from 'react';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-gray-800">{question}</span>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && <p className="pb-6 text-gray-600 leading-relaxed text-lg">{answer}</p>}
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 bg-gray-50 p-8 rounded-3xl border border-gray-100">
           <div className="flex items-center">
              <div className="w-24 h-24 bg-sage text-white rounded-full flex items-center justify-center font-black text-4xl mr-6 shadow-lg">7</div>
              <div>
                 <h3 className="text-2xl font-black uppercase text-gray-900">Garantia Blindada</h3>
                 <p className="text-gray-500 font-medium">7 Dias para testar ou seu dinheiro de volta.</p>
              </div>
           </div>
           <img src="https://picsum.photos/seed/seal/100/100" alt="Selo de Segurança" className="w-20 grayscale opacity-50" />
        </div>

        <h2 className="text-3xl font-black text-center mb-10 uppercase">Perguntas Frequentes</h2>
        <div className="divide-y divide-gray-200">
           <AccordionItem 
              question="Serve para gatos?" 
              answer="Sim! O PetNutri possui algoritmos específicos tanto para cães quanto para gatos de todas as raças e idades." 
           />
           <AccordionItem 
              question="É mensalidade?" 
              answer="Não. O valor de R$ 29,90 é um pagamento único que garante seu acesso vitalício à ferramenta." 
           />
           <AccordionItem 
              question="Como recebo o acesso?" 
              answer="Imediatamente após a confirmação do pagamento, você receberá o link de acesso exclusivo no seu e-mail." 
           />
           <AccordionItem 
              question="Preciso de balança de cozinha?" 
              answer="Recomendamos o uso para maior precisão, mas o app também oferece medidas em xícaras e colheres de referência." 
           />
        </div>
      </div>
    </section>
  );
};
