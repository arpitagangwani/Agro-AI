import React from 'react'
import { useNavigate } from 'react-router-dom'
import './hello.css'
import img2 from './img2.jpg'
import Cookies from 'js-cookie';


const Component = () => {
    const navigate = useNavigate()

    return (

        <body>

            <div id="wrapper">
                <div class="container">
                    <div class="navbar">
                        <div class="log-item">
                            <div class="logo-text">Agro AI</div>
                        </div>

                        <div class="nav-items">
                           {Cookies.get('loggedIn') ? "" :<div><a href="/sign-up">Sign Up</a></div>}
                            <div><a href="/login">{Cookies.get('loggedIn') !== undefined ? "Log Out" : "Log In"}</a></div>
                            <div><a href="/profit">Revenue Calculator</a></div>
                            <div><a href="/contact">Contact Us</a></div>
                            <div><a href="https://www.krishimaratavahini.kar.nic.in/department.aspx">APMC</a></div>
                        </div>

                    </div>
                    <div class="hero-section">
                        <div class="hero-section-left">
                            <div class="hero-section-heading">Agro Management System</div>
                            <div class="hero-section-description">
                                India's Agricultural prowess now enhanced with the technology of tomorrow! <br />
                                Introducing AI tools designed to minimize farmer debt, crop losses, and other discrepancies.
                            </div>
                            <button class="btn" id="btn" onClick={() => navigate("/form")}>Get Started</button>
                        </div>

                        <div class="hero-section-right">
                            <div class="user-image">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>


    )
}

export default Component