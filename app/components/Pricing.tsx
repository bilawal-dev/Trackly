import Image from "next/image";
import Check from "../../public/assets/check.svg";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center font-medium text-2xl lg:text-[42px]">
        Flexible plans for your business
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
        No hidden fees, just straightforward pricing to help your business grow!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for exploring Trackly&#39;s features
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              0$/mo
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Explore basic business insights
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Access to core features
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Track performance and growth
              </li>
            </ul>
          </div>
          <Link href={'/login'} className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium text-center">
            Start Free Trial
          </Link>
        </div>

        <div className="w-full rounded-[8px] bg-[#4228ebc5] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Business
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
              Ideal for small businesses needing insights
            </p>

            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              500$<span className="text-[#F4F8FA]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                In-depth business performance metrics
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Customizable reporting features
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Priority customer support
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Integrations with popular business tools
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Advanced data visualization
              </li>
            </ul>
          </div>
          <Link href={'/login'} className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium text-center">
            Get Started
          </Link>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Enterprise
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              For large enterprises with complex needs
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom Pricing</h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Dedicated support for your team
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Advanced data analytics and reporting
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Custom integrations with enterprise tools
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Scalable solutions for growing teams
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Prioritized feature development and feedback
              </li>
            </ul>
          </div>
          <Link href={'/contact'} className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium text-center">
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Pricing;