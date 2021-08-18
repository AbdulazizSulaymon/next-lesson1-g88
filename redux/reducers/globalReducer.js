import { SET_ERROR, SET_LOADING, TOGGLE_SIDEBAR } from "../types";

const initialState = {
    loading: true,
    error: false,
    isSidebarShow: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING: return { ...state, loading: action.payload };
        case SET_ERROR: return { ...state, error: action.payload };
        case TOGGLE_SIDEBAR: return { ...state, isSidebarShow: !state.isSidebarShow }

        default: return state;
    }

}

export default reducer;