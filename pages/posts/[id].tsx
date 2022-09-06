import { Button, Grid } from '@mui/material'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

interface Post {
    userId: number
    id: number
    title: string
    body: string
}

interface Props {
    post: Post
}

const Post = ({ post }: Props) => {

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
            <Grid container>
                <h2>Post Page</h2>
            </Grid>
            {post ? (<Grid container
                key={post.id}
                sx={{ margin: '0.5rem' }}>
                <Grid item container>Id: {post.id}</Grid>
                <Grid item container>Title: {post.title}</Grid>
            </Grid>) : <h4>Loading...</h4>}
        </Grid>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
        fallback: true //false, 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params!.id}`)
    const post = await res.json()
    return {
        props: {
            post
        },
    }
}

export default Post;