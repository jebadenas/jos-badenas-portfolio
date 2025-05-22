import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import WindowMaster from "@/components/WindowMaster";
import { dmSansFont, myFont } from "@/fonts";

export default function Home() {
  return (
    <div
      className={`select-none relative min-h-screen ${dmSansFont.variable} ${myFont.variable} bg-[#A7D5FF]`}
    >
      <span>{`note jos badenas is still working on this project so it is super broken :d`}</span>

      <Background />
      <WindowMaster />
      <Navbar />
    </div>
  );
}
