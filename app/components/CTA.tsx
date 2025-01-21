import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[30px] lg:py-[50px] ">
      <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px] ">
        Track Your Business Growth in Real-Time
      </h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">
        Join 800+ businesses optimizing their performance with Trackly.
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <Link href={'/login'} className="py-[12px] px-[32px] bg-white rounded-[4px] text-pink-500 w-fit font-medium">
          Start Free Trial
        </Link>

        <Link href={'/contact'} className="group inline-flex w-full items-center justify-center font-medium gap-x-3 mt-[32px] text-white lg:w-fit lg:mt-0">
          Contact Sales{" "}
          <Image src={Arrow} alt="Learn More" className="group-hover:-rotate-[30deg] duration-200" />
        </Link>
      </div>
    </div>
  );
}

export default CTA;