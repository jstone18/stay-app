import React, { Component } from "react";
import { connect } from "react-redux";
import { closeModal } from "../../redux/actions/modal.actions";
import "./modal.css";

class Modal extends Component {
	state = {};

	closeModal = () => {
		this.props.closeModal("close", "");
	};

	render() {
		let modalInlineStyle;

		if (this.props.siteModal.openClose === "open") {
			modalInlineStyle = { display: "block" };
		} else {
			modalInlineStyle = { display: "none" };
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

export default connect(mapStateToProps, { closeModal })(Modal);
