'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

export default function ServiceModal({ isOpen, onClose, serviceName }: ServiceModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceName,
  });

  // Reset modal quando fecha
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setCurrentStep(1);
        setIsSuccess(false);
        setFormData({ name: '', email: '', service: serviceName });
      }, 300);
    }
  }, [isOpen, serviceName]);

  // Atualiza o serviço selecionado quando o modal abre
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, service: serviceName }));
    }
  }, [isOpen, serviceName]);

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSuccess(true);
    // Aqui você poderia enviar os dados para uma API
    console.log('Dados enviados:', formData);
  };

  const handleCloseSuccess = () => {
    onClose();
  };

  // Validações por etapa
  const canProceed = () => {
    if (currentStep === 1) {
      return formData.name.trim() !== '' && formData.email.trim() !== '';
    }
    if (currentStep === 2) {
      return formData.service !== '';
    }
    return true;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Success Screen */}
              {isSuccess ? (
                <div className="p-8 md:p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                  >
                    <CheckCircle className="w-20 h-20 mx-auto text-[#1C7C64] mb-6" />
                  </motion.div>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-[#1B3D4B] mb-4 font-['Montserrat']"
                  >
                    Solicitação Enviada!
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-[#6B6B6B] mb-8 leading-relaxed"
                  >
                    Sua solicitação foi enviada com sucesso! Nossa equipe entrará em contato em breve pelo e-mail <strong className="text-[#1C7C64]">{formData.email}</strong>
                  </motion.p>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={handleCloseSuccess}
                    className="px-8 py-3 bg-[#1C7C64] text-white rounded-xl hover:bg-[#15655a] transition-all-smooth shadow-lg hover:shadow-xl font-semibold"
                  >
                    Concluir
                  </motion.button>
                </div>
              ) : (
                <>
                  {/* Header com barra de progresso */}
                  <div className="border-b border-gray-200">
                    {/* Título e botão fechar */}
                    <div className="flex items-center justify-between p-6 pb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#1B3D4B] font-['Montserrat']">
                        Inicie sua solicitação
                      </h2>
                      <button
                        onClick={onClose}
                        className="text-[#6B6B6B] hover:text-[#1B3D4B] transition-colors p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Barra de progresso animada */}
                    <div className="px-6 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#6B6B6B]">
                          Etapa {currentStep} de {totalSteps}
                        </span>
                        <span className="text-sm font-medium text-[#1C7C64]">
                          {Math.round(progressPercentage)}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercentage}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#1C7C64] to-[#E8C96A] rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo das etapas */}
                  <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                    <AnimatePresence mode="wait">
                      {/* Etapa 1: Dados pessoais */}
                      {currentStep === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-xl font-bold text-[#1B3D4B] mb-2 font-['Montserrat']">
                            Seus dados
                          </h3>
                          <p className="text-[#6B6B6B] mb-6">
                            Informe seus dados para iniciarmos o atendimento
                          </p>

                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-semibold text-[#1B3D4B] mb-2">
                                Nome completo *
                              </label>
                              <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Digite seu nome completo"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1C7C64] focus:outline-none transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-[#1B3D4B] mb-2">
                                E-mail *
                              </label>
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="seu@email.com"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1C7C64] focus:outline-none transition-colors"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Etapa 2: Escolher serviço */}
                      {currentStep === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-xl font-bold text-[#1B3D4B] mb-2 font-['Montserrat']">
                            Confirme o serviço
                          </h3>
                          <p className="text-[#6B6B6B] mb-6">
                            Qual serviço você deseja solicitar?
                          </p>

                          <div>
                            <label className="block text-sm font-semibold text-[#1B3D4B] mb-2">
                              Serviço selecionado *
                            </label>
                            <select
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1C7C64] focus:outline-none transition-colors bg-white"
                            >
                              <option value="Receita Federal / CPF">Receita Federal / CPF</option>
                              <option value="IRPF">IRPF</option>
                              <option value="MEI">MEI</option>
                              <option value="Associações e ONGs">Associações e ONGs</option>
                              <option value="Prefeituras e Protocolos">Prefeituras e Protocolos</option>
                              <option value="Contratos e Documentos">Contratos e Documentos</option>
                            </select>
                          </div>

                          <div className="mt-6 p-4 bg-[#E8C96A]/10 border border-[#E8C96A]/30 rounded-xl">
                            <p className="text-sm text-[#6B6B6B]">
                              <strong className="text-[#1B3D4B]">Dica:</strong> Após o envio, você receberá um e-mail com os próximos passos e documentos necessários.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* Etapa 3: Confirmação */}
                      {currentStep === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-xl font-bold text-[#1B3D4B] mb-2 font-['Montserrat']">
                            Revise seus dados
                          </h3>
                          <p className="text-[#6B6B6B] mb-6">
                            Confira as informações antes de enviar
                          </p>

                          <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-xl">
                              <p className="text-sm text-[#6B6B6B] mb-1">Nome</p>
                              <p className="font-semibold text-[#1B3D4B]">{formData.name}</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl">
                              <p className="text-sm text-[#6B6B6B] mb-1">E-mail</p>
                              <p className="font-semibold text-[#1C7C64]">{formData.email}</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl">
                              <p className="text-sm text-[#6B6B6B] mb-1">Serviço</p>
                              <p className="font-semibold text-[#1B3D4B]">{formData.service}</p>
                            </div>
                          </div>

                          <div className="mt-6 p-4 bg-[#1C7C64]/10 border border-[#1C7C64]/30 rounded-xl">
                            <p className="text-sm text-[#6B6B6B]">
                              <strong className="text-[#1B3D4B]">Atenção:</strong> Ao confirmar, sua solicitação será enviada para nossa equipe e você receberá uma confirmação no e-mail informado.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer com botões */}
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="flex gap-3 justify-between">
                      <button
                        onClick={currentStep === 1 ? onClose : handleBack}
                        className="px-6 py-3 border-2 border-gray-300 text-[#6B6B6B] rounded-xl hover:border-[#1B3D4B] hover:text-[#1B3D4B] transition-all-smooth font-semibold"
                      >
                        {currentStep === 1 ? 'Cancelar' : 'Voltar'}
                      </button>

                      {currentStep < totalSteps ? (
                        <button
                          onClick={handleNext}
                          disabled={!canProceed()}
                          className="px-6 py-3 bg-[#1C7C64] text-white rounded-xl hover:bg-[#15655a] transition-all-smooth disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg hover:shadow-xl"
                        >
                          Próximo
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit}
                          className="px-6 py-3 bg-gradient-to-r from-[#1C7C64] to-[#E8C96A] text-white rounded-xl hover:opacity-90 transition-all-smooth font-bold shadow-lg hover:shadow-xl"
                        >
                          Confirmar Envio
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

