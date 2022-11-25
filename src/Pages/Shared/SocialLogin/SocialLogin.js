import React, { useState } from "react";
import { useContext } from "react";
import useToken from "../../../hooks/useToken";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../contexts/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const [googleUserEmail, setGoogleUserEmail] = useState("");
  const [token] = useToken(googleUserEmail);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setGoogleUserEmail(user?.email);
      })

      .catch((error) => console.error(error));
  };
  return (
    <div>
      <p className="text-center">
        <small>Social Login</small>
      </p>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className=" w-full py-2 flex justify-center items-center gap-1 px-1 text-gray-500 border-gray-500 rounded-lg  hover:bg-gray-700 hover:text-white transition-all border"
        >
          <FcGoogle className="text-xl lg:text-2xl" />{" "}
          <span>Sign in with Google</span>
        </button>{" "}
      </div>
    </div>
  );
};
export default SocialLogin;
