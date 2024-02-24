import {
    Container,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material'
import { SearchBox } from '..'
import { useSelectNote } from '../../hooks/useSelectNote'
import { INotes } from '../../db'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'

const Sidebar = () => {
    const { selectNote, getNotes, notes, isNoteAdded } = useSelectNote()
    const [fetchedNotes, setFetchedNotes] = useState(notes)
    const [filteredNotes, setFilteredNotes] = useState(notes)
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const onNoteSelect = (id: INotes['id']) => {
        selectNote(id)
        navigate('/')
    }

    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(() => {
        setFetchedNotes(notes)
        setFilteredNotes(notes)
    }, [getNotes])

    useEffect(() => {
        getNotes()
    }, [isNoteAdded])

    useEffect(() => {
        if (debouncedSearchTerm.length) {
            setFilteredNotes(
                fetchedNotes.filter(
                    (i) =>
                        i.description
                            .toLocaleLowerCase()
                            .indexOf(debouncedSearchTerm) !== -1
                )
            )
        } else {
            setFilteredNotes(fetchedNotes)
        }
    }, [debouncedSearchTerm])

    return (
        <Container
            disableGutters
            sx={{
                borderRight: '2px solid #E9E9EA',
                width: 'max-content',
                padding: '0 0 0 0px',
            }}
        >
            <SearchBox setSearchTerm={setSearchTerm} />
            <List
                sx={{
                    padding: '10px',
                    height: '700px',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                }}
            >
                {filteredNotes.map((note) => {
                    return (
                        <ListItem
                            disableGutters
                            alignItems="flex-start"
                            onClick={() => onNoteSelect(note.id)}
                            key={note.id}
                            sx={{
                                borderBottom: '1px solid #E9E9EA',
                                borderRadius: '5px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                cursor: 'pointer',
                                ':hover': {
                                    backgroundColor: '#E9E9EA',
                                },
                            }}
                        >
                            <ListItemText
                                primary={`${note.title.slice(0, 21)}${
                                    note.title.length > 15 ? '...' : ''
                                }`}
                                primaryTypographyProps={{
                                    fontWeight: '700',
                                }}
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            fontWeight="600"
                                            color="#000"
                                            marginRight={1}
                                        >
                                            {format(
                                                new Date(note.date),
                                                'M/dd/yyyy'
                                            )}
                                        </Typography>
                                        {`${note.description.slice(0, 14)}...`}
                                    </>
                                }
                            />
                        </ListItem>
                    )
                })}
            </List>
        </Container>
    )
}

export default Sidebar
