import type { MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import { Hero } from "~/components/Home/Hero";
import { Featured } from "~/components/Home/Featured";
import { Values } from "~/components/Home/Values";
import { BackgroundGradient } from "~/components/Common/BackgroundGradient";
import { Footer } from "~/components/Common/Footer";

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

export async function loader() {
  try {
    const response = await fetch("https://api.github.com/repos/n4ze3m/page-assist");
    const data = await response.json();
    return { starCount: data.stargazers_count };
  } catch (error) {
    console.error("Failed to fetch star count from GitHub API:", error);
    // Fallback to 7500 if API fails
    return { starCount: 7500 };
  }
}

export default function Index() {
  const { starCount } = useLoaderData<typeof loader>();

  return (
    <div className="isolate">
      <BackgroundGradient />
      <Hero />
      <Featured starCount={starCount} />
      <Values />
      <Footer />
    </div>
  );
}
