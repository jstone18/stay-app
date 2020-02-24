import React, { Component } from "react";
import axios from "axios";
import "./singleVenue.css";
import Point from "./Point";

class SingleVenue extends Component {
	state = { singleVenue: {}, points: [] };

	async componentDidMount() {
		const venueId = this.props.match.params.venueId;
		const url = `${window.apiHost}/venue/${venueId}`;
		const response = await axios.get(url);
		const singleVenue = response.data;

		const pointsUrl = `${window.apiHost}/points/get`;
		const pointsAxioResponse = await axios.get(pointsUrl);

		const points = singleVenue.points.split(",").map((point, i) => {
			return (
				<Point key={i} pointDesc={pointsAxioResponse.data} point={point} />
			);
		});
		this.setState({ singleVenue, points });
	}

	render() {
		const {
			id,
			title,
			location,
			rating,
			guests,
			pricePerNight,
			details,
			amenities,
			imageUrl
		} = this.state.singleVenue;
		return (
			<div className="row single-venue">
				<div className="col s12 center">
					<img src={imageUrl} alt="venue" />
				</div>
				<div className="col s8 location-details offset-s2">
					<div className="col s8 left-details">
						<div className="location">{location}</div>
						<div className="title">{title}</div>
						<div className="guests">Guests: {guests}</div>
						<div className="divider"></div>
						{this.state.points}
					</div>
				</div>
			</div>
		);
	}
}

export default SingleVenue;
