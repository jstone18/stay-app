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

	return <SlickSlider elements={cities} />;
};

export default Cities;
