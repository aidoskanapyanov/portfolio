// tailwind css page 404
export default function Page404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl font-medium">Page not found.</p>
      <p className="mt-4">
        <a
          href="/"
          className="transition ease-in duration-200 text-blue-600 hover:underline"
        >
          Go back home
        </a>
      </p>
    </div>
  );
}
