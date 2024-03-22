// Frontend React Code
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import style from "../css/Login&Register.module.css"

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     // Check if user is already logged in
    //     const isLoggedIn = localStorage.getItem("isLoggedIn");
    //     if (isLoggedIn) {
    //         navigate("/home");
    //     }
    // }, [navigate]);

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/login", { email, password });
            if (res.data === "Login successful") {
                localStorage.setItem("isLoggedIn", true);
                navigate("/home", { state: { id: email } });
            } else {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }

    return (
        <div className={style.loginContainer}>
            <div className={style.formWrapper}>
                <span className={style.logo}><img src="images/login.png" alt="login" /></span>
                <span className={style.title}>Login</span>
                <form onSubmit={submit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <button type="submit">Submit</button>
                </form>
                <p>
                    You don't have an account? <Link to="/home">Register</Link>
                </p>
            </div>    
        </div>
    );
}

export function Register() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // useEffect(() => {
        // Check if user is already logged in
    //     const isLoggedIn = localStorage.getItem("isLoggedIn");
    //     if (isLoggedIn) {
    //         navigate("/home");
    //     }
    // }, [navigate]);
// 
    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/", {firstName, lastName, number, email, password, confirmPassword });
            if (res.data === "User registered successfully") {
                localStorage.setItem("isLoggedIn", true);
                navigate("/login", { state: { id: email } });
            } else {
                alert("User already exists");
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }

    return (
        <div className={style.registerContainer}>
            <div className={style.logoContainer}>
                <span className={style.logo}><img src="images/login.png" alt="login" /></span>
                <span className={style.title}>Register</span>
                <p className={style.topPara}>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
            <div className={style.formWrapper}>
                <span className={style.logo}><img src="images/login.png" alt="login" /></span>
                <span className={style.title}>Register</span>
                <form onSubmit={submit}>
                    <div className={style.inputContainer}>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="firstName" />
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="lastName" />
                        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirmPassword" />
                    </div>    
                    <button type="submit">Submit</button>
                </form>                
                <p className={style.bottomPara}>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>    
        </div>
    );
}