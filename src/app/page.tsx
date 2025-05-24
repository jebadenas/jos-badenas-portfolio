import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WindowMaster from "@/components/WindowMaster";
import { dmSansFont, myFont } from "@/fonts";

export default function Home() {
  return (
    <div
      className={`select-none relative min-h-screen ${dmSansFont.variable} ${myFont.variable}`}
    >
      <span className="text-black absolute top-0 left-0">{`note: jos badenas is still working on this project so it is super broken :d`}</span>
      <Navbar />
      <Background />
      <WindowMaster />
      <Footer />
    </div>
  );
}
