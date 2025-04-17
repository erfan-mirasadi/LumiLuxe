import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-800 text-center p-10">
      <h1 className="text-5xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Something went wrong.</p>
      <p className="italic">
        {error.statusText || error.message || "Unknown error"}
      </p>
    </div>
  );
}

export default ErrorPage;
