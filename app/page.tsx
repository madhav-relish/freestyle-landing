import BackedBy from "@/components/BackedBy";
import BottomSection from "@/components/BottomSection";
import CodeDemo from "@/components/codedemo/CodeDemo";
import Deployement from "@/components/Deployement";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BackedBy />
      <CodeDemo />
      <Deployement />
      <BottomSection />
    </>
  );
}
