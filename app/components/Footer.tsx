import Image from "next/image";
import Link from "next/link"; // Import Link component

import Logo from "../../public/assets/Logo.svg";

const Footer = () => {
  return (
    <div className="pt-[30px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image src={Logo} alt="Logo" />
        <p className="font-bold text-[#36485C] text-[17px]">Trackly</p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li>
          <Link className="hover:border-b-2 border-slate-300" href="/">Home</Link>
        </li>
        <li>
          <Link className="hover:border-b-2 border-slate-300" href="/about">About</Link>
        </li>
        <li>
          <Link className="hover:border-b-2 border-slate-300" href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link className="hover:border-b-2 border-slate-300" href="/contact">Contact</Link>
        </li>
        <li>
          <Link className="hover:border-b-2 border-slate-300" href="/register">Register</Link>
        </li>
        <li>
          <Link className="hover:border-b-2 border-slate-300" href="/login">Login</Link>
        </li>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2025 - Trackly || All rights reserved by - Trackly Inc.
      </p>
    </div>
  );
};

export default Footer;