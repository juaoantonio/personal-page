import Image from "next/image";

export function FooterRoot() {
  const actualYear = new Date().getFullYear();
  return (
    <footer className="mt-24 flex items-center justify-center bg-background-2 py-4">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Image
          src={"/logo.svg"}
          alt="Logo João Barbosa"
          height={32}
          width={32}
          className=""
        />
        <p className="text-nowrap text-sm text-white">
          João Barbosa - {actualYear} © Todos os direitos reservados{" "}
        </p>
      </div>
    </footer>
  );
}
