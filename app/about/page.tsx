import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <AboutSection />
            <div className="px-[20px]  lg:px-[40px] lg:mx-auto">
                <Features />
                <CTA />
            </div>
            <Footer />
        </>
    );
}

const AboutSection = () => {
    return (
        <div className="pt-32 bg-gradient-to-r from-[#2842eb] to-[#73b2ff] text-white bg-[length:120%_120%] animate-gradient">
            <div className="px-[20px] lg:px-[100px] py-16">
                <h1 className="text-center text-[32px] lg:text-[64px] font-semibold leading-[72px]">
                    Discover How We Transform Your Business Insights
                </h1>
                <p className="text-center pt-6 text-[#F4F8FA] lg:text-[18px] lg:leading-7 max-w-4xl mx-auto">
                    At Trackly, we empower businesses of all sizes with the tools to make smarter, data-driven decisions.
                    Our mission is simple, to make complex data insights easy, accessible, and actionable for everyone—from startups to enterprises.
                </p>
            </div>
        </div>
    );
};