import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../images/img1.avif';
import img2 from '../images/img2.avif';
import img3 from '../images/img3.avif';

export default function CarouselSide() {
    return (
        <div className='container'>
            <Carousel>
                <div>
                    <img src={img1} alt="Пейзаж 1" className='image'/>
                    <h1>Красивый пейзаж 1</h1>
                </div>
                <div>
                    <img src={img2} alt="Пейзаж 2" className='image'/>
                    <h1>Красивый пейзаж 2</h1>
                </div>
                <div>
                    <img src={img3} alt="Пейзаж 3" className='image'/>
                    <h1>Красивый пейзаж 3</h1>
                </div>
            </Carousel>
        </div>
    )
}
