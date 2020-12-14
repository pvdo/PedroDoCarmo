import React, {Component} from 'react';
import Home from './components/Home';
import Lab from './components/Lab';
import About from './components/About';
import MyWork from './components/MyWork';
import NotFound from './components/NotFound';
import {Switch, Route } from 'react-router-dom';
import Project from './components/Project';
import SocialMedias from './components/SocialMedias';
// import ColorBlind from './components/ColorBlind';

class App extends Component {
  render (){
    return(
      <div>
        <SocialMedias></SocialMedias>
        <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/laboratory" component={Lab}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/projects" component={MyWork}/>
                    <Route path="/projects/:name" render={(props) =>(
                      <Project name={props.match.params.name}/>
                    )}/>
                    <Route render={() => (<NotFound/>)}/>
        </Switch>
      </div>
    )
  }
}

export default App;
