import {
    Box,
    Button,
    CircularProgress,
    Container,
    Modal,
    Typography,
} from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useSelectNote } from '../../hooks/useSelectNote'
import { deleteNote } from '../../manageData'
import { Link, useNavigate } from 'react-router-dom'
import { INotes } from '../../db'

import { marked } from 'marked'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const Note = () => {
    const [note, setNote] = useState<INotes>()
    const {
        note: selectedNote,
        notes,
        isLoading,
        onNoteDelete,
        selectNote,
    } = useSelectNote()

    // Modal
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    //-------------------------------

    const navigate = useNavigate()
    useEffect(() => {
        setNote(selectedNote)
    }, [selectedNote])

    const onDeleteNote = () => {
        deleteNote(selectedNote.id!)
        onNoteDelete()
        // Новый код
        selectNote(notes.length - 1)
        // navigate('/')
        setNote(notes[notes.length - 1])
        handleClose()
    }

    const onEditNote = () => {
        navigate(`/${note?.id}`)
    }

    const plainText = () => {
        const rawMarkup = marked.parse(`${note?.description}`)
        return { __html: rawMarkup }
    }

    return (
        <Container sx={{ padding: '20px' }}>
            <Box
                height={50}
                mb={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box onClick={handleOpen}>
                    <Delete style={{ color: '#F3B900', cursor: 'pointer' }} />
                </Box>
                <Box>
                    <Link
                        style={{
                            border: '1px solid #F3B900',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            color: '#F3B900',
                        }}
                        to="/new"
                    >
                        Добавить заметку
                    </Link>
                </Box>
                <Box>
                    <Edit
                        onClick={onEditNote}
                        style={{ color: '#F3B900', cursor: 'pointer' }}
                    />
                </Box>
            </Box>
            <Container disableGutters>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <Box>
                        <Box mb={2}>
                            <Typography variant="h4">{note?.title}</Typography>
                        </Box>
                        <Box>
                            <p dangerouslySetInnerHTML={plainText()} />
                        </Box>
                    </Box>
                )}
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Удалить заметку?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Подтвердить удаление заметки?
                    </Typography>
                    <Box
                        mt={4}
                        sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <Button
                            onClick={handleClose}
                            sx={{ marginRight: '10px' }}
                            variant="contained"
                            color="success"
                        >
                            Отмена
                        </Button>
                        <Button
                            onClick={onDeleteNote}
                            variant="outlined"
                            color="error"
                        >
                            Удалить
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Container>
    )
}

export default Note
