import React, {Component} from 'react';
import "../css/MyWork.css"
import SideNav from "../components/SideNav"
import GalleryItem from '../components/GalleryItem'


class MyWork extends Component{
    constructor(props){
        super(props);
        this.state ={
            projects: [],
        }
    }

    render(){
        return(
            <div className="mb-5">
                <h1 className="h1A">PROJECTS</h1>
                <div className="container centerCol margin-bottom">
                    <p className="pLab">Check out my projects!</p>
                        <GalleryItem isLab={false}></GalleryItem>
                </div>
                <SideNav page={this.state.menu}/>
            </div>
        )
    }
}

export default MyWork;