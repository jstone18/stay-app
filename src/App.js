import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import SingleVenue from "./pages/singleVenue/SingleVenue";
import Modal from "./components/modal/Modal";

class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={Navbar} />
				<Route exact path="/" component={HomePage} />
				<Route exact path="/venue/:venueId" component={SingleVenue} />
				<Route path="/" component={Modal} />
			</Router>
		);
	}
}

export default App;
