import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";

const SocialSignup = () => {
  const [googleSignIn, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = () => {
    googleSignIn();
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  return (
    <>
      <div className="flex flex-col w-1/2 mx-auto mt-1 border-opacity-50">
        <div className="divider">OR</div>
      </div>

      {error && (
        <p className=" mb-5 mt-[-25px] text-red-500">{error.message}</p>
      )}
      <button
        onClick={handleSignIn}
        className={` btn btn-outline btn-primary ${loading && "loading"}  w-full`}
      >
        {loading ? "" : "Continue with Google"}
      </button>
    </>
  );
};

export default SocialSignup;
