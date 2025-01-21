import CTA from "./components/CTA";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="px-[20px] lg:container lg:px-[20px] lg:mx-auto">
        <Features/>
        <Faq/>
        <CTA/>
        <Footer/>
      </div>
    </>
  );
}
