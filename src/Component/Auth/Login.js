import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import toast from "react-hot-toast";
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

    const { URL, dispatch, addUserData, user } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // user && navigate("/my-account");
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        let emailD = email;
        let passwordD = password;
        setIsLoading(true);
        postData(`${URL}api/signin`, { email: emailD, password: passwordD })
            .then(data => {
                if (data.success != false) {
                    toast.success(data.message);
                    dispatch(addUserData(data.data));
                    navigate("/my-account");
                    reset();
                } else {
                    toast.error(data.message);
                }
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
            });

    };

    async function postData(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            <div className="loginMain">

                <form onSubmit={handleSubmit(onSubmit)} className="login-box" method='POST' autoComplete="off">
                    <div className="title">
                        <h1>LOGIN</h1>
                    </div>
                    <div className="input-box">
                        <input type="text" name="email" autoComplete="off" className={`inputLogin ${errors.email && "form-control is-invalid"}`} id="username" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} onChange={(e) => setEmail(e.target.value)} />
                        <label for="username">Email</label>
                    </div>
                    {errors.email && <span className='para-sm text-white'>Please Enter a Valid Email</span>}

                    <div className="input-box">
                        <input type="password" name="password" autoComplete="off" className="input pass-input" id="password"  {...register('password', { required: true })} onChange={(e) => setPassword(e.target.value)} />
                        <img src="assets/img/view.png" className="view-pass" alt="" />
                        <label for="password">Password</label>
                    </div>
                    {/* <div className="remember-me">
                        <input type="checkbox" checked name="" id="checkbox" />
                        <label for="checkbox" className='ps-2'>Remember Me</label>
                    </div> */}
                    <button type="submit" className=''>
                        Login
                        {isLoading &&
                            <div className="spinner-border me-5" style={{ "float": "right" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }
                    </button>
                    <div className="auth-action">
                        <Link to="/register">Sign Up</Link>
                        <a href="#">Forget Password?</a>
                    </div>
                </form>
            </div>

        </motion.div>
    )
}
