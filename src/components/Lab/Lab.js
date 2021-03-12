import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "../MyWork/MyWork.css";
import SideNav from "../SideNav/SideNav";
import GalleryItem from "../GalleryItem/GalleryItem";

class Lab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labs: [],
        };
    }

    componentDidMount() {
        fetch("./labs.json")
            .then((response) => response.json())
            .then((result) => {
                const laboratories = result.map((lab) => {
                    return lab;
                });
                this.setState({
                    labs: laboratories,
                });
            });
    }

    render() {
        const listLab = this.state.labs.map((lab) => (
            <GalleryItem key={lab.id} labProp={lab} isLab={true}></GalleryItem>
        ));
        return (
            <div>
                <h1 className="h1A">LABORATORY</h1>
                <div className="container centerCol">
                    <p className="pLab">
                        Section for interesting coding experiments!
                    </p>
                    <Row className="centerCol">{listLab}</Row>
                </div>
                <SideNav />
            </div>
        );
    }
}

export default Lab;
