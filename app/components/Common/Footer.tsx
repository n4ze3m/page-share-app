export const Footer = () => {
  return (
    <footer className="relative overflow-hidden mt-24 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3 max-w-3xl mx-auto">
          {/* Documentation */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-neutral-200">
              Documentation
            </h3>
            <p className="mt-2">
              <a
                href="https://docs.pageassist.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
                View Docs
              </a>
            </p>
          </div>

          {/* Privacy Policy */}
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-neutral-200">
              Privacy Policy
            </h3>
            <p className="mt-2">
              <a
                href="https://docs.pageassist.xyz/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                View Privacy
              </a>
            </p>
          </div>

          {/* Community */}
          <div className="text-center sm:text-right">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-neutral-200">
              Community
            </h3>
            <p className="mt-2">
              <a
                href="https://discord.gg/bu54382uBd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200 hover:scale-105 transform"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord
              </a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-900 dark:text-neutral-200 mb-2">
              MIT Licensed Open Source Project
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://twitter.com/n4ze3m"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
              >
                Muhammed Nazeem (@n4ze3m)
              </a>
              {" & "}
              <a
                href="https://github.com/n4ze3m/page-assist/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
              >
                Page Assist Contributors
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
