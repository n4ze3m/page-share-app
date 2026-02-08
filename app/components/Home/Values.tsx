export const Values = () => {
  const values = [
    {
      title: "Always Free",
      description: "Page Assist will always remain completely free to use. No hidden costs, no premium tiers, no subscriptions.",
    },
    {
      title: "Open Source",
      description: "Built in the open with transparency. Anyone can inspect, modify, and contribute to the codebase.",
    },
    {
      title: "100% Privacy Friendly",
      description: "Your data stays yours. We don't track, collect, or sell your information. Complete privacy guaranteed.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6">
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight dark:text-neutral-300 sm:text-5xl">
                Our Commitment
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Built with your freedom and privacy in mind
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-800/30 hover:from-indigo-50/50 dark:hover:from-indigo-950/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="mt-6 flex flex-col flex-1">
                    <p className="text-xl font-bold dark:text-neutral-300">
                      {value.title}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
