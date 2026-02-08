interface FeaturedProps {
  starCount: number;
}

export const Featured = ({ starCount }: FeaturedProps) => {
  const articles = [
    {
      name: "ZDNet",
      logo: "/featured/zdnet.png",
      url: "https://www.zdnet.com/article/how-to-run-local-llm-as-browser-based-ai-with-this-free-extension/",
      title: "How to run local LLM as browser-based AI with this free extension",
    },
    {
      name: "It's FOSS",
      logo: "/featured/itsfoss.webp",
      url: "https://itsfoss.com/open-source-chrome-extensions/",
      title: "Open Source Chrome Extensions",
    },
    {
      name: "Windows Central",
      logo: "/featured/windowscentral.png",
      url: "https://www.windowscentral.com/artificial-intelligence/i-tried-replace-my-favorite-copilot-feature-with-local-ai",
      title: "I tried to replace my favorite Copilot feature with local AI",
    },
  ];

  const academic = [
    {
      name: "arXiv",
      logo: "/featured/arxiv.png",
      url: "https://arxiv.org/abs/2507.23399",
      title: "Beyond the Cloud: Assessing the Benefits and Drawbacks of Local LLM Deployment for Translators",
    },
    {
      name: "Springer",
      logo: "/featured/springer.png",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-94809-1_3",
      title: "AI Tools and Technologies for Academic Research",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-12">
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Stats Section */}
            <div className="mx-auto max-w-5xl text-center mb-24">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-800/30 hover:from-indigo-50/50 dark:hover:from-indigo-950/30 transition-all duration-300 hover:scale-105">
                  <p className="text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-7xl">
                    380K+
                  </p>
                  <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-neutral-200">
                    Total Downloads
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Across Chrome, Firefox & Edge
                  </p>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-800/30 hover:from-indigo-50/50 dark:hover:from-indigo-950/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-7xl">
                      4.7
                    </p>
                    <svg
                      className="h-12 w-12 text-yellow-400 sm:h-14 sm:w-14"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-neutral-200">
                    Average Rating
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Across all platforms
                  </p>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-800/30 hover:from-indigo-50/50 dark:hover:from-indigo-950/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-7xl">
                      {(starCount / 1000).toFixed(1)}K
                    </p>
                    <svg
                      className="h-12 w-12 text-yellow-400 sm:h-14 sm:w-14"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-neutral-200">
                    GitHub Stars
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Open source community
                  </p>
                </div>
              </div>
            </div>

            {/* Media Publications */}
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight dark:text-neutral-300 sm:text-5xl">
                Featured In
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Page Assist has been featured in leading tech publications
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
              {articles.map((article) => (
                <a
                  key={article.name}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-800/30 hover:from-indigo-50/50 dark:hover:from-indigo-950/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex h-20 items-center justify-center">
                    <img
                      src={article.logo}
                      alt={article.name}
                      className="max-h-16 w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-6 flex flex-col flex-1">
                    <p className="text-base font-semibold dark:text-neutral-300">
                      {article.name}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {article.title}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    Read article
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Academic Research */}
            <div className="mx-auto max-w-2xl text-center mt-32">
              <h2 className="text-3xl font-bold tracking-tight dark:text-neutral-300 sm:text-5xl">
                Cited in Academic Research
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Page Assist has been referenced in academic publications
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
              {academic.map((paper) => (
                <a
                  key={paper.name}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-800/30 hover:from-indigo-50/50 dark:hover:from-indigo-950/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex h-20 items-center justify-center">
                    <img
                      src={paper.logo}
                      alt={paper.name}
                      className="max-h-16 w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-6 flex flex-col flex-1">
                    <p className="text-base font-semibold dark:text-neutral-300">
                      {paper.name}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {paper.title}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    Read paper
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
