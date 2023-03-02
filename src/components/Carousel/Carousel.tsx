import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Card, CardProps } from '../Card';

type CarouselProps = {
  cards: CardProps[];
};

const Wrapper = styled.div`
  .slick-slide {
    padding: 0 8px;
  }
`;

export const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

