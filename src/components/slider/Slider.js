import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import SlickSlider from "react-slick";

const Slider = props => {
	const settings = {
		dots: true,
		infinite: true,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1
	};
	return (
		<div className="slick">
			<SlickSlider {...settings}>{props.elements}</SlickSlider>
		</div>
	);
};

export default Slider;
