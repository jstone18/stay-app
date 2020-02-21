import React from "react";
import "./homePage.css";
import SearchBox from "../../components/search-box/SearchBox";

const HomePage = () => {
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
};

export default HomePage;
