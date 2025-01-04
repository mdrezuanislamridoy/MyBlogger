import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100">
      <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-500">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
