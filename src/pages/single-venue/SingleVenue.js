import React, { Component } from "react";
import axios from "axios";
import "./singleVenue.css";
import Point from "./Point";

class SingleVenue extends Component {
	state = {
		singleVenue: {},
		points: [],
		numberOfGuests: 0,
		checkIn: "",
		checkOut: ""
	};

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

	changeNumberOfGuests = e => {
		this.setState({ numberOfGuests: e.target.value });
	};
	changeCheckIn = e => {
		this.setState({ checkIn: e.target.value });
	};
	changeCheckOut = e => {
		this.setState({ checkOut: e.target.value });
	};

	reserveNow = e => {
		alert("Reservation submitted!");

		this.setState({ numberOfGuests: 0, checkIn: "", checkOut: "" });
	};

	render() {
		const {
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

				{/* Location details */}
				<div className="col s8 location-details offset-s2">
					{/* left side */}
					<div className="col s8 left-details">
						<div className="location">{location}</div>
						<div className="title">{title}</div>
						<div className="guests">Guests: {guests}</div>

						<div className="divider" />
						{this.state.points}

						<div className="details">{details}</div>
						<div className="amenities">{amenities}</div>
					</div>

					{/* right side */}
					<div className="col s4 right-details">
						<div className="price-per-day">
							${pricePerNight} <span>per day</span>
						</div>
						<div className="rating">{rating}</div>
						<div className="col s6">
							Check-In
							<input type="date" onChange={this.changeCheckIn} />
						</div>
						<div className="col s6">
							Check-Out
							<input type="date" onChange={this.changeCheckOut} />
						</div>
						<div className="col s12">
							<select
								className="browser-default"
								onChange={this.numberOfGuests}>
								<option value="1">1 Guest</option>
								<option value="2">2 Guest</option>
								<option value="3">3 Guest</option>
								<option value="4">4 Guest</option>
								<option value="5">5 Guest</option>
								<option value="6">6 Guest</option>
								<option value="7">7 Guest</option>
								<option value="8">8 Guest</option>
							</select>
						</div>
						<div className="col s12 center">
							<button className="btn red accent-2" onClick={this.reserveNow}>
								Reserve
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleVenue;
