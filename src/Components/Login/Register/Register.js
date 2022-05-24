import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import './Register.css'
import useToken from '../../../Hooks/useToken';
const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const [createUserWithEmailAndPassword, user1, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [errorMessage, setErrorMessage] = useState("");
    const [user] = useAuthState(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();
    if (loading || updating) {
        return <Loading></Loading>;
    }
    if (token) {
        navigate("/");
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        updateProfile({ displayName: name });
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        } else {
            setErrorMessage("Password Does Not Matched");
        }
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row no-gutter">

                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="display-4">Register</h3>
                                        <p className="text-muted mb-4">Create an account</p>
                                        <form onSubmit={handleRegister}>
                                            <div className="form-group mb-3">
                                                <input name="name" type="text" placeholder="Name" required="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input name="email" type="email" placeholder="Email address" required="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input name='password' type={!showPass ? "password" : "text"} placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input name='confirmPassword' type={!showPass ? "password" : "text"} placeholder="Confirm Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                            </div>
                                            <p className="text-danger fw-bold">
                                                {errorMessage ? errorMessage : ""}
                                                <br />
                                                {error ? error.message : ""}
                                            </p>
                                            <div className="mb-4">

                                                <div className="form-check">
                                                    <input className="form-check-input" onClick={() => setShowPass(!showPass)} type="checkbox" value="" id="form2Example31" />
                                                    <label className="form-check-label" htmlFor="form2Example31"> Show Password </label>
                                                </div>



                                            </div>

                                            <button type="submit" className="btn btn-primary w-100 btn-block text-uppercase mb-2 rounded-pill shadow-sm">Register</button>

                                        </form>
                                        <div className="text-center">
                                            <p>Already a member? <Link className="form_link" to="/login">Login</Link></p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-flex bg-image"></div>
                </div>

            </div>
        </>
    );
};

export default Login;