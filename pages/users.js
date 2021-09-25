import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../api";
import Container from "../containers/Container"
import UsersTable from "../containers/Users/UsersTable"

const Users = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        let res;
        getUsers();
        getUsers();
        getUsers();
        getUsers();
        getUsers();
        getUsers();
        // setData(res.data)
    }, [])

    console.log("data", data);

    return (
        <Container page="users">
            <UsersTable data={data} />
        </Container>
    )
}

export default Users
