import MainWindow from "@/components/MainWindow";
import Navbar from "@/components/Navbar";
import { dmSansFont, myFont } from "@/fonts";
export default function Home() {
  return (
    <div
      className={`relative min-h-screen ${dmSansFont.variable} ${myFont.variable}`}
    >
      <MainWindow />
      <Navbar />
    </div>
  );
}
