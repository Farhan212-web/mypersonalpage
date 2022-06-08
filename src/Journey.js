import React from "react";
import './css/Journey.css'
import laptopPic from './images/3324.jpg'

const Journey = () => {
    return (
        <div className="Journey">

            <h3>Journey</h3>

            <div className="image-div">
                <img src={laptopPic} alt="" />
            </div>
            
            <p>I have been learning web dev since November 2021. I 
                started learning HTML, CSS and Javascript with Colt Steele then
                and fell in love with web development. I know my skills are 
                far from perfect but I am hoping to be given a chance at a company to learn
                and grow as a web developer. I will be graduating with a CS degree from 
                the University of Aberdeen in 2023. I will keep this text updated 
                to reflect exactly where I am at with my Web Dev skills.
            </p>
        </div>
    )
}

export default Journey;