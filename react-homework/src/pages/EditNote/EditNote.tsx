import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import SimpleMdeReact from 'react-simplemde-editor'
import { Box, Container, TextField, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSelectNote } from '../../hooks/useSelectNote'

const EditNote = () => {
    const { noteId } = useParams()
    const {
        selectNote,
        note: fetchedNote,
        onNoteUpdate,
        isNoteUpdated,
        onNoteAdd
    } = useSelectNote()
    const [title, setTitle] = useState<string>(fetchedNote?.title)
    const [value, setValue] = useState<string>(fetchedNote?.description)

    useEffect(() => {
        selectNote(Number(noteId))
    }, [])

    useEffect(() => {
        selectNote(Number(noteId))
    }, [isNoteUpdated])

    const onChange = useCallback((value: string) => {
        setValue(value)
    }, [])

    const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }, [])

    useEffect(() => {
        const id = setTimeout(() => {
            onNoteUpdate({
                id: Number(noteId),
                title,
                description: value,
                date: new Date().toString(),
            })
            onNoteAdd()
        }, 1000)

        return () => {
            clearTimeout(id)
        }
    }, [value, title])

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
            </Box>
        </Container>
    )
}

export default EditNote
