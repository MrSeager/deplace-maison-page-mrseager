'use client';
//Components
import { useRef } from "react";
import SectionThreeItem from "./SectionThreeItem";
//Icons
import { LiaArrowCircleRightSolid } from "react-icons/lia";

export default function SectionThree() {
    const ref = useRef<HTMLDivElement | null>(null);

    const onMouseDown = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;

        el.dataset.isDown = "true";
        el.dataset.startX = String(e.pageX - el.offsetLeft);
        el.dataset.scrollLeftStart = String(el.scrollLeft);
    };

    const onMouseLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.dataset.isDown = "false";
    };

    const onMouseUp = () => {
        const el = ref.current;
        if (!el) return;
        el.dataset.isDown = "false";
    };

    const onMouseMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;

        if (el.dataset.isDown !== "true") return;

        e.preventDefault();

        const startX = Number(el.dataset.startX);
        const scrollLeftStart = Number(el.dataset.scrollLeftStart);

        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 1.5;

        el.scrollLeft = scrollLeftStart - walk;
    };

    return(
        <div className="w-full flex flex-col gap-15 items-end py-15">
            <h2 className="flex flex-col mx-25 text-[50px] font-semibold text-base/12">
                <span className="flex items-center"><span className="font-normal text-[25px] underline me-15">Who we are</span> An independent <span className="mx-3 underline">brand</span> of</span>
                <span>urban trekking shoes and accessories</span>
                <span>that comes from a convergence of</span>
                <span>arts and personalities.</span>
            </h2>
            <div
                ref={ref}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove} 
                className="w-full overflow-x-scroll scrollbar-hide touch-pan-x cursor-grab active:cursor-grabbing"
            >
                <div className="grid grid-cols-6 gap-5 w-[150%]">
                    <div />
                    <SectionThreeItem 
                        img={'5ecf8747b314ba36a789e3c4_ct-army-side-p-500.jpeg'}
                        textOne={'SS/20'}
                        name={'Cactus'}
                        price={"€ 300 EUR"} 
                        salePrice={"€ 180 EUR"} 
                    />
                    <SectionThreeItem 
                        img={'5ed0d5b0a20c8f34cdca447c_te-sand-side-p-500.jpeg'}
                        textOne={'SS/20'}
                        name={'The eye'}
                        price={"€ 240 EUR"} 
                        salePrice={"€ 144 EUR"} 
                    />
                    <SectionThreeItem 
                        img={'5ed0ce1058516c6883c51225_du-sand-side-p-500.jpeg'}
                        textOne={'SS/20'}
                        name={'Duran'}
                        price={"€ 240 EUR"} 
                        salePrice={"€ 144 EUR"} 
                    />
                    <SectionThreeItem 
                        img={'5ed0cf7411a8b0b111096fd5_tc-black-side-p-500.jpeg'}
                        textOne={'SS/20'}
                        name={'The code'}
                        price={"€ 240 EUR"} 
                        salePrice={"€ 144 EUR"} 
                    />
                    <SectionThreeItem 
                        img={'5ed0ca93411f13ef43fe2ef2_ca-black-side-p-500.jpeg'}
                        textOne={'SS/20'}
                        name={'Carnera'}
                        price={"€ 240 EUR"} 
                        salePrice={"€ 144 EUR"} 
                    />
                </div>
            </div>
                <button
                    type="button"
                    className="cursor-pointer text-[25px] flex gap-2 items-center uppercase me-50"
                >
                    <span className="duration-300 inline-block relative group">
                        Show all
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