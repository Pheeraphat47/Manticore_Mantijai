import React from "react";
import './About.css';

import { JackInTheBox } from "react-awesome-reveal";

function About() {
    return (

        <div id="AboutUs">
            <JackInTheBox>
                <div id="AboutTopic">
                    <img src="../img/AboutUs.png" id="AbouUsTopic" />
                </div>
            </JackInTheBox>


            <div id="Front-End">
                <h2 id="FrontEndTopic">FRONT-END</h2>
                <div id="FrontEnd">
                    <div id="Picture">
                        <a href="https://www.instagram.com/wariswasy/" target={"_blank"}><img src="../img/waris.png" /></a>
                    </div>

                    <div id="Picture">
                        <a href="https://www.instagram.com/phx_pd/" target={"_blank"}><img src="../img/Phee.png" /></a>
                    </div>

                    <div id="Picture">
                        <a href="https://www.instagram.com/nofmann_/" target={"_blank"}><img src="../img/Namfon.png" /></a>
                    </div>



                    <div id="FrontEnd-Topic">
                        <div id="Text">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Waris (DSI) <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Warisara Sornpakdee
                        </div>
                        <div id="Text">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phee (IT) <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pheeraphat Dherachaisuphakij
                        </div>
                        <div id="Text">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Namfon (IT) <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lalita Benjamanukul
                        </div>
                    </div>
                </div>
            </div>

            <div id="TextInfra-Design">
                <h2 id="DesignTopic">WEB DESIGN</h2>
                <h2 id="InfraTopic">INFRASTRUCTURE</h2>
            </div>

            <div id="Infra-Design">


                <div id="Design">
                    <div id="Picture-Design"><a href="https://www.instagram.com/tnppt/" target={"_blank"}><img src="../img/Ben.png" /> </a></div>
                    <div id="Picture-Design"><a href="https://www.instagram.com/_tongpc/" target={"_blank"}><img src="../img/Tong.png" /></a></div>
                    <div id="Text-Design-Topic">
                        <div id="Text-Design">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ben (DSI) <br />
                            Benjawan Thanaponphotha
                        </div>
                        <div id="Text-Design">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tong (IT) <br />
                            Pongsapat Charoencharuskul
                        </div>
                    </div>

                </div>



                <div id="Infra">
                    <div id="Picture-Infra"><a href="https://www.instagram.com/ioonixc/" target={"_blank"}><img src="../img/Ioon.png" /></a></div>
                    <div id="Text-Infra-Topic">
                        <div id="Text-Infra">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ioon (IT) <br />
                            Paepilai Chaimongkolngam
                        </div>
                    </div>
                </div>

            </div>







            <div id="Footer">
                <img src="../img/Footer.png"  />
            </div>

        </div>

    );
}

export default About;