import React from "react";
import profilePic from './images/3264.jpg'
import './css/MyCard.css'

const MyCard = () => {
    return (
        <div className="MyCard">
            <div className="image-div">
                <img src={profilePic} alt=""></img>
            </div>

            <div className="profileDesc">
                <h3>About me</h3>
                <p>I am a 22 year old computer science student
                    who is keen to become a software developer
                </p>
            </div>
        </div>
    )
}

export default MyCard;