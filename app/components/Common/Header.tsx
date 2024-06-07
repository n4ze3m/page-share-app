import { Link } from "@remix-run/react";

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex items-center"
          >
            <img className="h-6 w-auto" src="/logo.png" alt="Page Assist" />
            <span className="ml-1  dark:text-white text-xl font-bold">
              Page Assist
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
