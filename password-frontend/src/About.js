import React from 'react'
import './About.css';
function About() {
    return (
        <div className="Aboutpage" id="About">
            <div className="about-left">
                {/*<video autoPlay playsInline muted class="passvideo" loop>
                    <source src={Aboutvideo}/>
                </video>*/}
            </div>
            <div className="about-right">
                <div className="about-detials">
                    <h1 class="aboutheading">Pass<span class='about-special'>codes</span></h1>
                    <p class="about__description">
                        Too many passwords ?<br/>
                        Manage all your passcodes in one place.
                        Your passwords are safley encrypted using standard techniques
                        and by using self designed encryption algorithm.
                        All you need to remember is your Gmail account.
                        Just <span className="about_signin"><b>Sign in with Gmail</b></span> and access your stored passwords.
                        from any where with a click of a button.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;