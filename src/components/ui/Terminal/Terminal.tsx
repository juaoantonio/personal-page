import { Minus, Square, X } from "lucide-react";
import Image from "next/image";
import { TerminalPrompt } from "./TerminalPrompt";

export function Terminal() {
  return (
    <div className="mt-12 flex flex-col md:flex-row md:gap-28">
      <div className="relative hidden md:block">
        <Image
          src={"/about-photo.png"}
          width={345}
          height={429}
          alt="Foto de Perfil de Lado"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex h-fit justify-between rounded-t-lg bg-[rgba(39,39,39,0.80)] px-5 pt-3">
          <div className="flex h-10 w-40 items-center justify-between rounded-t-lg bg-[#2A2C3F] px-2 sm:w-60">
            <Image
              src={"ubuntu-logo.svg"}
              width={19}
              height={19}
              alt="Ubuntu Logo"
            />
            <X size={19} className="text-white" />
          </div>
          <div className="relative bottom-1 flex items-center gap-4">
            <Minus size={22} className="text-white" />
            <Square size={16} className="text-white" />
            <X size={22} className="text-white" />
          </div>
        </div>
        <TerminalPrompt />
      </div>
    </div>
  );
}
