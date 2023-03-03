import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Card, CardProps } from "../Card";
import { Text } from "../Text";

type CarouselProps = {
  cards: CardProps[];
};

export const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const storedArray = localStorage.getItem("coinsId");
  console.log({ storedArray });



  const slidesToShow = cards.length < 7 ? cards.length : 7;

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Text variant="normal_black_font">Favoritos</Text>
      <Slider {...settings}>
        {cards &&
          cards.map((card: CardProps, index: number) => (
            <div key={index}>
              <Card
                name={card.name}
                current_price={card.current_price}
                price_change_percentage_24h={card.price_change_percentage_24h}
                market_cap_rank={card.market_cap_rank}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};
