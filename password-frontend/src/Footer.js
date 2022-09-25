import React from 'react'
import "./Footer.css";
function Footer() {
    return (
        <div className="footer" id="Footer">
            <div className="footer_heading">
                <h1>PASS<span className="footer_special">Codes</span></h1>
            </div>
           <div className="footer_content">
            <div className="footer_left">
                    <div className="footer_team">
                        <span>Developed by Chakradhar</span>
                    </div>
                </div>
                <div className="footer_right">
                    <p className="footer_terms">
                        This web app is made by a team of entry level programmers
                        we are not responsible for your data getting breached.
                        Store passwords at your own risk.
                        Copyright &copy;  by Shivasai              
                    </p>
                </div>
           </div>
        </div>
    );
}
export default Footer;