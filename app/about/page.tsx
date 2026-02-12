"use client";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  const team = [
    {
      name: "Carlos Silva",
      role: "CEO & Fundador",
      bio: "Empreendedor com 15 anos de experiência no mercado automotivo.",
    },
    {
      name: "Ana Costa",
      role: "Diretora de Operações",
      bio: "Especialista em logística e gestão de frotas de veículos.",
    },
    {
      name: "Pedro Oliveira",
      role: "Diretor Técnico",
      bio: "Desenvolvedor full-stack com expertise em plataformas e-commerce.",
    },
    {
      name: "Mariana Santos",
      role: "Gerente de Marketing",
      bio: "Estrategista de marketing digital e brand development.",
    },
  ];

  const values = [
    {
      title: "Confiança",
      description: "Transparência total nas transações e informações dos veículos.",
    },
    {
      title: "Qualidade",
      description: "Apenas veículos selecionados e verificados por especialistas.",
    },
    {
      title: "Inovação",
      description: "Tecnologia de ponta para facilitar compra e venda.",
    },
    {
      title: "Atendimento",
      description: "Suporte dedicado ao cliente em todas as etapas.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">Sobre CarsHub</h1>
            <p className="text-xl text-gray-600 mb-8">
              Transformando a forma como você compra e vende carros
            </p>
          </section>

          {/* Sobre a Empresa */}
          <Card className="p-8 shadow-lg mb-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Nossa História</h2>
                <p className="text-gray-700 leading-relaxed">
                  CarsHub foi fundada em 2020 com uma missão clara: revolucionar o mercado de compra e venda de
                  veículos no Brasil. Começamos como uma pequena startup com uma ideia simples - conectar compradores
                  e vendedores de forma transparente, segura e eficiente.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  Hoje, somos uma plataforma consolidada com milhares de usuários ativos, oferecendo a melhor
                  experiência digital para quem quer comprar, vender ou consultar valores de veículos. Nosso crescimento
                  rápido é reflexo da confiança que os clientes depositam em nós.
                </p>
              </div>
            </div>
          </Card>

          {/* Missão e Visão */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Fornecer uma plataforma segura, confiável e inovadora que facilite a compra e venda de veículos,
                democratizando o acesso ao mercado automotivo e criando oportunidades para todos.
              </p>
            </Card>

            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser a plataforma número 1 em tecnologia automotiva na América Latina, conhecida por excelência,
                confiabilidade e inovação, transformando a experiência de compra e venda de carros.
              </p>
            </Card>
          </div>

          {/* Valores */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition">
                  <div className="bg-blue-100 rounded-lg p-4 mb-4 text-center">
                    <h3 className="text-xl font-bold text-blue-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-700 text-center text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Estatísticas */}
          <Card className="p-8 shadow-lg mb-12 bg-blue-50 border-blue-200">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Nossa Trajetória</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600">4+</p>
                <p className="text-gray-700 mt-2">Anos de Operação</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">50K+</p>
                <p className="text-gray-700 mt-2">Usuários Cadastrados</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">10K+</p>
                <p className="text-gray-700 mt-2">Veículos Anunciados</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">R$ 500M+</p>
                <p className="text-gray-700 mt-2">Em Transações</p>
              </div>
            </div>
          </Card>

          {/* Equipe */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition text-center">
                  <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-900">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Por que Escolher CarsHub */}
          <Card className="p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Por Que Escolher CarsHub?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Plataforma Segura</h3>
                  <p className="text-gray-700">Todos os dados são criptografados e protegidos com a máxima segurança.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Verificação de Veículos</h3>
                  <p className="text-gray-700">Todos os carros passam por verificação técnica rigorosa.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Avaliação FIPE Integrada</h3>
                  <p className="text-gray-700">Consulte valores de mercado diretamente em nossa plataforma.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Suporte 24/7</h3>
                  <p className="text-gray-700">Nossa equipe está sempre disponível para ajudar você.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Transparência Total</h3>
                  <p className="text-gray-700">Sem taxas ocultas, sem surpresas, apenas total transparência.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Interface Intuitiva</h3>
                  <p className="text-gray-700">Fácil de usar para qualquer pessoa, em qualquer dispositivo.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contato */}
          <Card className="p-8 shadow-lg bg-blue-50 border-blue-200 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Entre em Contato</h2>
            <p className="text-gray-700 mb-6">
              Tem dúvidas? Quer saber mais sobre nós? Entre em contato conosco!
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:contato@carshub.com" className="text-blue-600 hover:text-blue-700">
                  contato@carshub.com
                </a>
              </p>
              <p>
                <strong>Telefone:</strong> (11) 1234-5678
              </p>
              <p>
                <strong>Endereço:</strong> São Paulo, SP - Brasil
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
