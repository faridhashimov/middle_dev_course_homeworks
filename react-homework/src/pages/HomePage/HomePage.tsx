import { Container } from '@mui/material'
import { Sidebar } from '../../components'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <Container
            disableGutters
            sx={{
                width: '1150px',
                minHeight: '700px',
                display: 'flex',
                border: '2px solid #cdcdcd',
                borderRadius: '10px',
                margin: '0 auto',
                boxShadow: '0px 0px 14px 1px rgba(34, 60, 80, 0.21)',
            }}
        >
            <Sidebar />
            <Outlet />
        </Container>
    )
}

export default HomePage
