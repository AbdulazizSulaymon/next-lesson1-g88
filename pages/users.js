import Link from "next/link";
import styles from "../styles/Users.module.css";
import homeStyles from "../styles/Home.module.css";
import styled from "styled-components";

const Container = styled.div`
    margin: 100px;
    background-color: #888;
    min-height: 100vh;
`;

const Users = () => {
    return (
        <Container>
            <Link href="/"><a className="btn btn-primary mb-3">Home</a></Link>
            <h1 className={styles.title}>Users</h1>
        </Container>
    )
}

export default Users
