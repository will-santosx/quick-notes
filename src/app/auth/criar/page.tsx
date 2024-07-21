"use client";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Link from "next/link";
import { useState } from "react";

export default function RegiterPage() {
  const [InputRegisterName, setInputRegisterName] = useState("");
  const [InputRegisterEmail, setInputRegisterEmail] = useState("");
  const [InputRegisterPassword, setInputRegisterPassword] = useState("");

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="text-center">
        <h1 className="text-[22px] font-bold">seja bem vindo &#40;a&#41;!</h1>
        <span className="text-[14px]">
          para prosseguir precisamos de algumas informações.
        </span>
      </div>
      <div>
        <form className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[25px]">
            <Input
              type="text"
              name="register-name"
              value={InputRegisterName}
              placeholder="Nome"
              onChange={(e) => setInputRegisterName(e.target.value)}
              required
              autoFocus
            />
            <Input
              type="email"
              name="register-email"
              value={InputRegisterEmail}
              placeholder="Email"
              onChange={(e) => setInputRegisterEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              name="register-password"
              value={InputRegisterPassword}
              placeholder="Senha"
              onChange={(e) => setInputRegisterPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col text-center gap-3">
            <Button type="submit" title="acessar" />
            <span className="text-[13px]">
              já tem uma conta?{" "}
              <Link className="font-medium underline" href={"/auth/entrar"}>
                clique aqui
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
