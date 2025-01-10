import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/home");
    };
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl text-gray-600 mt-4">
                    Oops! The page you're looking for does not exist.
                </p>
                <p className="text-lg text-gray-500 mt-2">
                    It seems you've encountered a broken link or a page that no longer exists.
                </p>
                <button
                    onClick={handleGoHome}
                    className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    )
}

export default NotFound