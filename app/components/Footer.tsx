'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-[#E8C96A]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h4 className="font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Conecta Brasil</h4>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Plataforma SaaS premium para soluções burocráticas rápidas e seguras.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  CPF
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  IRPF
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  MEI
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  Prefeituras
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[#1B3D4B] mb-4 font-['Montserrat']">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B6B6B] hover:text-[#1C7C64] transition-colors">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B6B6B]">
            © 2025 <span className="text-[#1C7C64] font-semibold">Conecta Brasil®</span>. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-[#F9FAFB] rounded-full flex items-center justify-center text-[#1C7C64] hover:bg-[#1C7C64] hover:text-white transition-all-smooth"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#F9FAFB] rounded-full flex items-center justify-center text-[#1C7C64] hover:bg-[#1C7C64] hover:text-white transition-all-smooth"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#F9FAFB] rounded-full flex items-center justify-center text-[#1C7C64] hover:bg-[#1C7C64] hover:text-white transition-all-smooth"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
