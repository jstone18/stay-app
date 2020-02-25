import React, { Component } from "react";
import { connect } from "react-redux";
import "./modal.css";

class Modal extends Component {
	state = {};

	render() {
		let modalInlineStyle = { display: "none" };

		if (this.props.siteModal.openClose === "open") {
			modalInlineStyle = { display: "block" };
		}

		return (
			<div className="site-modal" style={modalInlineStyle}>
				<div className="modal-content">
					<div className="col right">
						<span onClick={this.closeModal} className="close">
							&times;
						</span>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		siteModal: state.siteModal
	};
}

export default connect(mapStateToProps)(Modal);
