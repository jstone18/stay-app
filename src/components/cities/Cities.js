import React from "react";
import City from "../city/City";

const Cities = ({ cities }) => {
	return (
		<div>
			{cities.map(city => (
				<div className="col s3">
					<City city={city} key={city.id} />
				</div>
			))}
		</div>
	);
};

export default Cities;
