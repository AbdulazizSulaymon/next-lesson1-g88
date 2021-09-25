import axios from "axios";
const tokenName = "token-jsonplaceholder";
const baseURL = "https://jsonplaceholder.typicode.com/";

let axiosInstance = {};

const checkToken = () => {
    // localStorage.setItem(tokenName, "123123123token");
    const token = localStorage && localStorage.getItem(tokenName);
    if (!token || token == "" || token == "null") return false;
    else return true;
}

export const initApi = () => {
    const initialProps = {
        baseURL: baseURL,
        timeout: 30000,
        headers: checkToken()
            ? {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem(tokenName)}`,
            }
            : {
                "Content-Type": "application/json",
            },
    };

    axiosInstance = axios.create(initialProps);
}

let getUsersCancelToken;
export const getUsers = async () => {
    try {
        getUsersCancelToken && getUsersCancelToken.cancel("Bekor bo'ldi");
        getUsersCancelToken = axios.CancelToken.source();

        const res = await axiosInstance.get(
            `https://jsonplaceholder.typicode.com/users?_limit=12`
            , { cancelToken: getUsersCancelToken.token }
        );
        console.log(res.data);
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

export const getUserByID = async (id) => {
    try {
        const res = await axiosInstance.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log(res.data);
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

export const postUser = async () => {

}

export const getTodos = async () => {
    try {
        const res = await axiosInstance.get(`https://jsonplaceholder.typicode.com/todos?_limit=12`);
        console.log(res.data);
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}
