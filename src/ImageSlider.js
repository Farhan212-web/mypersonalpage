import React, {useState} from 'react'
import { SliderData } from './SliderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './css/ImageSlider.css';

const ImageSlider = ( {slides} ) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <FontAwesomeIcon icon = {faArrowAltCircleLeft} 
            className="left-arrow" onClick={prevSlide} />

            <FontAwesomeIcon icon = {faArrowAltCircleRight} 
            className="right-arrow" onClick={nextSlide} />

            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (<img key={index} src={slide.image} alt="" 
                        className='image' />)}
                    </div>
                )

            })}
        </section>
    )
}

export default ImageSlider;