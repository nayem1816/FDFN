import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='login-page-style d-flex justify-content-center align-items-center'>
            <div className="main_div container-sm">
                <div className="title">Signup Form</div>
                <div className="social_icons">
                    <Link to="#"><i className="fab fa-facebook-f"></i> <span>Facebook</span></Link>
                    <Link to="#"><i className="fab fa-twitter"></i><span>Google</span></Link>
                </div>
                <form action="#">
                    <div className="input_box">
                        <input type="text" placeholder="Email" required />
                        <div className="icon"><i className="fas fa-user"></i></div>
                    </div>
                    <div className="input_box">
                        <input type="password" placeholder="Password" required />
                        <div className="icon"><i className="fas fa-lock"></i></div>
                    </div>
                    <div className="input_box">
                        <input type="password" placeholder="Confirm password" required />
                        <div className="icon"><i className="fas fa-lock"></i></div>
                    </div>
                    <div className="input_box button">
                        <input type="submit" value="Signup" />
                    </div>
                    <div className="sign_up">
                        Are You member? <Link to="/login">Login now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;