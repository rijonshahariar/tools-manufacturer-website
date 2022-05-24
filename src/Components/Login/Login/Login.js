import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css'
import Loading from '../../Shared/Loading/Loading'
import {
    useAuthState,
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from '../../../firebase.init'
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const emailRef = useRef("");
    const [signInWithEmailAndPassword, regUser, regLoading, error] =
        useSignInWithEmailAndPassword(auth);
    const [user, loading] = useAuthState(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const [token] = useToken(user);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || sending) {
        return <Loading></Loading>;
    }
    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);

    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent. Please check!");
        } else {
            toast("Please input your email");
        }
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-6 d-none d-md-flex bg-image"></div>
                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="display-4">Login</h3>
                                        <p className="text-muted mb-4">Enter Email and password</p>
                                        <form onSubmit={handleLogin}>
                                            <div className="form-group mb-3">
                                                <input name='email' id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input name='password' id="inputPassword" type={!showPass ? "password" : "text"} placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                            </div>
                                            <p className="text-danger fw-bold">
                                                {error ? error.message : ""}
                                            </p>
                                            <div className="row mb-4">
                                                <div className="col d-flex justify-content-center">

                                                    <div className="form-check">
                                                        <input className="form-check-input" onClick={() => setShowPass(!showPass)} type="checkbox" value="" id="form2Example31" />
                                                        <label className="form-check-label" htmlFor="form2Example31"> Show Password </label>
                                                    </div>
                                                </div>

                                                <div className="col">

                                                    <button className='btn-link btn pe-auto' onClick={resetPassword}>Reset Password</button>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary w-100 btn-block text-uppercase mb-2 rounded-pill shadow-sm">Login</button>

                                        </form>
                                        <div className="text-center">
                                            <p>Not a member? <Link className="form_link" to="/register">Register</Link></p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;