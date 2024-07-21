"use client";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Register } from "../handleSubmit";
import { useRouter } from "next/navigation";

export default function RegiterPage() {
  const [InputRegisterName, setInputRegisterName] = useState("");
  const [InputRegisterEmail, setInputRegisterEmail] = useState("");
  const [InputRegisterPassword, setInputRegisterPassword] = useState("");
  const Router = useRouter();

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const name = InputRegisterName;
    const email = InputRegisterEmail;
    const password = InputRegisterPassword;

    const res = await Register(name, email, password);
    if (res) {
      alert("Conta criada com sucesso! Agora, faça seu login.");
      window.location.reload();
      Router.push("/auth/entrar");
    }
  };

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="text-center">
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
          seja bem vindo &#40;a&#41;!
        </h1>
        <span className="text-[14px] sm:text-[16px] lg:text-[20px]">
          para prosseguir precisamos de algumas inforamções.
        </span>
      </div>
      <div>
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="flex flex-col lg:gap-[70px] gap-[50px] w-full"
        >
          <div className="flex flex-col gap-[25px] lg:gap-[40px] items-center">
            <Input
              type="text"
              name="register-nome"
              value={InputRegisterName}
              placeholder="Nome"
              onChange={(e) => setInputRegisterName(e.target.value)}
              autoFocus
              required
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
          <div className="flex flex-col text-center gap-3 items-center">
            <Button type="submit" title="acessar" />
            <span className="text-[13px] sm:text-[15px] lg:text-[19px]">
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
