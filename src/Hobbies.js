import React from "react";
import './css/Hobbies.css'
import dmc from './images/dmc.jpg';
import spy from './images/spy.png';
import chad from './images/chad.webp'


const Hobbies = () => {
    return (
        <div className="Hobbies">
            <h3>Hobbies</h3>

            <div className="hobby">

                <div className="image-div">
                    <img src={dmc} alt="" />
                </div>

                <h4>Gaming</h4>
                <p>I have been a keen gamer since the age of about 5 lol
                    Recently with University/college and my job I haven't 
                    had as much time to play but I still love to play games
                    like Mass Effect and Devil May Cry!
                </p>
            </div>

            <div className="hobby">

                <div className="image-div">
                    <img src={spy} alt="" />
                </div>

                <h4>Anime</h4>
                <p>I have been a keen gamer since the age of about 5 lol
                    Recently with University/college and my job I haven't 
                    had as much time to play but I still love to play games
                    like Mass Effect and Devil May Cry!
                </p>
            </div>

            <div className="hobby">

                <div className="image-div">
                    <img src={chad} alt="" />
                </div>

                <h4>The Gym</h4>
                <p> 
                    I try to workout at least 4 to 5 times a week.
                    While I may not be gigachad yet I eventually
                    want to get a physique similar to him one 
                    day lol
                </p>
            </div>
        </div>
    )
}

export default Hobbies;