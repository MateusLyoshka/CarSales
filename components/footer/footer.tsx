"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-blue-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">CarsHub</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A plataforma número 1 para compra, venda e avaliação de veículos. 
              Conectando compradores e vendedores com segurança e transparência.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-md font-semibold text-blue-900 mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Comprar Carro
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Vender Carro
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Tabela FIPE
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-md font-semibold text-blue-900 mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-md font-semibold text-blue-900 mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Phone size={18} className="text-blue-600" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Mail size={18} className="text-blue-600" />
                <span>contato@carshub.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 text-sm">
                <MapPin size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-blue-100 py-8">
          {/* Redes Sociais */}
          <div className="flex items-center justify-center mb-6">
            <span className="text-gray-600 text-sm mr-6 font-medium">Nos siga:</span>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-600 hover:text-blue-700 transition">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700 transition">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700 transition">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700 transition">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-blue-100 pt-6">
            <p className="text-gray-600 text-sm">
              © 2026 CarsHub. Todos os direitos reservados. |{" "}
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}