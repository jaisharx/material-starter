import Head from 'next/head';
import { Container, Box, Typography, Link, Button } from '@material-ui/core';

export default function Home() {
    return (
        <>
            <Head>
                <title>Material UI / Starter</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container maxWidth="sm">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Next.js example
                    </Typography>
                    <Link href="/about" color="secondary">
                        Go to the about page
                    </Link>
                </Box>
            </Container>
        </>
    );
}
