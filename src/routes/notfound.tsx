import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Record<string, string>;

  return (
    <div id="error-page" className="mt-10 text-center text-3xl font-bold space-y-4">
      <h1 className="text-6xl">Oops! 🥲</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="flex items-center justify-center gap-6">
        <b className="text-7xl text-red-700">{error.status || error.message}</b>
        <b>{error.statusText || error.message}</b>
      </p>
      <Link to={"/"}>
        <button className="mt-6 rounded border bg-blue-500 p-3 text-white shadow-sm">
          Go Back
        </button>
      </Link>
    </div>
  );
}
