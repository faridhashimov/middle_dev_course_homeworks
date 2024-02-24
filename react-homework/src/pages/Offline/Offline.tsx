import { Alert, Box, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Alert sx={{ marginBottom: '10px' }}>
                    No internet connection
                </Alert>
                <Typography variant="body1">
                    Sorry this page isn't available offline
                </Typography>
                <Button variant="outlined">
                    <Link to="/">Back To Home Page</Link>
                </Button>
            </Box>
        </Container>
    )
}

export default NotFoundPage
