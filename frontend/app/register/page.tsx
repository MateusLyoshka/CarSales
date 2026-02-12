"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="grow bg-linear-to-br from-white to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-blue-200 shadow-lg">
        <CardHeader className="bg-linear-to-r from-white to-blue-50 border-b border-blue-100">
          <CardTitle className="text-2xl font-bold text-blue-900">Registre-se</CardTitle>
          <CardDescription className="text-blue-600">
            Crie sua conta no CarsHub
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Nome Completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                Confirmar Senha
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                className="border-blue-200 accent-blue-600"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Concordo com os{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  termos e condições
                </a>
              </label>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10">
              Criar Conta
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Já tem uma conta?{" "}
              <a href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                Faça login aqui
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
      </main>
      
      <Footer />
    </div>
  );
}