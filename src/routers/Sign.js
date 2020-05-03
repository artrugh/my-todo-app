import React from 'react';

const Sign = () => (
    <section className="home">
        <div className="sign-container">
            <h3 className="contact-title">Create your account!</h3>
            <form>
                <div className="lebels">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="  name" />
                        <p></p>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="  email" />
                        <p></p>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="  password" />
                        <p />
                    </div>
                </div>
                <button type="submit" value="Send" className="sign-button">sign up</button>
            </form>
        </div>
    </section>
);

export default Sign;

