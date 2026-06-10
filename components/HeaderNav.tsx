"use client";
//Components
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeaderNav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 50) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full max-w-[120rem] pt-5 z-10
        transition-transform duration-500 delay-75
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <Image
        src="/images/5ed0ddbec534bd9d113f6188_unisex-label.svg"
        alt="logo"
        width={80}
        height={50}
        className="mx-auto"
      />
    </header>
  );
}