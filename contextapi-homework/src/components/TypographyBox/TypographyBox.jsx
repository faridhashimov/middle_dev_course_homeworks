import { Box, Typography } from '@mui/material'

const TypographyBox = ({ prop, value }) => {
    return (
        <Box>
            <Typography variant="span" fontWeight={600} fontSize={16}>
                {prop}:
            </Typography>
            <Typography variant="p" fontSize={14}>
                &nbsp;{prop === 'Created' ? value?.slice(0, 10) : value}
            </Typography>
        </Box>
    )
}

export default TypographyBox
