//Components
import Image from "next/image";

interface SectionThreeItemProps {
    img: string;
    textOne: string;
    name: string;
    price: string;
    salePrice?: string;
}

export default function SectionThreeItem({ img, textOne, name, price, salePrice }: SectionThreeItemProps) {
    return(
        <div className="flex flex-col bg-[#e7d6c4] border border-2 p-3 items-center">
            <div className="h-[275px] overflow-hidden">
                <Image 
                    src={'/images/' + img}
                    alt="img"
                    width={500}
                    height={500}
                    className="object-cover"
                />
            </div>
            <Image 
                src={'/images/5ed0ddbec534bd9d113f6188_unisex-label.svg'}
                alt="logo"
                width={75}
                height={35}
            />
            <h3 className="text-[13px]">{textOne}</h3>
            <h3 className="font-bold text-[50px] uppercase">{name}</h3>
            <h3 className={`${salePrice ? 'line-through' : ''} text-[25px]`}>{price}</h3>
            <h3 className="text-[35px]">{salePrice}</h3>
        </div>
    );
}