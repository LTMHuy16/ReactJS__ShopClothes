import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Button from "./Button";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";




const HeroSlider = (props) => {
  const { data, control, auto, timeOut = 3000 } = props;

  const [activeSlider, setActiveSlider] = useState(0);

  const nextSlide = useCallback(() => {
    const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1;
    setActiveSlider(index);
  }, [activeSlider, data]);

  const prevSlide = () => {
    const index = activeSlider - 1 < 0 ? data.length : activeSlider - 1;
    setActiveSlider(index);
  };

  useEffect(() => {
    if (auto) {
      const sliderAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(sliderAuto);
      };
    }
  }, [nextSlide]);

  return (
    <div className="hero-slider">
      {data.map((item, index) => (
        <HeroSliderItem
          key={index}
          item={item}
          active={index === activeSlider}
        />
      ))}

      {control ? (
        <div className="hero-slider__control">
          <div
            className="hero-slider__control__item"
            onClick={() => prevSlide()}
          >
            <BiChevronLeft />
          </div>
          <div className="hero-slider__control__item">
            <div className="index">
              {activeSlider + 1} / {data.length}
            </div>
          </div>
          <div
            className="hero-slider__control__item"
            onClick={() => nextSlide()}
          >
            <BiChevronRight />
          </div>
        </div>
      ) : null}
    </div>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

const HeroSliderItem = (props) => {
  const { title, description, img, color, path } = props.item;

  return (
    <div
      className={`hero-slider__item ${props.active === true ? "active" : ""}`}
    >
      <div className="hero-slider__item__info">
        <div className={`hero-slider__item__title color-${color}`}>
          <h4>{title}</h4>
        </div>
        <div className="hero-slider__item__description">
          <p>{description}</p>
        </div>
        <div className="hero-slider__item__btn">
          <Link to={path}>
            <Button
              backgroundColor={color}
              icon='cart'
              animate={true}
            >
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
      <div className="hero-slider__item__image">
        <div className={`hero-slider__item__image-shape bg-${color}`}></div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default HeroSlider;
