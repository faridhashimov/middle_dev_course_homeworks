import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import SimpleMdeReact from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { insertNote } from '../../manageData'
import { useSelectNote } from '../../hooks/useSelectNote'

const Workspace = () => {
    const [title, setTitle] = useState('Новая заметка')
    const [value, setValue] = useState('')
    const { onNoteAdd } = useSelectNote()

    useEffect(() => {}, [])

    const onChange = useCallback((value: string) => {
        setValue(value)
    }, [])

    const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }, [])

    const onSubmint = () => {
        insertNote({ title, description: value, date: new Date().toString() })
        onNoteAdd()
    }

    return (
        <Container disableGutters sx={{ overflow: 'hidden' }}>
            <Box sx={{ padding: '0 10px 20px 10px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '150px',
                    }}
                >
                    <Typography
                        mb={2}
                        variant="h5"
                        sx={{ textAlign: 'center' }}
                    >
                        Новая заметка
                    </Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Заголовок"
                        name="title"
                        value={title}
                        onChange={onTitleChange}
                    />
                </Box>
                <SimpleMdeReact value={value} onChange={onChange} />
                <Button
                    onClick={onSubmint}
                    fullWidth
                    variant="outlined"
                    color="note"
                >
                    Save
                </Button>
            </Box>
        </Container>
    )
}

export default Workspace
