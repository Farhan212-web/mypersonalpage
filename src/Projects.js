import React from 'react';
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

const Projects = () => {
    return (
        <div>
            <h3>My Personal Projects :) </h3>

            <ImageSlider slides = {SliderData} />
        </div>
    )
}

export default Projects;