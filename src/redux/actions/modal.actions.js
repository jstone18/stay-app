import { OPEN_MODAL, CLOSE_MODAL } from "./types";

export const openModal = (openClose, content) => {
	return {
		type: OPEN_MODAL,
		payload: { openClose, content }
	};
};

export const closeModal = openClose => {
	return {
		type: CLOSE_MODAL,
		payload: { openClose }
	};
};
