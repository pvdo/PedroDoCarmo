// Frameworks and Libraries
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import Lab from "./components/Lab/Lab";
import About from "./components/About/About";
import MyWork from "./components/MyWork/MyWork";
import NotFound from "./components/NotFound/NotFound";
import Project from "./components/Project/Project";
import SocialMedias from "./components/SocialMedias/SocialMedias";
import TheOffice from "./components/TheOffice/TheOffice";
import SaoPaulo from "./components/Projects-embeded/SaoPaulo/SaoPaulo";
// import ColorBlind from './components/ColorBlind';

class App extends Component {
    render() {
        return (
            <div>
                <SocialMedias></SocialMedias>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/laboratory" component={Lab} />
                    <Route path="/about" component={About} />
                    <Route exact path="/projects" component={MyWork} />
                    <Route
                        path="/projects/:name"
                        render={(props) => (
                            <Project name={props.match.params.name} />
                        )}
                    />
                    <Route path="/laboratory/theoffice" component={TheOffice} />
                    <Route path="/laboratory/saopaulo" component={SaoPaulo} />

                    <Route render={() => <NotFound />} />
                </Switch>
            </div>
        );
    }
}

export default App;
