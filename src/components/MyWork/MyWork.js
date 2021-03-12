import React, { Component } from "react";
import "./MyWork.css";
import SideNav from "../SideNav/SideNav";
import GalleryItem from "../GalleryItem/GalleryItem";

class MyWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        };
    }

    render() {
        return (
            <div className="fullSize">
                <h1 className="h1A">PROJECTS</h1>
                <div className="container margin-bottom">
                    <p className="pLab">Check out my projects!</p>
                    <GalleryItem isLab={false}></GalleryItem>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <SideNav />
            </div>
        );
    }
}

export default MyWork;
