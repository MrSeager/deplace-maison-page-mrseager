//Components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

export default function MainComponent() {
    return(
      <main className="min-h-screen shadow-lg overflow-x-hidden w-full max-w-[120rem] flex flex-col items-center">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
    );
}