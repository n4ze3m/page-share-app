import { type LoaderFunctionArgs, type MetaFunction, data } from "react-router";
import { useLoaderData, isRouteErrorResponse, useRouteError, Link, useNavigation } from "react-router";
import { Header } from "~/components/Common/Header";
import { Messages } from "~/components/Share/Messages";
import { BackgroundGradient } from "~/components/Common/BackgroundGradient";
import { db } from "~/db/client.server";
import { chat } from "~/db/schema";
import { eq } from "drizzle-orm";

export const meta: MetaFunction<typeof loader> = ({ data: loaderData }) => {
  return [
    {
      title: loaderData?.title || "Page Assist - Shared Chat",
    },
    {
      name: "description",
      content: loaderData?.title ? `View shared chat: ${loaderData.title}` : "View shared chat from Page Assist",
    },
  ];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { slug } = params;

  if (!slug) {
    throw new Response(null, {
      status: 400,
      statusText: "Bad Request",
    });
  }

  const [chatData] = await db
    .select()
    .from(chat)
    .where(eq(chat.id, slug))
    .limit(1);

  if (!chatData) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return data({
    title: chatData.title,
    created_at: chatData.createdAt,
    messages: chatData.messages,
  });
}

export function headers() {
  return {
    "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
  };
}

export default function SharePage() {
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="isolate" style={{ fontFamily: 'Arimo, sans-serif !important' }}>
      <BackgroundGradient />
      <Header />
      <div className="flex flex-col mt-14 sm:mt-6 max-h-screen">
        <div className="flex-grow flex-1">
          <div className="mx-auto max-w-4xl p-6 lg:px-8">
            <div className="border-b dark:border-gray-500 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8">
              <h1 className="text-3xl font-semibold line-clamp-1 leading-tight dark:text-white sm:text-4xl">
                {isLoading ? (
                  <span className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded h-10 block" />
                ) : (
                  data?.title
                )}
              </h1>
            </div>
            {isLoading ? (
              <div className="space-y-4 mt-6">
                <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded h-20" />
                <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded h-20" />
              </div>
            ) : (
              <Messages messages={(data?.messages as any[]) || []} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="isolate min-h-screen flex items-center justify-center bg-white dark:bg-[#171717]">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {error.status}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {error.status === 404
              ? "This shared chat could not be found."
              : error.statusText || "Something went wrong"}
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="isolate min-h-screen flex items-center justify-center bg-white dark:bg-[#171717]">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Oops!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          An unexpected error occurred.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
