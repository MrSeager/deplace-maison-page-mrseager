//Components
import CustomLink from "./CustomLink";

export default function NavButtons() {
    return(
        <span>
            <span className="z-10 fixed top-35 -left-10 w-[210px] h-[30px] -rotate-90">
            <CustomLink 
                href="/"
                text="Deplace Maison"
                classN="w-full h-full uppercase text-[23px]"
            />
            </span>
            <span className="z-10 fixed top-10 right-10 w-[50px] h-[25px] z-10">
            <CustomLink 
                href="/"
                text="Cart"
                classN="w-full h-full uppercase text-[15px]"
            />
            </span>
            <span className="z-0 fixed bottom-15 left-15 w-[150px] h-[75px]">
            <CustomLink 
                href="/"
                text="Shop"
                classN="w-full h-[25px] uppercase text-[15px]"
            />
            <CustomLink 
                href="/"
                text="Collections"
                classN="w-full h-[25px] uppercase text-[15px]"
            />
            <CustomLink 
                href="/"
                text="About"
                classN="w-full h-[25px] uppercase text-[15px]"
            />
        </span>
      </span>
    );
}