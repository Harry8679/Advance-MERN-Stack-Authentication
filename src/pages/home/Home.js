import React from 'react'
import './Home.scss';
import loginImage from '../../assets/login.svg';

const Home = () => {
  return (
    <div>
        <section className="container hero">
            <div className="hero-text">
                <h2>Ultimate MERN Stack Authentication System</h2>
                <p>
                    Learn and Master Authentication and Authorization using MERN Stack
                </p>
                <p>
                    Implement User Registration, Login, Password Reset, Social Login, User Permissions, Email Notifications etc. Learn a lot of things with 
                    MERN Stack. It's simple to learn but with a lot of practices.
                </p>
                <div className="hero-buttons --flex-start">
                    <button className="--btn --btn-danger">Register</button>
                    <button className="--btn --btn-primary">Login</button>
                </div>
            </div>
            <div className="hero-image">
                <img src={loginImage} alt="Authentification" />
            </div>
        </section>
    </div>
  )
}

export default Home;
