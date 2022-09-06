import { Button, Grid } from '@mui/material'
import { GetStaticProps } from 'next'
import Link from 'next/link'

interface Post {
    userId: number
    id: number
    title: string
    body: string
}

interface Props {
    posts: Post[]
}

const Posts = ({ posts }: Props) => {

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
            <h2>Posts Page</h2>
            {posts.map((post) => {
                return <Grid container
                    key={post.id}
                    sx={{ margin: '0.5rem' }}>
                    <Grid item container>Title: {post.title}</Grid>
                </Grid>
            })}
        </Grid>
    );
}

export const getStaticProps: GetStaticProps = async () => {    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return {
        props: {
            posts
        }
    }
}

export default Posts;