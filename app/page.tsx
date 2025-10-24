'use client';

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Fundo com degradê dourado translúcido */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8C96A]/10 via-[#F9FAFB] to-[#1C7C64]/5"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#E8C96A]/20 rounded-full border border-[#E8C96A]/40">
            <span className="text-sm font-medium text-[#1B3D4B]">
              ✨ Parte do Ecossistema Conecta Brasil®
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#1B3D4B] leading-tight mb-6 font-['Montserrat']">
            Soluções rápidas e seguras para sua <span className="text-[#1C7C64]">vida burocrática</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#6B6B6B] max-w-3xl mx-auto mb-10 leading-relaxed">
            Tudo online, com suporte humano e prazos garantidos. CPF, IRPF, MEI, Prefeituras e muito mais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/servicos"
              className="px-8 py-4 bg-[#1C7C64] text-white rounded-xl hover:bg-[#15655a] transition-all-smooth shadow-2xl hover:shadow-3xl hover:-translate-y-1 font-bold text-lg"
            >
              Quero resolver agora
            </Link>
            <Link
              href="/servicos"
              className="px-8 py-4 bg-white text-[#1C7C64] rounded-xl border-2 border-[#1C7C64] hover:bg-[#1C7C64] hover:text-white transition-all-smooth font-bold text-lg"
            >
              Ver serviços
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-[#6B6B6B]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1C7C64]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1C7C64]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span>Satisfação Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1C7C64]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Prazos Garantidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3D4B] mb-6 font-['Montserrat']">
              Por que escolher a Conecta Brasil?
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
              Somos uma plataforma SaaS premium que combina tecnologia de ponta com atendimento humano 
              para resolver sua vida burocrática de forma rápida, segura e sem complicações.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1C7C64] to-[#1B3D4B] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Rapidez</h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                Processos otimizados que economizam seu tempo. A maioria dos serviços é concluída em até 48h.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1C7C64] to-[#1B3D4B] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Segurança</h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                Seus dados são protegidos com criptografia de ponta e seguimos rigorosos padrões de privacidade.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1C7C64] to-[#1B3D4B] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Suporte Humano</h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                Nossa equipe especializada está pronta para tirar suas dúvidas e acompanhar seu processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-[#E8C96A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3D4B] mb-6 font-['Montserrat']">
              Nossos Serviços
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas para todos os seus desafios burocráticos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CPF",
                description: "Emissão, regularização e consulta de CPF de forma rápida e segura.",
                icon: "👤",
                color: "from-[#1C7C64] to-[#15655a]"
              },
              {
                title: "IRPF",
                description: "Declaração de Imposto de Renda com suporte especializado.",
                icon: "📊",
                color: "from-[#1B3D4B] to-[#142e38]"
              },
              {
                title: "MEI",
                description: "Abertura, alteração e baixa de MEI em poucos passos.",
                icon: "💼",
                color: "from-[#1C7C64] to-[#15655a]"
              },
              {
                title: "Prefeituras",
                description: "Serviços municipais, alvarás, licenças e certidões.",
                icon: "🏛️",
                color: "from-[#1B3D4B] to-[#142e38]"
              },
              {
                title: "Certidões",
                description: "Emissão de certidões negativas, nascimento, casamento e mais.",
                icon: "📜",
                color: "from-[#1C7C64] to-[#15655a]"
              },
              {
                title: "Consultoria",
                description: "Assessoria especializada para resolver casos complexos.",
                icon: "💡",
                color: "from-[#1B3D4B] to-[#142e38]"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href="/servicos"
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all-smooth hover:-translate-y-2 border-2 border-transparent hover:border-[#1C7C64] cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all-smooth shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1B3D4B] mb-3 font-['Montserrat'] group-hover:text-[#1C7C64] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-[#1C7C64] font-semibold group-hover:gap-2 transition-all-smooth">
                  <span>Saiba mais</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#1C7C64] to-[#1B3D4B] text-white rounded-xl hover:opacity-90 transition-all-smooth shadow-lg hover:shadow-xl font-bold text-lg"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3D4B] mb-6 font-['Montserrat']">
              Como Funciona
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
              Processo simples e transparente em apenas 3 passos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Linha conectora (desktop) */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-1 bg-gradient-to-r from-[#1C7C64] via-[#E8C96A] to-[#1C7C64] z-0"></div>

            <div className="relative z-10 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#1C7C64] to-[#15655a] rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-5xl font-bold text-white font-['Montserrat']">1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Escolha o Serviço</h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                Navegue pelos nossos serviços e selecione o que você precisa resolver.
              </p>
            </div>

            <div className="relative z-10 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#E8C96A] to-[#d4b556] rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-5xl font-bold text-[#1B3D4B] font-['Montserrat']">2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Envie os Documentos</h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                Faça upload dos documentos necessários de forma 100% segura e online.
              </p>
            </div>

            <div className="relative z-10 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#1B3D4B] to-[#142e38] rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-5xl font-bold text-white font-['Montserrat']">3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Receba o Resultado</h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                Acompanhe o processo em tempo real e receba o resultado no prazo garantido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final / Contato */}
      <section className="py-24 bg-gradient-to-br from-[#1C7C64] to-[#1B3D4B] relative overflow-hidden">
        {/* Padrão decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#E8C96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#E8C96A] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Montserrat']">
            Pronto para resolver sua vida burocrática?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Junte-se a milhares de brasileiros que já simplificaram suas obrigações com a Conecta Brasil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/dashboard"
              className="px-10 py-5 bg-[#E8C96A] text-[#1B3D4B] rounded-xl hover:bg-[#d4b556] transition-all-smooth shadow-2xl hover:shadow-3xl hover:-translate-y-1 font-bold text-lg"
            >
              Quero resolver agora
            </Link>
            <Link
              href="/servicos"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all-smooth font-bold text-lg"
            >
              Explorar Serviços
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>contato@conectabrasil.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>0800 123 4567</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
