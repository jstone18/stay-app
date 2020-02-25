import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../redux/actions/modal.actions";

const Navbar = ({ location, openModal }) => {
	let navColor = "transparent";

	if (location.pathname !== "/") {
		// then user is on the home page
		navColor = "black";
	}

	return (
		<div className="container-fluid nav">
			<div className="row">
				<nav className={navColor}>
					<div className="nav-wrapper">
						<Link to="/" className="left">
							STAY
						</Link>
						<ul id="nav-mobile" className="right">
							<li>
								<Link to="/">English (US)</Link>
							</li>
							<li>
								<Link to="/">$ USD</Link>
							</li>
							<li>
								<Link to="/">Become a Host</Link>
							</li>
							<li>
								<Link to="/">Help</Link>
							</li>
							<li>
								<Link to="/">Sign Up</Link>
							</li>
							<li
								onClick={() => {
									openModal("open", "Log in");
								}}>
								Log In
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default connect(null, { openModal })(Navbar);
