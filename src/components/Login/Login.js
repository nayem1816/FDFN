import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-page-style d-flex justify-content-center align-items-center'>
            <div className="main_div container-sm">
                <div className="title">Login Form</div>
                <div className="social_icons">
                    <Link to="#"><i className="fab fa-facebook-f"></i> <span>Facebook</span></Link>
                    <Link to="#"><i className="fab fa-twitter"></i><span>Google</span></Link>
                </div>
                <form action="#">
                    <div className="input_box">
                        <input type="text" placeholder="Enter your email" required />
                        <div className="icon"><i className="fas fa-user"></i></div>
                    </div>
                    <div className="input_box">
                        <input type="password" placeholder="Password" required />
                        <div className="icon"><i className="fas fa-lock"></i></div>
                    </div>
                    <div className="option_div">
                        <div className="check_box">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div>
                        <div className="forget_div">
                            <Link to="#">Forgot password?</Link>
                        </div>
                    </div>
                    <div className="input_box button">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="sign_up">
                        Not Link member? <Link to="/signup">Signup now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;