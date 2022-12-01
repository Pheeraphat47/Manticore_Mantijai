import React from "react";
import { Slide} from "react-awesome-reveal";

import "./Appearance.css";

function Appear() {
    return (
        <div className="Appearance" id="Appear">
            <Slide>
                <div className="AppearTopic">
                    <h2 className="font-bold  font-inter text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-700 text-center pt-56" >MANTICORE</h2> <br />
                    <h4 className="font-extralight font-inter text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-700 text-center" id="appear2"> Appearance & Characteristics </h4>
                </div>
            </Slide>

            
            <div className="AppearImage">
                <img src="../img/appearance.png" />
            </div>
            
            
        </div>

    );
}

export default Appear;