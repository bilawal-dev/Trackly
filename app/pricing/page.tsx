import CTA from "../components/CTA";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <div className="pt-28 px-[20px] lg:px-[20px] lg:mx-auto">
                <Pricing />
                <Faq />
                <CTA />
                <Footer />
            </div>
        </>
    );
}
