"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "What insights does Trackly track?",
    answer:
      "Trackly tracks a variety of business metrics, including sales, customer interactions, and overall business performance. Our platform gives you a comprehensive view of your data to help you make informed decisions and drive growth.",
  },
  {
    question: "How often does Trackly update my data?",
    answer:
      "Trackly updates your data at customizable intervals. You can set it to refresh as often as every minute to ensure you're always working with the most current information, so you never miss an important update.",
  },
  {
    question: "What happens if Trackly detects an issue in my business data?",
    answer:
      "If Trackly detects any discrepancies or issues with your business data, we’ll immediately notify you with detailed insights. Alerts will be sent through your preferred communication channels to help you address any challenges swiftly.",
  },
  {
    question: "Can I view past business performance data?",
    answer:
      "Yes, Trackly provides a complete history of your business performance. You can access reports and visualizations of trends over time to identify patterns and optimize your strategy for long-term success.",
  },
  {
    question: "How can I integrate Trackly with my existing tools?",
    answer:
      "Trackly supports integrations with a wide range of tools like Slack, Zapier, and more. You can easily sync Trackly with your current workflows to streamline your operations and ensure smooth communication across your team.",
  },
];

function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Let's clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Trackly is here to help you gain better insights and make smarter decisions for your business.
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}

export default Faq;