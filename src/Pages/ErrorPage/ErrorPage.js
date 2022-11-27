import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Error from "../../../src/Pages/assets/imgAbout/Error.jpg";
const ErrorPage = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section
      style={{
        background: `url(${Error})`,
        backgroundSize: "cover",
      }}
      className="p-10"
    >
      <div className="flex items-center justify-center h-screen p-16">
        <div className="container flex flex-col items-end justify-end px-5 mx-auto my-12">
          <h1 className="text-red-900 text-2xl  font-bold mb-10">
            Sorry, an unexpected error has occurred.
          </h1>
          <p className="text-red-600 text-4xl  mb-10">
            <i>{error.statusText || error.message}</i>
          </p>

          <div className="max-w-md text-center mb-10">
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-white-200 text-gray-900"
            >
              <button
                onClick={handleLogOut}
                className="btn btn-error hover:btn-success text-3xl"
              >
                Log Out &
                <span className="font-normal text-sm lowercase">
                  {" "}
                  back to Home
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
