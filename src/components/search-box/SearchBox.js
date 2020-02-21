import React, { Component } from "react";
import "./searchBox.css";

class SearchBox extends Component {
	state = {
		where: "",
		checkIn: "",
		checkOut: "",
		guests: 2
	};

	changeWhere = event => {
		this.setState({ where: event.target.value });
	};

	changeCheckIn = event => {
		this.setState({ checkIn: event.target.value });
	};

	changeCheckOut = event => {
		this.setState({ checkOut: event.target.value });
	};

	changeGuests = event => {
		this.setState({ checkOut: event.target.value });
	};

	render() {
		return (
			<div className="home-search-box col m4">
				<h1>Book unique places to stay and things to do</h1>
				<form className="search-box-form">
					<div className="col m12">
						<div className="form-label">Where</div>
						<div className="input-field" id="where">
							<input
								className="browser-default"
								type="text"
								onChange={this.changeWhere}
								placeholder="Anywhere"
								value={this.state.where}
							/>
						</div>
					</div>

					<div className="col m6">
						<div className="form-label">Check-in</div>
						<div className="input-field" id="check-in">
							<input
								className="browser-default"
								type="date"
								onChange={this.changeCheckIn}
								value={this.state.checkIn}
							/>
						</div>
					</div>

					<div className="col m6">
						<div className="form-label">Check-out</div>
						<div className="input-field" id="check-out">
							<input
								className="browser-default"
								type="date"
								onChange={this.changeCheckOut}
								value={this.state.checkOut}
							/>
						</div>
					</div>

					<div className="col m12">
						<div className="form-label">Guests</div>
						<div className="input-field" id="guests">
							<input
								className="browser-default"
								type="number"
								onChange={this.changeGuests}
								value={this.state.guests}
							/>
						</div>
					</div>

					<div className="col m12 submit-btn">
						<div className="input-field" id="submit-btn">
							<input
								type="submit"
								value="Search"
								className="btn-large waves-effect waves-light red accent-2"
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBox;
