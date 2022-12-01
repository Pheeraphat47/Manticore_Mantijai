import React from "react";
import { JackInTheBox } from "react-awesome-reveal";

import "./Home.css";

function Home() {
    return (
        <div>
            <JackInTheBox className="-z-10">
                <div id="boxhome">
                    <img id="homeimage" src="../img/Home_Manticore.png" />
                </div>

            </JackInTheBox>

            <div className="clouds">
                <img src="../img/cloud1.png" className="cloud1" />
            </div>

        </div>



    );
}

export default Home;