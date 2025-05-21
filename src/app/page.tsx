import Background from "@/components/Background";
import MainWindow from "@/components/MainWindow";
import Navbar from "@/components/Navbar";
import { dmSansFont, myFont } from "@/fonts";

export default function Home() {
  return (
    <div
      className={`relative min-h-screen ${dmSansFont.variable} ${myFont.variable} bg-[#A7D5FF]`}
    >
      <Background />
      <MainWindow />
      <Navbar />
    </div>
  );
}
