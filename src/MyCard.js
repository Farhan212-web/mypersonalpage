import React from "react";
import profilePic from './images/3264.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import './css/MyCard.css'

const MyCard = () => {
    return (
        <div className="MyCard">
            <div className="image-div">
                <img src={profilePic} alt=""></img>
            </div>

            <div className="profileDesc">
                <div className="contact-info">
                    <div className="heading">
                        <h3>About me</h3>
                        <p>Front-End Developer</p>
                    </div>

                    <div className="my-info">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <h4>farhan480@hotmail.co.uk</h4>
                        </div>
                        
                        <div className="phone">
                            <FontAwesomeIcon icon={faPhone} />
                            <h4>+447795689660</h4>
                        </div>
                    </div>
                </div>

                <p>I am a 22 year old computer science student
                    who is keen to become a software developer
                </p>
            </div>
        </div>
    )
}

export default MyCard;