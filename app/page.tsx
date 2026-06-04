//Components
import HeaderNav from "@/components/HeaderNav";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center min-h-display bg-[#fcf9ee]">
      <HeaderNav />
      <MainComponent />
    </div>
  );
}
