import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Header } from "~/components/Common/Header";
import { Messages } from "~/components/Share/Messages";
import { prisma } from "~/db.server";
import { ClientOnly } from "remix-utils/client-only";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: data?.title,
    },
  ];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { slug } = params;

  const chat = await prisma.chat.findFirst({
    select: {
      created_at: true,
      messages: true,
      title: true,
    },
    where: {
      id: slug,
    },
  });

  if (!chat) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return json({
    title: chat.title,
    created_at: chat.created_at,
    messages: chat.messages,
  });
}

export default function Index() {
  const { title, created_at, messages } = useLoaderData<typeof loader>();

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
      <Header />
      <div className="flex flex-col mt-14 sm:mt-6 max-h-screen">
        <div className="flex-grow flex-1">
          <div className="mx-auto max-w-4xl p-6 lg:px-8">
            <div className="border-b border-gray-500 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8">
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {title}
              </h1>
              <div className="pt-3 text-base text-gray-400 sm:pt-4">
                <p>{new Date(created_at).toLocaleString()}</p>
              </div>
            </div>

            <Messages messages={(messages as any[]) || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
