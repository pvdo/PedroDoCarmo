import React, { useState } from "react";
import "./SaoPaulo.scss";
import theOffice from "../../../others/theOfficeApi.png";

function openMenu() {}

function SaoPaulo() {
    return (
        <main className="main">
            <h1>Css Animations</h1>
            <div className="grid-animation">
                {/* 1.Scroll Animation */}
                <div id="scroll" className="div-animation">
                    <div id="scroll-outer">
                        <div id="scroll-inner"></div>
                    </div>
                </div>

                {/* 2.Hamburguer Menu */}
                <div onClick={openMenu()} className="div-animation">
                    <div id="hamburger">
                        <div id="line1" className="line"></div>
                        <div id="line2" className="line"></div>
                        <div id="line3" className="line"></div>
                    </div>
                </div>

                {/* 3.Squares */}
                <div id="squares" className="div-animation">
                    <div id="square1" className="square"></div>
                    <div id="square2" className="square"></div>
                    <div id="square3" className="square"></div>
                    <div id="square4" className="square"></div>
                </div>

                {/* 4.Ball */}
                <div className="div-animation">
                    <div id="ball1" className="balls"></div>
                    <div id="ball2" className="balls"></div>
                    <div id="ball3" className="balls"></div>
                </div>
                <div className="div-animation"></div>
                <div className="div-animation"></div>
                <div className="div-animation"></div>
                <div className="div-animation"></div>
                <div className="div-animation"></div>
            </div>
        </main>
    );
}

export default SaoPaulo;
