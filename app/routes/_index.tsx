import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/Home/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Page Assist - A Sidebar & Web UI for your Local AI" },
    {
      name: "description",
      content:
        "Page Assist is an open-source Chrome Extension that provides a Sidebar and Web UI for your Local AI model. It allows you to interact with your model from any webpage.",
    },
  ];
};

export default function Index() {
  return (
    <div className="isolate">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-5rem)] -z-10 h-[10.5rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-15rem)] sm:h-[21rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D0D0D0" />
              <stop offset={1} stopColor="#A0A0A0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Hero />
    </div>
  );
}
