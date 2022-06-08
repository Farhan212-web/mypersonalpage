import React from "react";
import MyCard from "./MyCard";
import './css/App.css';
import Skills from "./Skills";

const App = () => {
    return (
        <div className="main-body">
            <MyCard />
            <Skills />
        </div>
    )
}

export default App;