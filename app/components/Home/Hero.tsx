import { Link } from "@remix-run/react";
import { Header } from "../Common/Header";

export const Hero = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <Header/>
        <div className="relative pb-16 pt-6 sm:pb-24">
          {/* <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/">
                <span className="sr-only">Feedback Board</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/logo.png"
                  alt="Feedback Board"
                />
              </Link>
        
            </div>
          </div> */}

          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-2xl font-bold tracking-tight text-neutral-300 sm:text-6xl">
                  A <span className="text-indigo-600">Sidebar & Web UI</span>{" "}
                  for your Local AI.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-500">
                  Page Assist is an open-source Chrome Extension that provides a
                  Sidebar and Web UI for your Local AI model. It allows you to
                  interact with your model from any webpage.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="https://chromewebstore.google.com/detail/page-assist-a-web-ui-for/jfgfiigpkhlkbnfnbobbkinehhfdhndo"
                    target="_blank"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-0.5 mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M21.17 8L12 8"></path>
                      <path d="M3.95 6.06L8.54 14"></path>
                      <path d="M10.88 21.94L15.46 14"></path>
                    </svg>
                    Install Now
                  </a>
                  <a
                    href="https://github.com/n4ze3m/page-assist"
                    target="_blank"
                    className="inline-flex items-center text-base font-semibold leading-7 text-neutral-300"
                  >
                    Star on GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <iframe
                className="yt-video relative mx-auto mt-12 w-full max-w-4xl rounded-3xl border border-gray-300 shadow-2xl dark:border-gray-700 lg:mt-20"
                src="https://www.youtube.com/embed/8VTjlLGXA4s"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                height="450"
              />

              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                >
                  <path
                    fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
