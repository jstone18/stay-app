import React from "react";
import City from "../city/City";
import SlickSlider from "../slider/Slider";

const Cities = props => {
	const cities = props.cities.map(city => {
		return (
			<div className="col s3">
				<City city={city} key={city.id} />
			</div>
		);
	});
	return (
		<div className="cities-wrapper">
			<h1 className="main-header-text">{props.header}</h1>
			<SlickSlider elements={cities} />
		</div>
	);
};

export default Cities;
