import React, {Component} from 'react';
import {Image} from "react-bootstrap";
import "../css/About.css"
import SideNav from "../components/SideNav"
import PedroImg from "../others/pedroLuminosity_small.png"

import resumePdf from '../others/PedroDoCarmo_Developer_Resume.pdf'

class About extends Component{

    render(){
        return(
            <div className="margin-bottom">
                <div>
                    <h1 className="h1A">ABOUT</h1>
                </div>
                <div className="container text-center">
                
                    <h4 className="h4A">Hi!</h4>
                        
                        <div className="centeredA ">
                        <p className="pA">I am a Front-end developer with experience in building websites and web applications.
                                            My competencies include JavaScript, TypeScript, React, CSS. I am experienced working with Express.js, Node.js, and MongoDB. 
                                            <br/>Also comfortable working with: C++, Java, MySQL.  </p>
                            <Image fluid className="fixed-"src={PedroImg} alt="Pedro do Carmo" />
                        </div>
                        
                <a href={resumePdf} target="_blank" rel="noreferrer"><div className="resumeLink"><span>TAKE A LOOK AT MY RESUME!</span></div></a>
                </div>
                
                
                <div className="finalMargin"></div>
                <SideNav/>
            </div>
        )
    }
}

export default About;