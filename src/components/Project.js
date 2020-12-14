import {Component} from "react";
import {Row, Col, Container, Image} from "react-bootstrap";
import SideNav from "../components/SideNav"
import '../css/Project.css'

class Project extends Component{
    constructor(props){
        super(props);
        this.state= {

            project:{}
        }
    }

    componentDidMount(){
        fetch('../projects.json')
        .then((response) => response.json())
        .then((result) =>{
            console.log("result" + result);
            var prjct = result.find(project => project.urlName === this.props.name);
            this.setState({
                project: prjct
            })
        })
        .catch((error) => console.log(error));
        
    }

    render(){
        return(
            <div >
                <h1 className="h1A">PROJECTS</h1>
                

                <div className="container mt-5 text-center">
                    <h1>{this.state.project.title}</h1>
                    <a  className="aColor"href={this.state.project.siteLink} target="_blank" rel="noreferrer">Go to website</a>
                    <div className="centerImage">
                        <Image  src={this.state.project.image} className="mb-5 sizeImg" alt={this.state.project.title}></Image>
                    </div>
                </div>
                <Container className="container px-5">
                    <Row className="">
                        <Col md={2}>
                            <strong>Challange:</strong>
                        </Col>
                        <Col md={10}>
                            <p >{this.state.project.challenge}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <strong>Technologies:</strong>
                        </Col>
                        <Col md={10}>
                            <p>{this.state.project.synop}</p>
                        </Col>
                    </Row>
                </Container>
                <SideNav page={this.state.menu}/>
            </div>
        )
    }
}

export default Project;