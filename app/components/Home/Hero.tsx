import { Link } from "react-router";
import { Header } from "../Common/Header";
import {ChromeIcon} from "lucide-react";

export const Hero = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <Header/>
        <div className="relative pb-16 pt-6 sm:pb-24">
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight dark:text-neutral-300 sm:text-6xl lg:text-7xl">
                  A <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Sidebar & Web UI</span>{" "}
                  for your Local AI.
                </h1>
                <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                  Page Assist is an open-source Browser Extension that provides a
                  Sidebar and Web UI for your Local AI model. It allows you to
                  interact with your model from any webpage.
                </p>
                <div className="mt-12 flex items-center justify-center gap-x-8">
                  <a
                    href={
                      typeof  window !== 'undefined' && window.navigator.userAgent.includes("Chrome") ? "https://chromewebstore.google.com/detail/page-assist-a-web-ui-for/jfgfiigpkhlkbnfnbobbkinehhfdhndo"
                          : "https://addons.mozilla.org/en-US/firefox/addon/page-assist/"
                    }
                    target="_blank"
                    className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-indigo-700 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
                  >
                    {typeof window !== 'undefined' && window.navigator.userAgent.includes("Chrome") ? <svg
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
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                  className="-ml-0.5 mr-2 h-4 w-4" fill="none" stroke="currentColor"
                    >
                      <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"

                          d="M3.2 4.6C6.5.7 11.9-.6 16.6 1.4M23.5 12c0 6.4-5.1 11.5-11.4 11.6C5.7 23.6.6 18.5.5 12.2c0-2 .5-4 1.5-5.7-.8-1.4-.6-3 .5-4 .1.7.3 1.5.7 2.1.3.6.6.9.8.9.8-.1 1.7-.1 2.5 0 .4-.5 1.4-2 3-2-.9.9-3.4 4 1 4h1l-3 2s.3.7 0 1c-.4-.4-2 .4-2 1.5s1.2 2.5 3.5 2.5 1.8-1 3-1c.7-.1 1.3.4 1.5 1-1.7 0-3 2-5 2 .8.7 1.9 1.1 3 1 3.3 0 6-2.7 6-6 0-1.3-.4-2.5-1.2-3.6 1.4 1 2.2 2.6 2.4 4.3.2-.7.3-1.5.3-2.2 0-3-1.2-7-3.4-8.5 4.2 1.8 6.9 5.9 6.9 10.5z"
                      ></path>
                    </svg>}
                    Install Now
                  </a>
                  <a
                      href="https://github.com/n4ze3m/page-assist"
                      target="_blank"
                      className="inline-flex items-center text-base font-semibold leading-7 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
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
                className="yt-video relative mx-auto mt-12 w-full max-w-4xl rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 lg:mt-20 transition-shadow hover:shadow-indigo-500/20"
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
