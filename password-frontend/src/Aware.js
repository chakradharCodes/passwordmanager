import React from 'react'
import "./Aware.css"
function Aware() {
    return (
        <div className="aware" id="Aware">
            <div className="aware_left">
                <h1 class="aware_heading_primary">Is your <span class="aware_heading_special">Password</span> secure?</h1>
                <p class="aware_description">
                    A password of length 8 can be hacked in few hours 
                    but a password of length 10 containing all lower upper casing
                    along with numbers take years to crack.
                    <div className="aware_example">
                        <p>12345</p>
                        <p>123456789</p>
                        <p>picture1</p>
                        <p>password</p>
                        <p>123345678</p>
                        <p>111111</p>
                        <p>123123</p>
                        <p>12345</p>
                        <p>1234567890</p>
                    </div>
                    these passwords can be cracked within in minutes.
                    <span className = "aware_helper">Always use a password of length more than 8 with a combination of upper lower case letters along with numbers</span>
                    <a class="generate_random"href="https://agile-sierra-42131.herokuapp.com/" target="_blank">Generate Password</a>
                </p>
            </div>
            <div className="aware_right">

            </div>
            
        </div>
    )
}
export default Aware