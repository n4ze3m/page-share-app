import { Link } from "react-router";

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
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex items-center group transition-all duration-200"
          >
            <img className="h-7 w-auto group-hover:scale-110 transition-transform duration-200" src="/logo.png" alt="Page Assist" />
            <span className="ml-2 dark:text-white text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
              Page Assist
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
