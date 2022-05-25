import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignup from "../../Components/SocialSignup";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";

const Login = () => {
  // const [authUser] = useAuthState(auth);
  const [emailAndPassLogin, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);
  const emailRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;

    await emailAndPassLogin(email, pass);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Email Sent. Please check!");
    } else {
      toast("Please input your email");
    }
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  return (
    <div className="flex justify-center min-h-screen">
      <div className=" absolute top-20 w-full max-w-lg">
        <h2 className=" text-4xl text-primary text-center my-10">Login</h2>
        <form onSubmit={handleForm}>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Your Email:</span>
            </label>
            <input
              required
              type="email"
              ref={emailRef}
              name="email"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              required
              type="password"
              name="pass"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <br />
          {error && (
            <p className=" mb-5 mt-[-25px] text-red-500">{error.message}</p>
          )}
          <button
            className={` btn btn-primary mt-10 w-full ${loading && "loading"}`}
          >
            {loading ? "" : "Login"}
          </button>
          <div>
            <p className=" mt-2">
              New to ArcTools?{" "}
              <Link className=" text-primary" to="/signup">
                Create account.
              </Link>
            </p>
            <p>Forget Password?<button className='btn-link btn pe-auto' onClick={resetPassword}>Reset Password</button> </p>
          </div>
        </form>
        <SocialSignup />
      </div>
    </div>
  );
};

export default Login;
