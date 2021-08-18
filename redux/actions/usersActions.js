import { getUserByID, getUsers } from "../../api";
import { dispatch } from "../store";
import { SET_USERS, SET_USER } from "../types";
import { setError, setLoading } from "./globalActions";

const setUsers = async () => {
    setLoading(true);
    const res = await getUsers();
    setLoading(false);

    if (res.success) {
        const action = { type: SET_USERS, payload: res.data }
        dispatch(action);
    }
    else {
        setError(true);
    }
}

const setUser = async (id) => {
    setLoading(true);
    const res = await getUserByID(id);
    setLoading(false);

    if (res.success) {
        const action = { type: SET_USER, payload: res.data }
        dispatch(action);
    }
    else {
        setError(true);
    }
}

export { setUsers, setUser }