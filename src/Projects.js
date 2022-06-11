import React from 'react';
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import './css/Projects.css';

const Projects = () => {
    return (
        <div className="Projects">
            <h3 className="heading">My Personal Projects :) </h3>

            <ImageSlider slides = {SliderData} />
        </div>
    )
}

export default Projects;