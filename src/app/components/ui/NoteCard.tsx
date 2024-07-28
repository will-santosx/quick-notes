import { ButtonHTMLAttributes } from "react";
import { BookText } from "lucide-react";
import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  date: string;
  bg: string;
}

const convertDateTime = (isoString: string): string => {
  const date = parseISO(isoString);
  return format(date, "dd/MM/yyyy", { locale: ptBR });
};

const colorMapping: {
  [key: string]: { bg: string; border: string; color: string };
} = {
  "#3CA7FF": {
    bg: "bg-[#C4E5FF]",
    border: "border-[#3CA7FF]",
    color: "#3CA7FF",
  },
  "#FF4C3C": {
    bg: "bg-[#FFC9C4]",
    border: "border-[#FF4C3C]",
    color: "#FF4C3C",
  },
  "#7D3CFF": {
    bg: "bg-[#D8C4FF]",
    border: "border-[#7D3CFF]",
    color: "#7D3CFF",
  },
  default: { bg: "bg-[#E2FFE0]", border: "border-[#45FF3C]", color: "#45FF3C" },
};

export default function NoteCard({
  title,
  date,
  bg,
  onClick,
  ...rest
}: CardProps) {
  const {
    bg: bgColor,
    border,
    color,
  } = colorMapping[bg] || colorMapping["default"];

  return (
    <button
      className={`w-[130px] h-[130px]  md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px] ${bgColor} ${border} border-2 rounded-md flex items-center flex-col justify-between p-2`}
      onClick={onClick}
      {...rest}
    >
      <BookText
        color={color}
        className={`w-[45px] h-[45px] md:w-[65px] md:h-[65px]  lg:w-[75px] lg:h-[75px]`}
      />
      <div className="max-w-[100px]">
        <h2 className="truncate text-gray-900 font-semibold text-[15px] lg:text-[20px]">
          {title}
        </h2>
        <span className="text-[15px] text-gray-600 font-medium">
          {convertDateTime(date)}
        </span>
      </div>
    </button>
  );
}
