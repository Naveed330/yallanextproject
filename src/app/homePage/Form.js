import React from 'react'
import './Form.css'
import Image from 'next/image'
import image from '../homePage/imaeone.gif'
const Page = () => {
    return (
        <div>
            {/* <div className="container">
                <div className="hero">
                    <form action="" className="form">
                        <h1>Login Form</h1>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required=""
                            className="input"
                            placeholder="Phone, email address or username"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required=""
                            className="input"
                            placeholder="Password"
                        />
                        <input type="submit" defaultValue="Log in" className="input submit" />
                        <p className="forgotten">
                            Forgotten your login details ? <a href="#">Get help with signing in.</a>
                        </p>
                        <div className="or">or</div>
                        <div className="input btn">Login with facebook </div>
                        <p className="signup">
                            Don't have an account ? <a href="#">SignUp</a>
                        </p>
                    </form>
                </div>
            </div> */}

            <div>
                <Image src={image}  alt='image'/>
            </div>
        </div>
    )
}

export default Page