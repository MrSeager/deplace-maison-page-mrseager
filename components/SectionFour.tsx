"use client";
//Components
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SectionFour() {
      const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
        setShowFirst(prev => !prev);
        }, 2000); // change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return(
        <div className="w-full mb-15">
            <div className="relative grid grid-cols-2 group ms-auto me-45 w-[750px] items-center">
                <Image 
                    src={'/images/5d0b92e20369a4438cd54272_virgolette.svg'}
                    alt="logo"
                    width={150}
                    height={150}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                />
                <div className="overflow-y-hidden h-[50px] w-[350px] relative text-[40px] uppercase">
                    <h3
                        className={`absolute duration-500 ${
                            showFirst ? "-top-2" : "-top-20"
                        }`}
                    >
                        William Gibson
                    </h3>

                    <h3
                        className={`absolute duration-500 ${
                            showFirst ? "top-20" : "-top-2"
                        }`}
                    >
                        Jamie K. Cohen
                    </h3>
                </div>
                <div className="overflow-y-hidden h-[90px] w-[350px] relative">
                    <p
                        className={`absolute text-base/5 duration-500 ${
                            showFirst ? "top-0" : "-top-25"
                        }`}
                    >
                        Good things come to those who wait - Déplacé Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened.
                    </p>
                    <p
                        className={`absolute text-base/5 duration-500 ${
                            showFirst ? "top-25" : "top-0"
                        }`}
                    >
                        Déplacé Maison is a convincer for anticipation. The urban trekking as nevers seen before. An exceptional product that has no equal alongside a great team represent the brand professionally.
                    </p>
                </div>
            </div>
        </div>
    );
}