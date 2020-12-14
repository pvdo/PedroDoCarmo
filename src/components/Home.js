import '../css/Home.css';
import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
// import ColorBlind from '../components/ColorBlind'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            colorBlind: false,
            bgColor: "linear-gradient(0deg, #ffffff 50%, #e3c252 50%)",
            bgColorBlind: "linear-gradient(0deg, #ffffff 50%, #000000 50%)"
        };
        this.addClass = this.addClass.bind(this);
        this.changeColor = this.changeColor(this);
    }
    addClass(){
        const currentState = this.state.colorBlind;
        this.setState({ colorBlind: !currentState });
    }
    changeColor(){
      
    }

  render (){

    return(
      <div className="App">
        <p className="frontClass">Front-end Developer</p>
        
      <div className="App-header"  style={{background: this.state.bgColor}}>
      {/* <ColorBlind></ColorBlind> */}
        <div className="whiteBoard">
          <h1 data-text="PEDRO DO CARMO">PEDRO DO CARMO</h1>
          
        </div>

       
        <div className="fixed-bottom">
          <Nav className="fixed-bottom" defaultActiveKey="/home" as="ul">
          
            <Nav.Item as="li">
              <Nav.Link href="/About"><div className={"roundLink"} onClick={this.addClass}> <h3>ABOUT</h3></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/Laboratory"><div className="roundLink"><h3>LAB</h3></div></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/Projects"><div className="roundLink"><h3>PROJECTS</h3></div></Nav.Link>
            </Nav.Item>
          </Nav>
          
        </div>
      </div>
    </div>
    )
  }
}

export default Home;