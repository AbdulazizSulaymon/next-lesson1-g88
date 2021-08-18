import axios from "axios"

export const getUsers = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=12`);
        console.log(res.data);
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

export const getUserByID = async (id) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
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
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=12`);
        console.log(res.data);
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}
