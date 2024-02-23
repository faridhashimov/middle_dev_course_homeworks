import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function Loading() {
    return (
        <Box sx={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <CircularProgress />
        </Box>
    )
}
