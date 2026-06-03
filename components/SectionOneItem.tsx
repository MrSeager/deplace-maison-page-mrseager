//Components
import Image from "next/image";

interface SectionOneItemProps {
    img: string; 
    textOne: string; 
    textTwo: string; 
}

export default function SectionOneItem({ img, textOne, textTwo }: SectionOneItemProps) {
    return(   
        <div className="flex flex-col">
            <Image 
                src={'/images/' + img}
                alt="img"
                width={800}
                height={1132}
                className="border border-black border-3"
            />
            <div className="flex justify-between font-semibold">
                <p>{textOne}</p>
                <p>{textTwo}</p>
                <span />
            </div>
        </div>
    );
}