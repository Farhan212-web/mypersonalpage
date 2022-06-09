import React from "react";
import './css/WorkExperience.css';
import sainsbury from './images/logos/sainsbury.png';
import arnold from './images/logos/arnold.png';
import chao from './images/logos/chao.jpeg';

const WorkExperience = () => {
    return (
        <div className="Work-Experience">
            <h3>Work Experience</h3>

            <div className="experience">
                <div className="image-div">
                    <img src={sainsbury} alt ="" />
                </div>

                <div className="experience-text">
                    <p>July 2019 - May 2021</p>
                    <h4>Customer Trading Assistant</h4>

                    <p>I used to work here alongside my computer science degree.
                         I absolutely loved the job here being able to interact and have fun conversations with all the customers and colleagues there 
                         as well as the variety of skills I’ve picked up in my work here such as the importance of keeping areas 
                         clean and creating a friendly atmosphere for customers. The constantly changing retail
                        environment means I had to be quick at picking up new habits and implementing them exactly as told, a life skill is applicable in almost all other areas of life.
                    </p>
                </div>
            </div>

            <div className="experience">
                <div className="image-div">
                    <img src={chao} alt ="" />
                </div>

                <div className="experience-text">
                    <p>May 2021 - April 2022</p>
                    <h4>Server</h4>

                    <p>
                        I worked here as a server at the restaurant where I served both tables and organize Deliveroo orders whilst also helping the kitchen and floor 
                        staff with any other additional duties such as serving drinks or refilling ice. I have absolutely loved working here during my time being exposed to
                        Thai cuisine and working in a fast-paced restaurant especially
                        during a Friday and Saturday night. The job has also forced me to make sure my hygiene is impeccable always wearing clean clothes, 
                        trimming my nails and looking after my hair etc. to ensure that I am of a presentable standard to customers.
                    </p>
                </div>
            </div>

            <div className="experience">
                <div className="image-div">
                    <img src={arnold} alt ="" />
                </div>

                <div className="experience-text">
                    <p>May 2022 - Current</p>
                    <h4>Summer Rental Advisor</h4>

                    <p> I currently work at Arnold Clark as a rental advisor where my duties mainly include
                        ensuring that cars are in the appropriate places in the car park
                        ready for customers to take for their journies as well as 
                        talking to customers and ensuring that their experience with the cars and the 
                        company has been a good one
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience;