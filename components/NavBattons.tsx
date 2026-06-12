//Components
import CustomLink from "./CustomLink";

export default function NavButtons() {
    return(
        <span>
            <span className="scale-y-[2.5] z-10 fixed left-5 top-7 lg:top-35 lg:-left-10 w-[140px] h-[20px] md:w-[170px] md:h-[25px] lg:w-[150px] lg:h-[22px] lg:-rotate-90">
                <CustomLink 
                    href="/"
                    text="Deplace Maison"
                    classN="w-full h-full uppercase text-[15px] md:text-[20px]"
                />
            </span>
            <span className="z-10 fixed top-7 right-5 lg:top-10 lg:right-10 w-[50px] h-[25px] z-10">
                <CustomLink 
                    href="/"
                    text="Cart"
                    classN="w-full h-full uppercase text-[15px]"
                />
            </span>
            <span className="hidden z-0 lg:fixed bottom-15 left-15 w-[150px] h-[75px]">
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