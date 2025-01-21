import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-32">
      <div className="px-[20px] lg:px-[180px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start tracking your business insights like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full py-8 justify-center gap-x-6 ">
          <Link href={'/login'} className="bg-[#0c0c0f] w-1/2 py-3 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </Link>
          <Link href={'/pricing'} className="group w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span className="">
              <Image src={BlurArrow} alt="Learn more" className="group-hover:-rotate-[30deg] duration-200" />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Easily Integrate with Major Platforms
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle  lg:grid-cols-3">
              <Image src={Google} alt="" />
              <Image src={Slack} alt="" />
              <Image src={Truspilot} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
