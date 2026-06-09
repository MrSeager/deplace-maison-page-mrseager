//Components
import HeaderNav from "@/components/HeaderNav";
import MainComponent from "@/components/MainComponent";
import FooterComponent from "@/components/FooterComponent";

export default function Home() {
  return (
    <div className="select-none relative flex flex-col flex-1 items-center justify-center min-h-display bg-[#fcf9ee]">
      <HeaderNav />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}
