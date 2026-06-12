//Components
import Image from "next/image";
import SectionOneItem from "./SectionOneItem";
//Icons
import { LiaArrowCircleRightSolid } from "react-icons/lia";

export default function SectionOne() {
    return(
        <div className="w-full pt-50 pb-20 px-3 lg:px-50 flex flex-col gap-5 items-center lg:items-end">
            <div className="flex flex-col uppercase text-end">
                <h1 className="w-full font-bold text-[75px] md:text-[150px] text-base/20 md:text-base/35">Spring,</h1>
                <div className="flex justify-end">
                    <h1 className="font-bold text-[75px] md:text-[150px] text-base/20 md:text-base/35">Summer</h1>
                    <h1 className="font-semibold text-[20px] md:text-[30px] text-base/5 md:text-base/8 mt-3">Coll.<br />2021</h1>
                </div>
            </div>
            <div className="flex gap-5 md:w-[80%] ms-auto relative">
                <SectionOneItem 
                    img={'5ede27e188219c6c4ab2af6b_man-default-p-800.jpeg'}
                    textOne={'(01)'}
                    textTwo={'MEN'}
                />
                <SectionOneItem 
                    img={'5ede29ef88219c8178b2be22_women-default-p-800.jpeg'}
                    textOne={'(02)'}
                    textTwo={'WMNS'}
                />
                <Image 
                    src={'/images/equals_PNG34.png'}
                    alt="img"
                    width={300}
                    height={300}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75"
                />
            </div>
            <button
                type="button"
                className="ms-auto cursor-pointer text-[25px] flex gap-2 items-center uppercase mt-10"
            >
                <span className="duration-300 inline-block relative group">
                    Explore
                    <span
                        className="absolute bottom-0 right-0 h-0.5 w-0 bg-black
                                transition-all duration-300
                                group-hover:w-full group-hover:left-0"
                    />
                </span>
                <LiaArrowCircleRightSolid 
                    size={60} 
                    className="duration-500 hover:-rotate-360 hover:scale-110"
                />
            </button>
        </div>
    );
}