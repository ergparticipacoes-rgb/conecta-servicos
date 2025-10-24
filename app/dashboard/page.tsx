'use client';

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#E8C96A]/5 pt-20">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[#E8C96A]/20 rounded-full border border-[#E8C96A]/40">
            <span className="text-sm font-medium text-[#1B3D4B]">
              👋 Bem-vindo ao seu painel
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">
            Painel do Cliente
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Aqui você acompanhará seus serviços, documentos e status de entrega em tempo real.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#1C7C64] transition-all-smooth">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1C7C64] to-[#15655a] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-[#1C7C64] font-['Montserrat']">0</span>
            </div>
            <h3 className="text-lg font-bold text-[#1B3D4B] mb-2 font-['Montserrat']">Serviços Ativos</h3>
            <p className="text-sm text-[#6B6B6B]">Nenhum serviço em andamento</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#E8C96A] transition-all-smooth">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E8C96A] to-[#d4b556] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1B3D4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-[#E8C96A] font-['Montserrat']">0</span>
            </div>
            <h3 className="text-lg font-bold text-[#1B3D4B] mb-2 font-['Montserrat']">Pendentes</h3>
            <p className="text-sm text-[#6B6B6B]">Aguardando documentação</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#1B3D4B] transition-all-smooth">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1B3D4B] to-[#142e38] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-[#1B3D4B] font-['Montserrat']">0</span>
            </div>
            <h3 className="text-lg font-bold text-[#1B3D4B] mb-2 font-['Montserrat']">Concluídos</h3>
            <p className="text-sm text-[#6B6B6B]">Serviços finalizados</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Próximos Recursos */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1C7C64] to-[#15655a] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#1B3D4B] font-['Montserrat']">Em Breve</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#1C7C64]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#1C7C64]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B3D4B]">Login com Google</h3>
                  <p className="text-sm text-[#6B6B6B]">Acesso rápido e seguro com sua conta Google</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#1C7C64]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#1C7C64]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B3D4B]">Upload de Arquivos</h3>
                  <p className="text-sm text-[#6B6B6B]">Envie seus documentos de forma segura</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#1C7C64]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#1C7C64]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B3D4B]">Notificações Automáticas</h3>
                  <p className="text-sm text-[#6B6B6B]">Receba atualizações em tempo real</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#1C7C64]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#1C7C64]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B3D4B]">Rastreamento de Status</h3>
                  <p className="text-sm text-[#6B6B6B]">Acompanhe cada etapa do processo</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-[#1C7C64] to-[#1B3D4B] p-8 rounded-2xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8C96A]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#E8C96A]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 font-['Montserrat']">Solicitar Novo Serviço</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Precisa de ajuda com CPF, IRPF, MEI ou outros serviços? Estamos prontos para ajudar!
              </p>
              
              <Link
                href="/servicos"
                className="inline-block px-6 py-3 bg-[#E8C96A] text-[#1B3D4B] rounded-xl hover:bg-[#d4b556] transition-all-smooth shadow-xl hover:shadow-2xl hover:-translate-y-1 font-bold"
              >
                Ver Serviços Disponíveis
              </Link>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#E8C96A] to-[#d4b556] rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#1B3D4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Precisa de Ajuda?</h2>
          <p className="text-[#6B6B6B] mb-6 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida ou problema.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contato@conectabrasil.com.br"
              className="px-6 py-3 bg-[#1C7C64] text-white rounded-xl hover:bg-[#15655a] transition-all-smooth shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Enviar E-mail
            </a>
            <a
              href="tel:08001234567"
              className="px-6 py-3 bg-white text-[#1C7C64] border-2 border-[#1C7C64] rounded-xl hover:bg-[#1C7C64] hover:text-white transition-all-smooth font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0800 123 4567
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
