import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">COVID 19</h4>
                    <p> 
                    Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                    Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.
                    The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
                    You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. 
                    </p>
                    <ul>
                        <li><a href=" https://www.worldometers.info/coronavirus/ "> Worldometer</a></li>
                        <li><a href=" https://c19.se/ "> Stockholm </a></li>
                        <li><a href="https://www.worldometers.info/coronavirus/country/india/"> India </a></li>
                        <li><a href="https://www.worldometers.info/coronavirus/country/us/"> USA </a></li>
                    </ul>
                    <img id="img" src={require("./home.gif")} border="0" width= "200"></img>
                    <img id="img" src={require("./mask.gif")} border="0" width= "200"></img>
                    <img id="img" src={require("./wash.gif")} border="0" width= "200"></img>
                    <img id="img" src={require("./namasthe.gif")} border="0" width= "200"></img>
                    <img id="img" src={require("./fight.gif")} border="0" width= "200"></img>
                </div>
            </div>
        );
    }
}

export default HomePage;