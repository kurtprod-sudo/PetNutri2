
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// --- CONSTANTS ---
const CHECKOUT_LINK = "https://pay.hotmart.com/C104254337F";

// --- COMPONENTS ---

const Hero: React.FC = () => (
  <section className="bg-dark text-white pt-20 pb-16 px-6 lg:px-24 flex flex-col items-center text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 uppercase">
        VOCÊ ESTÁ MATANDO SEU PET COM <span className="text-red-500">"SÓ UM PEDACINHO"</span>?
      </h1>
      <h2 className="text-xl md:text-2xl font-normal text-yellow-400 mb-10 max-w-2xl mx-auto">
        A obesidade silenciosa tira, em média, 2 anos da vida do seu melhor amigo. Pare de chutar a quantidade. Use a ciência.
      </h2>
      <a 
        href={CHECKOUT_LINK}
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

const Problem: React.FC = () => {
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

const Solution: React.FC = () => (
  <section className="bg-gray-100 py-20 px-6 lg:px-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-16 uppercase">
        TRANSFORME A SAÚDE DELE EM 3 CLIQUES
      </h2>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
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
          <div className="absolute -top-4 -right-4 bg-yellow-400 p-4 rounded-full shadow-lg font-black text-dark -rotate-12 uppercase">Fácil!</div>
        </div>
        <div className="space-y-8">
          <div className="space-y-6">
            {[
              "Cálculo exato de calorias para Cães e Gatos.",
              "Conversor de Petiscos: Saiba exatamente quantos 'bifinhos' ele pode comer.",
              "Gerador de PDF para acompanhamento veterinário."
            ].map((point, idx) => (
              <div key={idx} className="flex items-start">
                <div className="bg-sage p-1 rounded-full mr-4 mt-1 shrink-0">
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

const Pricing: React.FC = () => (
  <section id="pricing" className="bg-dark text-white py-24 px-6 lg:px-24">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
        QUANTO VALE <span className="text-yellow-400">2 ANOS A MAIS</span> COM ELE?
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 border-2 border-gray-700 rounded-3xl opacity-60">
          <h4 className="text-xl font-bold uppercase mb-4 text-gray-400">Tratamento Tradicional</h4>
          <div className="space-y-4 text-left text-gray-400">
             <p className="flex justify-between"><span>Consulta Vet:</span> <span>R$ 400,00</span></p>
             <p className="flex justify-between"><span>Exames:</span> <span>R$ 600,00</span></p>
             <p className="flex justify-between"><span>Remédios Articulação:</span> <span>R$ 1.500,00</span></p>
          </div>
          <hr className="my-6 border-gray-700" />
          <p className="text-3xl font-black">R$ 2.500,00</p>
          <p className="text-sm text-gray-500 mt-2 uppercase">Gasto Médio Estimado</p>
        </div>
        <div className="p-8 border-4 border-sage rounded-3xl bg-gray-900/50 relative shadow-2xl">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sage text-white px-6 py-1 rounded-full font-black text-sm uppercase whitespace-nowrap">O Caminho Inteligente</div>
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
         <p className="text-xl text-gray-300 italic">
           "Menos que uma pizza. Menos que um saco de petisco industrializado."
         </p>
         <a 
          href={CHECKOUT_LINK}
          className="pulsating-btn inline-block bg-sage hover:bg-green-600 text-white font-black text-2xl py-8 px-12 rounded-2xl transition-all uppercase tracking-widest shadow-lg cursor-pointer no-underline"
         >
          BAIXAR AGORA - ACESSO IMEDIATO
         </a>
      </div>
    </div>
  </section>
);

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

const FAQ: React.FC = () => (
  <section className="bg-white py-20 px-6 lg:px-24">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 bg-gray-50 p-8 rounded-3xl border border-gray-100">
         <div className="flex items-center">
            <div className="w-24 h-24 bg-sage text-white rounded-full flex items-center justify-center font-black text-4xl mr-6 shadow-lg shrink-0">7</div>
            <div>
               <h3 className="text-2xl font-black uppercase text-gray-900">Garantia Blindada</h3>
               <p className="text-gray-500 font-medium">7 Dias para testar ou seu dinheiro de volta.</p>
            </div>
         </div>
         <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold text-[10px] text-center p-2 uppercase shrink-0">Selo de Garantia</div>
      </div>
      <h2 className="text-3xl font-black text-center mb-10 uppercase">Perguntas Frequentes</h2>
      <div className="divide-y divide-gray-200">
         <AccordionItem question="Serve para gatos?" answer="Sim! O PetNutri possui algoritmos específicos tanto para cães quanto para gatos de todas as raças e idades." />
         <AccordionItem question="É mensalidade?" answer="Não. O valor de R$ 29,90 é um pagamento único que garante seu acesso vitalício à ferramenta." />
         <AccordionItem question="Como recebo o acesso?" answer="Imediatamente após a confirmação do pagamento, você receberá o link de acesso exclusivo no seu e-mail cadastrado." />
         <AccordionItem question="Preciso de balança de cozinha?" answer="Recomendamos o uso para maior precisão nos cálculos, mas o app também oferece medidas em xícaras e colheres de referência padrão." />
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-dark text-gray-500 py-12 px-6 lg:px-24 text-center text-sm border-t border-gray-800">
    <div className="max-w-4xl mx-auto space-y-4">
      <p className="font-bold text-gray-400">PetNutri © {new Date().getFullYear()} - Todos os direitos reservados.</p>
      <p className="px-4">
        Aviso: O PetNutri é uma ferramenta de auxílio nutricional e não substitui a consulta presencial com um médico veterinário, especialmente em pets com condições clínicas pré-existentes.
      </p>
    </div>
  </footer>
);

// --- MAIN APP ---

const App: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Hero />
    <Problem />
    <Solution />
    <Pricing />
    <FAQ />
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
