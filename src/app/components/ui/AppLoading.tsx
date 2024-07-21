import { Loader, Loader2, LoaderCircle } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="w-full h-[80vh] flex flex-col gap-3 items-center justify-center">
      <Loader2 className="animate-spin xl:w-[150px] xl:h-[150px] md:w-[120px] md:h-[120px] w-[100px] h-[100px]" />
      <span className="animate-pulse md:text-[20px] xl:text-[24px]">
        Aguarde...
      </span>
    </div>
  );
}
