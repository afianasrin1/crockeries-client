import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RiImageAddFill } from "react-icons/ri";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
// import useToken from "../../hooks/useToken";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, Loading, setLoading } =
    useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [checkbox, setCheckbox] = useState(true);
  // show password state
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  // const [token] = useToken(createdUserEmail);
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  // if (token) {
  //   navigate("/");
  // }

  const handleSignUp = (data) => {
    // setSignUPError("");
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((img) => {
        if (img.success) {
          const image = img.data.url;

          createUser(data.email, data.password)
            .then((result) => {
              updateUser(data.name, image);
              const user = result.user;
              console.log(user);
              toast("User Created Successfully.");
            })
            .catch((error) => {
              setLoading(false);
              setSignUPError(error.message);
            });
          setSignUPError("");
        }
      });
  };

  //   createUser(data.email, data.password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       toast("User Created Successfully.");
  //       const userInfo = {
  //         displayName: data.name,
  //       };
  //       updateUser(userInfo)
  //         .then(() => {
  //           saveUser(data.name, data.email);
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setSignUPError(error.message);
  //     });
  // };

  // const saveUser = (name, email) => {
  //   const user = { name, email };
  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCreatedUserEmail(email);
  //     });
  // };

  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center sm:px-6 py-8 animationContainer mx-auto   lg:py-0">
          <div
            className={`w-full rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md customAnimation xl:p-0   border-gray-700`}
          >
            {signUpError && (
              <p className=" text-center text-red-400 font-semibold">
                {signUpError
                  .replaceAll("Firebase:", " ")
                  .replaceAll("Error", " Error:")
                  .replaceAll("(auth/", " ")
                  .replaceAll("email", "Email")
                  .replaceAll(")", "")}
              </p>
            )}
            <div className="p-6 pt-2 space-y-4 md:space-y-6 ">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign Up
              </h1>

              <form
                onSubmit={handleSubmit(handleSignUp)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                      <FaTimes /> {errors.name?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Chose your role
                  </label>
                  <select
                    id=""
                    className="bg-gray-50 border font-bold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your name"
                    {...register("role")}
                  >
                    <option value="buyer" selected>
                      Buyer
                    </option>
                    <option value="seller">Seller</option>
                  </select>
                </div>

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
                <div>
                  <label
                    htmlFor="photo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 flex-col  flex items-center font-bold  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600   w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      id="photo"
                      hidden
                      {...register("image", {
                        required: "Photo is required",
                      })}
                    />
                    <RiImageAddFill className="w-7 h-7" />
                    <h1>Upload Image </h1>
                  </label>
                  {errors.image && (
                    <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                      <FaTimes /> {errors.image?.message}
                    </p>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      onClick={() => {
                        setCheckbox(!checkbox);
                      }}
                      required
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500-300"
                    >
                      I Accept the{" "}
                      <Link
                        className="font-medium text-primary-600 hover:underline-500"
                        to="/terms"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>

                <button
                  disabled={checkbox}
                  type="submit"
                  className={
                    checkbox
                      ? "w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-400   dark:focus:ring-primary-800"
                      : "w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 dark:focus:ring-primary-800"
                  }
                >
                  Sign Up
                </button>

                <p className="text-sm font-light text-gray-500-400">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium   hover:underline  ">
                    please Login
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

export default SignUp;
