import React, { Component, Fragment } from "react";
import "./homePage.css";
import axios from "axios";
import SearchBox from "../../components/search-box/SearchBox";
import Spinner from "../../components/spinner/Spinner";
import Cities from "../../components/cities/Cities";

export default class HomePage extends Component {
	state = {
		cities: [],
		europeCities: {},
		asianCities: {},
		exoticCities: {},
		usCities: {},
		beachCities: {}
	};

	async componentDidMount() {
		const citiesUrl = `${window.apiHost}/cities/recommended`;
		const europeCitiesUrl = `${window.apiHost}/cities/europe`;
		const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
		const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;
		const usCitiesUrl = `${window.apiHost}/cities/us`;
		const beachCitiesUrl = `${window.apiHost}/cities/beach`;

		const citiesPromises = [];

		citiesPromises.push(axios.get(citiesUrl));
		citiesPromises.push(axios.get(europeCitiesUrl));
		citiesPromises.push(axios.get(asiaCitiesUrl));
		citiesPromises.push(axios.get(exoticCitiesUrl));
		citiesPromises.push(axios.get(usCitiesUrl));
		citiesPromises.push(axios.get(beachCitiesUrl));

		Promise.all(citiesPromises).then(data => {
			const recommendedCities = data[0].data;
			const europeCities = data[1].data;
			const asianCities = data[2].data;
			const exoticCities = data[3].data;
			const usCities = data[4].data;
			const beachCities = data[5].data;

			console.log(exoticCities);

			this.setState({
				cities: recommendedCities,
				europeCities,
				asianCities,
				exoticCities,
				usCities,
				beachCities
			});
		});

		// this.setState({ cities: recommendedCities.data });
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
					<div className="col s12">
						<Cities
							cities={this.state.europeCities.cities}
							header={this.state.europeCities.header}
						/>
					</div>
					<div className="col s12">
						<Cities
							cities={this.state.asianCities.cities}
							header={this.state.asianCities.header}
						/>
					</div>
					<div className="col s12">
						<Cities
							cities={this.state.exoticCities.cities}
							header={this.state.exoticCities.header}
						/>
					</div>
				</div>
				{/* Cities slider carousel end */}
			</Fragment>
		);
	}
}
