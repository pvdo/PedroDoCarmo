import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./SideNav.css";

class SideNav extends Component {
    render() {
        return (
            <div>
                <ul className="fixed-bottomA">
                    <li>
                        <a href="/">
                            <div className="roundLinkA">
                                <h3>HOME</h3>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/projects">
                            <div className="roundLinkA">
                                <h3>PROJECTS</h3>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/laboratory">
                            <div className="roundLinkA">
                                <h3>LAB</h3>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <div className="roundLinkA">
                                <h3>ABOUT</h3>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideNav;
