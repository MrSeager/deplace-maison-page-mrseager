'use client';
//Icons
import { BsEnvelope } from "react-icons/bs";
//Components
import Link from "next/link";
import CustomLink from "./CustomLink";
//Icons
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import { FaFacebookF, FaInstagram  } from "react-icons/fa";

export default function FooterComponent() {
    return(
        <footer className="z-10 w-full min-h-[25rem] max-w-[120rem] bg-[#f9f6ec] pt-15 pb-5 px-10 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-5 lg:gap-25 uppercase">
            <div className="lg:order-1 col-span-3 hidden lg:flex flex-col me-15 gap-3">
                <h5 className="text-[17px]">Subscibe to newsletter</h5>
                <BsEnvelope size={45} />
                <p className="mt-auto text-[10px]">Subscribe to our newsletter</p>
                <form className="border-b pb-3 flex justify-between items-center">
                    <input 
                        type="mail"
                        className="w-full outline-none"
                        placeholder="email address"
                    />
                    <button
                        type="submit"
                        className="uppercase text-[15px]"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-3 col-span-2">
                <h5>Info</h5>
                <CustomLink 
                    href="/"
                    text="FAQ"
                    classN="w-full h-[33px] text-[23px]"
                />
                <CustomLink 
                    href="/"
                    text="Returns"
                    classN="w-full h-[33px] text-[23px]"
                />
                <CustomLink 
                    href="/"
                    text="Contacts"
                    classN="w-full h-[33px] text-[23px]"
                />
                <Link 
                    href={'/'}
                    className="mt-auto text-[15px]"
                >
                    Credits
                </Link>
            </div>
            <div className="order-3 md:order-3 flex flex-col gap-3 col-span-2">
                <h5>Policy</h5>
                <CustomLink 
                    href="/"
                    text="Terms"
                    classN="w-full h-[33px] text-[23px]"
                />
                <CustomLink 
                    href="/"
                    text="Privacy"
                    classN="w-full h-[33px] text-[23px]"
                />
                <CustomLink 
                    href="/"
                    text="Cookie"
                    classN="w-full h-[33px] text-[23px]"
                />
                <p className="mt-auto">2020 Deplace Maison.</p>
            </div>
            <div className="row-span-2 md:row-span-1 order-2 md:order-4 flex flex-col items-center justify-between">
                <button
                    type="button"
                    title="up"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

                    className="cursor-pointer duration-300 easy-in-out
                                hover:scale-110 hover:rotate-360"
                >
                    <LiaArrowCircleUpSolid size={100} />
                </button>
                <div className="flex gap-3 items-center">
                    <Link
                        href={'/'}
                    >
                        <FaFacebookF size={20} />
                    </Link>
                    <Link
                        href={'/'}
                    >
                        <FaInstagram size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}