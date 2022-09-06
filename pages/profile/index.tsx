import { Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";

interface Props{

}

const ProfileHome = ({}: Props) => {
    return (
        <Grid container>
            <Typography variant="h1">
                Hello, User
            </Typography>
        </Grid>
    );
}

export const getServerSideProps: GetServerSideProps= async ({req, res})=>{

    const authToken= req.cookies['auth-token']
    console.log('authToken', authToken);
    
    if(!authToken){
        return {
            props:{},
            redirect: {
                destination:'/login',
                permanent:true
            }
        }
    }

    return {
        props:{},
    }
}

export default ProfileHome;