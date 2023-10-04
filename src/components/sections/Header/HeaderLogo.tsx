import Image from "next/image";
import Link from "next/link";

export function HeaderLogo({ ...rest }) {
  return (
    <div {...rest}>
      <Link href="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/logo.svg" alt="João Barbosa Logo" width={48} height={48} />
      </Link>
    </div>
  );
}
