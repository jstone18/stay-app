import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const INITIAL_STATE = {
	openClose: "",
	content: ""
};

export const modalReducer = (state = INITIAL_STATE, action) => {
	if (action.type === OPEN_MODAL) {
		return action.payload;
	} else if (action.type === CLOSE_MODAL) {
		return action.payload;
	}
	return state;
};
