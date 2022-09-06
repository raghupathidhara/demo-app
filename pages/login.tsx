import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/router";
import Cookie from 'js-cookie'

const Login = () => {

    const [email, setEmail]= useState<string>("")
    const [password, setPassword]= useState<string>('')
    const router= useRouter()

    const submitHandler=()=>{

        const data={
            email,
            password
        }
        
        axios.put('http://localhost:3000/api/login', data).then((res)=>{
            
            Cookie.set('auth-token', res.data.token, {expires: 1})
            router.push('/profile')
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    return (
        <Grid container sx={{marign: "4rem"}}>
            <Grid item container>
                <TextField label="Username" defaultValue={''} onChange={(e)=>setEmail(e.target.value)}/>
            </Grid>
            <Grid item container>
                <TextField  label="Password" defaultValue={''} onChange={(e)=>setPassword(e.target.value)} />
            </Grid>
            <Grid item container>
                <Button onClick={submitHandler}>Login</Button>
            </Grid>
        </Grid>
    );
}

export default Login;