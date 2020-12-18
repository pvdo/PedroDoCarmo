import React, {Component} from 'react';
import {Nav} from "react-bootstrap";
import "../css/SideNav.css"

class SideNav extends Component{
    render(){
        return(
            
            <div>
                <Nav className="fixed-bottomA" defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/"><div className={"roundLinkA"}><h3>HOME</h3></div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item  as="li">
                        <Nav.Link href="/projects"><div className="roundLinkA"><h3>PROJECTS</h3></div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/laboratory"><div className="roundLinkA"><h3>LAB</h3></div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/about"><div className="roundLinkA"><h3>ABOUT</h3></div></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default SideNav;