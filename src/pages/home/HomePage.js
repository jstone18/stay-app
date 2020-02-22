import React, { Component, Fragment } from "react";
import "./homePage.css";
import axios from "axios";
import SearchBox from "../../components/search-box/SearchBox";
import Spinner from "../../components/spinner/Spinner";
import Cities from "../../components/cities/Cities";

export default class HomePage extends Component {
	state = {
		cities: []
	};

	async componentDidMount() {
		const citiesUrl = `${window.apiHost}/cities/recommended`;

		const recommendedCities = await axios.get(citiesUrl);
		this.setState({ cities: recommendedCities.data });
	}
	render() {
		if (this.state.cities.length === 0) {
			return <Spinner />;
		}

		return (
			<Fragment>
				{/* Upper fold */}
				<div className="container-fluid">
					<div className="row">
						<div className="home col s12">
							<div className="upper-fold">
								<SearchBox />
							</div>
						</div>
					</div>
				</div>
				{/* Upper fold end */}

				{/* Cities slider carousel */}
				<div className="container-fluid lower-fold">
					<div className="col s12">
						<Cities
							cities={this.state.cities}
							header="Recommended Cities For You"
						/>
					</div>
				</div>
				{/* Cities slider carousel end */}
			</Fragment>
		);
	}
}
