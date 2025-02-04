'use client'
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface TextLinkProps extends LinkProps {
  texto: string;
  icon: ReactNode;
}

export default function MenuLink({ texto, icon, href, ...props }: TextLinkProps) {
  return (
    <div className="mx-3 text-blue-600 flex items-center gap-2">
      <Link href={href} {...props} className="flex items-center gap-2">
        {icon} {texto}
      </Link>
    </div>
  );
}
