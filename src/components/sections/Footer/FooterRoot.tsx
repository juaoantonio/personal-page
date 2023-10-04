import Image from "next/image";

export function FooterRoot() {
  return (
    <footer className="mt-24 flex items-center justify-center bg-background-2 py-4">
      <div className="flex items-center gap-4">
        <Image
          src={"/logo.svg"}
          alt="Logo João Barbosa"
          height={32}
          width={32}
          className=""
        />
        <p className="text-sm text-white">João Barbosa ©2023</p>
      </div>
    </footer>
  );
}
