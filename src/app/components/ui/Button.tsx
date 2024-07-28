import { logOut } from "@/utils/logOut";
import { ArrowRight, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
}

interface WarningButtonProps {
  title: string;
  type: "submit" | "button";
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="uppercase border-transparent border-2 sm:h-[55px] sm:text-[16px] lg:w-[70%] lg:text-[18px] lg:h-[65px] focus:border-black focus:border-opacity-40 dark:bg-gray-800 bg-gray-400 w-full h-[45px] flex justify-between items-center p-2 rounded-md"
    >
      {props.title}
      {!props.icon && <ArrowRight />}
      {props.icon && props.icon}
    </button>
  );
}

export function LogoutButton(props: WarningButtonProps) {
  const router = useRouter();

  return (
    <button
      type={props.type}
      onClick={() => {
        logOut();
        window.location.reload();
        router.push("/");
      }}
      className="uppercase border-transparent border-2 sm:h-[55px] sm:text-[16px] lg:w-[70%] lg:text-[18px] lg:h-[65px] focus:border-black focus:border-opacity-40 bg-red-400 w-full h-[45px] flex justify-between items-center p-2 rounded-md"
    >
      {props.title} <LogOut />
    </button>
  );
}
