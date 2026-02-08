import type { LinksFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import tailwindCSS from "~/css/tailwind.css?url";
import arimoFont from "~/css/Arimo.ttf";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindCSS },
  {
    rel: "preload",
    href: arimoFont,
    as: "font",
    type: "font/ttf",
    crossOrigin: "anonymous"
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Page Assist - A Sidebar & Web UI for your Local AI"
        />
        <meta
          property="og:description"
          content="Page Assist is an open-source Chrome Extension that provides a Sidebar and Web UI for your Local AI model. It allows you to interact with your model from any webpage."
        />
        <meta property="og:image" content="/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="chat.openai.com" />
        <meta property="twitter:url" content="/og.png" />
        <meta
          name="twitter:title"
          content="Page Assist - A Sidebar & Web UI for your Local AI"
        />
        <meta
          name="twitter:description"
          content="Page Assist is an open-source Chrome Extension that provides a Sidebar and Web UI for your Local AI model. It allows you to interact with your model from any webpage."
        />
        <meta name="twitter:image" content="/og.png" />

        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-[#171717]">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
