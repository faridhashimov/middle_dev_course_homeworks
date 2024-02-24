import { Alert, Box, Button, Container } from '@mui/material'
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
                <Alert sx={{ marginBottom: '10px' }}>404 Page Not Found</Alert>
                <Button variant="outlined">
                    <Link to="/">Back To Home Page</Link>
                </Button>
            </Box>
        </Container>
    )
}

export default NotFoundPage
