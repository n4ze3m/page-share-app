import type { LoaderFunctionArgs } from "react-router"
import { useLoaderData } from "react-router"

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  const state = url.searchParams.get("state")
  const error = url.searchParams.get("error")
  const errorDescription = url.searchParams.get("error_description")

  return {
    code,
    state,
    error,
    errorDescription
  }
}

export default function McpOAuthCallback() {
  const { code, state, error, errorDescription } = useLoaderData<typeof loader>()

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
          <div className="text-red-500 text-5xl mb-4">&#10007;</div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Authorization Failed
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {errorDescription || error}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            You can close this tab and try again.
          </p>
        </div>
      </div>
    )
  }

  if (!code) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Invalid Callback
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            No authorization code received.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
        <div className="text-green-500 text-5xl mb-4">&#10003;</div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Authorization Successful
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Page Assist is completing the connection. This tab will close automatically.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          If it doesn't close, you can safely close it manually.
        </p>
      </div>
    </div>
  )
}
