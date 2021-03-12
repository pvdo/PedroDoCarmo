import React, {Component} from 'react';
import '../css/ColorBlind.css'


class ColorBlind extends Component {
    constructor(props){
        super(props);
        this.state={
            colorBlind: false,
            homeBgColor: "linear-gradient(0deg, #ffffff 50%, #e3c252 50%)",
            homeColorBlind: "linear-gradient(0deg, #ffffff 50%, #000000 50%)",
            yellow: "#e3c252",
            white: "#ffffff",
            black: "#000000",

        };
        this.addClass = this.addClass.bind(this);
        this.changeColor = this.changeColor(this);
    }
    componentDidMount(){
        console.log(this.state.colorBlind);
        if(this.state.colorBlind){
            document.getElementsByClassName("roundLink").style.color = this.state.black;

        }
    }
    addClass(){
        const currentState = this.state.colorBlind;
        this.setState({ colorBlind: !currentState });
        if(this.state.colorBlind){
            document.getElementsByClassName("roundLink")[1].style.color = this.state.black;

        }
        console.log(this.state.colorBlind);
    }
    changeColor(){
      
    }

  render (){
      return(
          
      <button className="colorLink" onClick={this.addClass}>Color Blind?</button>)
  }
}

export default ColorBlind;
    