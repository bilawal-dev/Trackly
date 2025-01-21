"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactPage() {
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setFormData({
            name: "",
            email: "",
            message: "",
        })

        toast.success("Message sent successfully!");
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <>
            <Navbar />
            <Toaster />
            <ContactSection />
            <ContactForm formData={formData} handleChange={handleChange} formSubmit={formSubmit} />
            <div className="px-[20px] lg:px-[20px] lg:mx-auto">
                <CTA />
            </div>
            <Footer />
        </>
    );
}

const ContactSection = () => {
    return (
        <div className="pt-32 pb-20 bg-gradient-to-r from-fuchsia-500 to-red-500 text-white bg-[length:120%_120%] animate-gradient">
            <div className="px-[20px] lg:px-[100px] py-16">
                <h1 className="text-center text-[32px] lg:text-[64px] font-semibold leading-[72px]">
                    Get In Touch with Trackly
                </h1>
                <p className="text-center pt-6 text-[#F4F8FA] lg:text-[18px] lg:leading-7 max-w-4xl mx-auto">
                    We&#39;d love to hear from you! Whether you're a current customer or new to Trackly, our team is ready to assist you with any questions or inquiries. Reach out to us and let's discuss how we can help your business succeed.
                </p>
            </div>
        </div>
    );
};

const ContactForm = ({ formData, handleChange, formSubmit }: any) => {
    return (
        <div className="bg-white text-white">
            <div className="container mx-auto px-6 lg:px-32 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-1 max-w-xl mx-auto gap-16 items-center">
                    <div className="bg-white p-8">
                        <h2 className="text-[28px] lg:text-[36px] font-semibold text-[#172026] mb-6">
                            Let's Get in Touch!
                        </h2>
                        <form className="space-y-6 text-[#172026]" onSubmit={formSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="w-full mt-2 p-4 border-2 border-slate-300 bg-white focus:outline-none transition duration-300 ease-in-out peer"
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute left-4 top-6 text-[#6B7280] bg-white px-1 transition-all duration-300 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base ${
                                        formData.name ? "top-0 text-sm text-blue-500" : ""
                                    }`}
                                >
                                    Full Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="w-full mt-2 p-4 border-2 border-slate-300 bg-white focus:outline-none transition duration-300 ease-in-out peer"
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute left-4 top-6 text-[#6B7280] bg-white px-1 transition-all duration-300 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base ${
                                        formData.email ? "top-0 text-sm text-blue-500" : ""
                                    }`}
                                >
                                    Email Address
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                    rows={6}
                                    className="w-full mt-2 p-4 border-2 border-slate-300 bg-white focus:outline-none transition duration-300 ease-in-out peer"
                                />
                                <label
                                    htmlFor="message"
                                    className={`absolute left-4 top-6 text-[#6B7280] bg-white px-1 transition-all duration-300 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base ${
                                        formData.message ? "top-0 text-sm text-blue-500" : ""
                                    }`}
                                >
                                    Your Message
                                </label>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="mt-6 py-3 px-8 w-full bg-gradient-to-r from-[#1D4ED8] to-[#4C6EF5] text-white text-lg font-medium shadow-lg hover:bg-gradient-to-l hover:shadow-xl transition-all duration-300 ease-in-out"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};