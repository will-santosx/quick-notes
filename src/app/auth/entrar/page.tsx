"use client";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [InputLoginEmail, setInputLoginEmail] = useState("");
  const [InputLoginPassword, setInputLoginPassword] = useState("");

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="text-center">
        <h1 className="text-[22px] font-bold">que bom que você voltou!</h1>
        <span className="text-[14px]">
          informe suas credenciais para acessar sua conta.
        </span>
      </div>
      <div>
        <form className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[25px]">
            <Input
              type="email"
              name="login-email"
              value={InputLoginEmail}
              placeholder="Email"
              onChange={(e) => setInputLoginEmail(e.target.value)}
              autoFocus
              required
            />
            <Input
              type="password"
              name="login-password"
              value={InputLoginPassword}
              placeholder="Senha"
              onChange={(e) => setInputLoginPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col text-center gap-3">
            <Button type="submit" title="acessar" />
            <span className="text-[13px]">
              ainda não tem uma conta?{" "}
              <Link className="font-medium underline" href={"/auth/criar"}>
                clique aqui
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}