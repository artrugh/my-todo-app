import React from 'react';

const Login = () => (
    <section className="home">
        <div className="sign-container">
            <h3 className="contact-title">Log in!</h3>
            <form>
                <input type="email" className="form-control" placeholder="  email" />
                <input type="password" className="form-control" placeholder="  password" />
                <p className="alert"></p>
                <button type="submit" value="Send" className="sign-button">log in</button>
            </form>
        </div>
    </section>
);

export default Login;