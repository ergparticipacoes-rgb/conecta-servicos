'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calculator, 
  Briefcase, 
  Users, 
  Building2, 
  FileCheck 
} from 'lucide-react';
import ServiceModal from '../components/ServiceModal';

export default function ServicosPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const services = [
    {
      title: "Receita Federal / CPF",
      description: "Emissão, regularização e consulta de CPF de forma rápida e segura. Resolva pendências e obtenha certidões.",
      icon: FileText,
      color: "from-[#1C7C64] to-[#15655a]",
      route: "/servicos/cpf"
    },
    {
      title: "IRPF",
      description: "Declaração de Imposto de Renda com suporte especializado. Maximize sua restituição com segurança.",
      icon: Calculator,
      color: "from-[#1B3D4B] to-[#142e38]",
      route: "/servicos/irpf"
    },
    {
      title: "MEI",
      description: "Abertura, alteração e baixa de MEI em poucos passos. Gestão completa do seu microempreendimento.",
      icon: Briefcase,
      color: "from-[#1C7C64] to-[#15655a]",
      route: "/servicos/mei"
    },
    {
      title: "Associações e ONGs",
      description: "Abertura e gestão de associações, ONGs e entidades sem fins lucrativos. Suporte completo e especializado.",
      icon: Users,
      color: "from-[#1B3D4B] to-[#142e38]",
      route: "/servicos/associacoes"
    },
    {
      title: "Prefeituras e Protocolos",
      description: "Serviços municipais, alvarás, licenças e protocolos em prefeituras. Agilidade e acompanhamento online.",
      icon: Building2,
      color: "from-[#1C7C64] to-[#15655a]",
      route: "/servicos/prefeituras"
    },
    {
      title: "Contratos e Documentos",
      description: "Elaboração de contratos, documentos e certidões. Assessoria jurídica para sua tranquilidade.",
      icon: FileCheck,
      color: "from-[#1B3D4B] to-[#142e38]",
      route: "/servicos/contratos"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#F9FAFB] via-white to-[#E8C96A]/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 bg-[#E8C96A]/20 rounded-full border border-[#E8C96A]/40"
          >
            <span className="text-sm font-medium text-[#1B3D4B]">
              ✨ Parte do Ecossistema Conecta Brasil®
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#1B3D4B] leading-tight mb-6 font-['Montserrat']"
          >
            Serviços
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed"
          >
            Selecione o serviço desejado e acompanhe tudo online com <span className="text-[#1C7C64] font-semibold">transparência</span>, <span className="text-[#1C7C64] font-semibold">segurança</span> e <span className="text-[#1C7C64] font-semibold">suporte humano</span>.
          </motion.p>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all-smooth border-2 border-gray-100 hover:border-[#E8C96A] cursor-pointer"
                >
                  {/* Ícone */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all-smooth shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-[#1B3D4B] mb-3 font-['Montserrat'] group-hover:text-[#1C7C64] transition-colors">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-[#6B6B6B] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Botão */}
                  <button
                    onClick={() => handleServiceClick(service.title)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#1C7C64] to-[#1B3D4B] text-white rounded-xl hover:opacity-90 transition-all-smooth font-semibold shadow-lg group-hover:shadow-xl"
                  >
                    Solicitar agora
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-br from-[#F9FAFB] to-[#E8C96A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">
              Por que escolher nossos serviços?
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Compromisso com excelência e transparência em cada etapa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1C7C64] to-[#15655a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B3D4B] mb-3 font-['Montserrat']">
                100% Seguro
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Criptografia de ponta e proteção total dos seus dados
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8C96A] to-[#d4b556] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#1B3D4B]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B3D4B] mb-3 font-['Montserrat']">
                Prazos Garantidos
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Cumprimento rigoroso dos prazos estabelecidos
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B3D4B] to-[#142e38] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B3D4B] mb-3 font-['Montserrat']">
                Satisfação Garantida
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Suporte dedicado até a conclusão do seu serviço
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1C7C64] to-[#1B3D4B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#E8C96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#E8C96A] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Montserrat']">
            Precisa de ajuda para escolher?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Nossa equipe está pronta para orientar você na escolha do serviço ideal para sua necessidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-8 py-4 bg-[#E8C96A] text-[#1B3D4B] rounded-xl hover:bg-[#d4b556] transition-all-smooth shadow-2xl hover:shadow-3xl hover:-translate-y-1 font-bold text-lg"
            >
              Falar com especialista
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all-smooth font-bold text-lg"
            >
              Acessar Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Modal de Solicitação */}
      <ServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={selectedService}
      />
    </>
  );
}
