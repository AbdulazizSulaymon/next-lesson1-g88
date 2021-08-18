import Container from "../containers/Container"
import UsersTable from "../containers/Users/UsersTable"

const Users = () => {
    return (
        <Container page="users">
            <UsersTable />
        </Container>
    )
}

export default Users
