"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-blue-200 shadow-lg">
        <CardHeader className="bg-linear-to-r from-white to-blue-50 border-b border-blue-100">
          <CardTitle className="text-2xl font-bold text-blue-900">Login</CardTitle>
          <CardDescription className="text-blue-600">
            Acesse sua conta para continuar
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-400"
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10">
              Enter
            </Button>
          </form>

          <div className="mt-6 text-center space-y-3">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                Registre-se aqui
              </a>
            </p>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 block">
              Esqueceu a senha?
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
