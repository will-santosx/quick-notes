"use client";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Login } from "../handleSubmit";
import { useRouter } from "next/navigation";
import LoadingPage from "@/app/components/ui/AppLoading";

export default function LoginPage() {
  const [isLoading, setLoading] = useState(false);
  const [InputLoginEmail, setInputLoginEmail] = useState("");
  const [InputLoginPassword, setInputLoginPassword] = useState("");
  const Router = useRouter();

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const email = InputLoginEmail;
    const password = InputLoginPassword;

    setLoading(true);
    await Login(email, password);
    setLoading(false);
    alert("Login realizado com sucesso.");
    window.location.reload();
    Router.push("/");
  };

  return (
    <div className="flex flex-col gap-[50px]">
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <>
          <div className="text-center">
            <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
              que bom que você voltou!
            </h1>
            <span className="text-[14px] sm:text-[16px] lg:text-[20px]">
              informe suas credenciais para acessar sua conta.
            </span>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                handleFormSubmit(e);
              }}
              className="flex flex-col lg:gap-[70px] gap-[50px] w-full"
            >
              <div className="flex flex-col gap-[25px] lg:gap-[40px] items-center">
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
              <div className="flex flex-col text-center gap-3 items-center">
                <Button type="submit" title="acessar" />
                <span className="text-[13px] sm:text-[15px] lg:text-[19px]">
                  ainda não tem uma conta?{" "}
                  <Link className="font-medium underline" href={"/auth/criar"}>
                    clique aqui
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
