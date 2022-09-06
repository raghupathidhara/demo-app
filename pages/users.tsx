import { Button, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addUser, deleteUser } from '../store/userSlice'

const Users = () => {

    // get users from store
    const users = useAppSelector(state => state.usersData.users)
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    //calling dispatch hook for dispatching action later
    const dispatch = useAppDispatch()

    const submitHandler = () => {
        const data = {
            id: String(new Date().getTime()),
            name,
            age
        }
        dispatch(addUser(data))
        setName('')
        setAge(0)
    }

    const removeUser = (id: string) => {
        dispatch(deleteUser(id))

    }

    return (
        <Grid container sx={{ margin: "2rem" }}>
            <Grid item container>
                <Grid item>
                    <TextField id="outlined-basic"
                        label="Name"
                        size="small"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic"
                        label="Age"
                        size="small"
                        variant="outlined"
                        value={age ? age : ''}
                        onChange={(e) => setAge(Number(e.target.value))} />
                </Grid>
                <Button variant="contained"
                    onClick={submitHandler}>ADD</Button>
            </Grid>
            <Grid item container>
                {users && users.map((user) => (
                    <Grid container key={user.id}
                        style={{ margin: "20px" }}>
                        <Grid item container>Name: {user.name}</Grid>
                        <Grid item container>Age: {user.age}</Grid>
                        <Grid item container>
                            <Button variant="outlined"
                                sx={{ marginTop: '5px' }}
                                size="small"
                                onClick={(e) => removeUser(user.id)}>Delete</Button>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            <Grid item container>
                <Link href="/">
                    <Button variant="contained"
                        color='secondary'>
                        Home
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default Users;