"use client";

import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    return (
        <>
            <Navbar />
            <RegisterSection />
            <div className="px-[20px] lg:container lg:px-[20px] lg:mx-auto">
                <CTA />
                <Footer />
            </div>
        </>
    );
}

const RegisterSection = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false); // Track loading state

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true); // Set loading to true when submitting the form

        setTimeout(() => {
            toast.success("Account Created Successfully!");
        }, 2000);

        setTimeout(() => {
            setFormData({
                username: "",
                email: "",
                password: "",
            });
            setIsLoading(false); // Set loading to false after the process is complete
            router.push("/"); // Redirect after successful registration
        }, 3000);
    };

    return (
        <div className="pt-32 pb-16 bg-[#f1f1f1]">
            <Toaster />

            <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg max-w-md">
                <h2 className="text-2xl font-semibold text-center text-black mb-6">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-black">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-black">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                            required
                        />
                    </div>

                    {/* Show spinner when loading */}
                    <button
                        type="submit"
                        className={`w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={isLoading} // Disable the button while loading
                    >
                        {isLoading ? (
                            <div className="flex justify-center items-center">
                                <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            "Register"
                        )}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-black">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};