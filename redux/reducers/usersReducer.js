import { SET_USERS, SET_USER } from "../types";

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                data: action.payload,
            };


        default: return state;
    }

}

export default reducer;