'use client';
//Components
import Link from "next/link";

interface CustomLinkProps{
    href: string;
    text: string;
    classN: string;
}

export default function CustomLink({ href, text, classN }: CustomLinkProps) {
    return(
        <Link
            href={href}
            className={`${classN} flex relative group overflow-hidden font-semibold`}
        >
            <span className="absolute duration-300 ease-in-out top-0 group-hover:-top-7">{text}</span>
            <span className="absolute duration-300 ease-in-out top-7 group-hover:top-0">{text}</span>
        </Link>
    );
}