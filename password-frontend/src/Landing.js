/*npm dependencies */
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from "dotenv";

/*local dependencies */
import "./Landing.css";
import axios from './axios.js';
import video from "./videos/landingvideo.mp4"
import Nav from "./Nav.js";
import About from "./About.js";
import Aware from "./Aware.js";
import Footer from "./Footer.js";


var loggedin = false;
var eresponse=[{}];

dotenv.config();

function Landing(props) {
    const [is_loggedin,setloggedin] = useState(false);
    const[err,seterrr] = useState(false);
    function responsegooglesuccess(response){
        console.log("success")
        setloggedin(true);
        eresponse = response.profileObj;
        const data = {
            unique_id : eresponse.googleId
        }
        axios.post("/register",data,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            props.history.push("/passwords");
        })
        .catch((err)=>{
            seterrr(true);
            props.history.push("/");
        });
    }
    function responsegooglefailed(err){
        console.log("failed");
        setloggedin(false);
    }
    if(is_loggedin)
    {
        loggedin=true;
    }
    else{
        loggedin=false;
    }
    return (
           <section className="landing__page" id="Landing">
                <section className="landing">
                <Nav/>
                <video autoPlay muted loop id="myVideo" playsInline>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="container">
                    <h2 className="heading">PASS<span className="special">CODES</span></h2>
                    <div className="info">
                    <p>Store all your password and userdetails here! </p>
                    <p>your passwords and usenames are encrypted </p>
                    <p>and can be accessed from anywhere </p>
                    </div>
                    <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_ID}
                    onSuccess={responsegooglesuccess}
                    onFailure={responsegooglefailed}
                    cookiePolicy={'single_host_origin'}
                    className="google-btn"
                    buttonText="sign in with google!"
                    />
                    <p class="error">{err? 'error signing in ':null}</p>
                </div>
                </section>
                <About/>
                <Aware/>
                <Footer/>
           </section>
    );
}
export default Landing;
export {loggedin,eresponse};