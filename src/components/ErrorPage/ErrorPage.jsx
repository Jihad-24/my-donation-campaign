import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-center ">
                <h1 className="text-6xl ">404</h1>
                <h1 className="text-xl">Oops! Something went wrong.</h1>
                <p className="text-xl">We're sorry, but an error occurred while processing your request.</p>
                <p className="text-xl">Please try the following:</p>
                <ul>
                    <li className="text-xl">Check your internet connection.</li>
                    <li className="text-xl">Refresh the page. <span className="font-semibold text-md bg-orange-200 px-2 rounded">  <Link to="/">Refresh</Link></span> </li>
                    <li className="text-xl">Contact our support team if the issue persists.</li>
                </ul>
            </div>

        </div>
    );
};

export default ErrorPage;