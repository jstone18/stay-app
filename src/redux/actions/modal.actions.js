import { OPEN_MODAL } from "./types";

export const openModal = (openClose, content) => {
	return {
		type: OPEN_MODAL,
		payload: { openClose, content }
	};
};
