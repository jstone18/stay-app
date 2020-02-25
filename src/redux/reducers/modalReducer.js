import { OPEN_MODAL } from "../actions/types";

const INITIAL_STATE = {
	openClose: "",
	content: ""
};

export const modalReducer = (state = INITIAL_STATE, action) => {
	if (action.type === OPEN_MODAL) {
		return action.payload;
	}
	return state;
};
