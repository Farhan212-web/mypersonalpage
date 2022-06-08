import React from "react";
import MyCard from "./MyCard";
import './css/App.css';
import Skills from "./Skills";
import Journey from "./Journey";
import Hobbies from "./Hobbies";

const App = () => {
    return (
        <div className="main-body">
            <MyCard />

            <div className="main-grid">
                <Skills />
                <Journey />
                <Hobbies />
            </div>
        </div>
    )
}

export default App;