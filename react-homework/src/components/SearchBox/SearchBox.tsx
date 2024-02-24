import { Box, IconButton, InputBase, Paper } from '@mui/material'

import { Search } from '@mui/icons-material'

type SearcBoxPropType = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBox = ({ setSearchTerm }: SearcBoxPropType) => {
    return (
        <Box sx={{ padding: '10px 10px', borderBottom: '1px solid #cdcdcd' }}>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search note"
                    inputProps={{ 'aria-label': 'search note' }}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    aria-label="search"
                >
                    <Search />
                </IconButton>
            </Paper>
        </Box>
    )
}

export default SearchBox
