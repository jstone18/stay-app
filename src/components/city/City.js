import React, { Component } from "react";
import "./city.css";

export default class City extends Component {
	render() {
		const { cityName, image, price } = this.props.city;
		return (
			<div className="city col s12">
				<div className="image">
					<img src={image} alt="city" />
				</div>
				<div className="city-name">{cityName}</div>
				<div className="price">{price}/night average </div>
			</div>
		);
	}
}
