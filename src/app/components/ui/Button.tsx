import { ArrowRight } from "lucide-react";

interface ButtonProps {
  title: string;
  type: "submit" | "button";
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      className="uppercase border-transparent border-2 focus:border-black focus:border-opacity-40 dark:bg-gray-800 bg-gray-400 w-full h-[45px] flex justify-between items-center p-2 rounded-md"
    >
      {props.title} <ArrowRight />
    </button>
  );
}
