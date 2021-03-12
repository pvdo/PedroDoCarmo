import React, { Component } from "react";
import "./SocialMedias.css";
import gitHubImg from "../../others/gitHubImg.png";
import linkedinImg from "../../others/linkedinImg.png";

class SocialMedias extends Component {
    render() {
        return (
            <div className="social">
                <a
                    href="https://github.com/pvdo"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={gitHubImg} alt="github" className="socialImg" />
                </a>
                <a
                    href="https://www.linkedin.com/in/pedrovteixeira/"
                    target="_black"
                >
                    <img
                        src={linkedinImg}
                        alt="linkedin"
                        className="socialImg"
                    />
                </a>
            </div>
        );
    }
}

export default SocialMedias;
