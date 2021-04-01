import { Container, Box, Typography, Button } from '@material-ui/core';

export default function About() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    naked
                    href="/"
                >
                    Go to the main page
                </Button>
            </Box>
        </Container>
    );
}
