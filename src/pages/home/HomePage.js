import React, { Component } from "react";
import "./homePage.css";
import axios from "axios";
import SearchBox from "../../components/search-box/SearchBox";
import Spinner from "../../components/spinner/Spinner";

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
			<div className="container-fluid">
				<div className="row">
					<div className="home col s12">
						<div className="upper-fold">
							<SearchBox />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
