import About from "@/components/About";
import Banner from "@/components/Banner";
import HowToBuy from "@/components/HowToBuy";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
export default function Home() {
  return (
    <main className="h-full w-full bg-[url('/LooperGroup2.png')] bg-no-repeat bg-cover md:bg-contain">
      <div className="flex flex-col gap-10 md:gap-20 px-4 md:px-10">
        <Banner />
        <About />
        <HowToBuy />
        <Tokenomics />
        <FAQ />
        <Roadmap />
        <Footer />
      </div>
    </main>
  );
}
