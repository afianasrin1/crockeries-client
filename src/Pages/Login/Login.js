import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <section>
        <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div
            className={`w-full rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0   border-gray-700 `}
          >
            {loginError && (
              <p className=" text-center text-red-400 font-semibold">
                {loginError
                  .replaceAll("Firebase:", " ")
                  .replaceAll("Error", " Error:")
                  .replaceAll("(auth/", " ")
                  .replaceAll("email", "Email")
                  .replaceAll(")", "")}
              </p>
            )}
            <div className="p-6 pt-2 space-y-4 md:space-y-6 ">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Login
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(handleLogin)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@example.com"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                      <FaTimes /> {errors.email?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="flex  relative items-center">
                    <input
                      type={showPassword}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                          message:
                            "password must have uppercase number & special character",
                        },
                        minLength: {
                          value: 6,
                          message: "Password should be at least 6 characters",
                        },
                      })}
                    />

                    <div
                      onClick={() => setShow(!show)}
                      className="absolute cursor-pointer right-2"
                    >
                      {show ? (
                        <FaEye
                          onClick={() => setShowPassword("password")}
                          className="text-gray-400  "
                        />
                      ) : (
                        <FaEyeSlash
                          onClick={() => setShowPassword("text")}
                          className="text-gray-400  "
                        />
                      )}
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                      {errors.password.message && <FaTimes className="mt-1" />}{" "}
                      {errors.password?.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="  h-4 w-4 border border-gray-300 rounded-sm bg-white  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label text-gray-500 inline-block  "
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link className="text-red-400">Forgot password?</Link>
                </div>

                <button
                  type="submit"
                  className="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500 -400">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium   hover:underline  "
                  >
                    Sign up
                  </Link>
                </p>
              </form>
              <div className="divider">Or</div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
