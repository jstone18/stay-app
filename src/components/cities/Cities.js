import React from "react";
import City from "../city/City";
import SlickSlider from "../slider/Slider";

const Cities = props => {
	const cities = props.cities.map((city, i) => {
		return (
			<div className="col s3" key={city.id}>
				<City city={city} />
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
