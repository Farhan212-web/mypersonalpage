import React from "react";
import MyCard from "./MyCard";
import './css/App.css';
import Skills from "./Skills";
import Journey from "./Journey";
import Hobbies from "./Hobbies";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Footer from "./Footer";


const App = () => {
    return (
        <div className="main-body">
            <MyCard />

            <div className="main-grid">
                <Skills />
                <Journey />
                <Hobbies />
                <WorkExperience />
            </div>

            <Projects />

            <Footer />

        </div>
    )
}

export default App;