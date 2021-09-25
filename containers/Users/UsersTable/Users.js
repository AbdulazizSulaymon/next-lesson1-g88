import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Error from "../../../components/Error";
import { setUsers } from '../../../redux/actions/usersActions';
import UsersWrapper from './UsersWrapper'

const Users = ({ data }) => {
    // useEffect(() => {
    //     setUsers()
    // }, [])

    // const data = useSelector(state => state.users.data);
    const error = useSelector(state => state.global.error);
    const loading = useSelector(state => state.global.loading);

    console.log("data", data);

    return (
        <UsersWrapper>
            <h1>Users</h1>

            {loading && <LinearProgress /> ||
                error && <Error /> ||
                data?.length > 0 && <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell>name</TableCell>
                                <TableCell>user name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(v => <TableRow>
                                <TableCell>{v.id}</TableCell>
                                <TableCell>{v.name}</TableCell>
                                <TableCell>{v.username}</TableCell>
                            </TableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer> || "no data"}

        </UsersWrapper>
    )
}

export default Users
