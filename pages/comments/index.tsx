import { Button, Grid } from '@mui/material'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

interface Comment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

interface Props {
    comments: Comment[]
}

const Comments = ({ comments }: Props) => {

    return (
        <Grid container sx={{ margin: '2rem' }}>
            <Grid container >
                <Link href="/">
                    <Button variant="contained"
                        color='secondary'>
                        Home
                    </Button>
                </Link>
            </Grid>
            <h2>Comments Page</h2>
            {comments.map((comment) => {
                return <Grid container
                    key={comment.id}
                    sx={{ margin: '0.5rem' }}>
                    <Grid item container>Comment: {comment.name}</Grid>
                </Grid>
            })}
        </Grid>
    );
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    const authToken= req.cookies['auth-token']
    if(!authToken){
        return {
            props:{comments:[]},
            redirect:{
                destination:'/login',
                // permanent: false
            }
        }
    }
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await res.json()
    // console.log(comments)
    return {
        props: {
            comments
        }
    }
}

export default Comments;