import './styles.css';
import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';

export default ({ pods }) => {
    const items = pods.map((pod, idx) => ({
        key: idx,
        src: pod.url,
        altText: pod.title,
        header: pod.title,
        text: pod.explanation
    }));
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.key}
            >
                {item.key}
                <div style={{ height: '70vh', overflow: 'hidden' }} className="w-100 d-flex justify-content-center">
                    <div>
                        <img className="d-block carousel-img-transition-top" src={item.src} alt={item.altText} />
                    </div>
                </div>
                <div className="carousel-caption">
                    <h5 className="d-xs-block">{item.header}</h5>
                    <p className="d-none d-lg-block" style={{ maxHeight: '50vh' }}>{item.text}</p>
                </div>
            </CarouselItem>
        );
    });

    return (
        <Carousel className="carousel-fade"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};
