import { createContext, useState } from 'react'
import { INotes } from '../db'
import { getNote, getAllNotes, updateNote } from '../manageData'
import { IProviderProps } from './AuthContext'

interface NotexContextType {
    note: INotes
    notes: INotes[]
    isNoteAdded: number
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    isNoteUpdating: boolean
    isNoteUpdated: boolean
    selectNote: (id: INotes['id']) => void
    getNotes: () => void
    onNoteAdd: () => void
    onNoteDelete: () => void
    onNoteUpdate: ({ id, title, description }: INotes) => void
}

export const NoteContext = createContext<NotexContextType>({
    note: {
        id: 1,
        title: 'Шмот',
        date: '19.05.2023',
        description: 'Фронтенд',
    },
    notes: [],
    isNoteAdded: 0,
    isLoading: false,
    isSuccess: false,
    isError: false,
    isNoteUpdating: false,
    isNoteUpdated: false,
    selectNote: () => {},
    getNotes: () => [],
    onNoteAdd: () => 0,
    onNoteDelete: () => 0,
    onNoteUpdate: () => 0,
})

export const NoteProvider = ({ children }: IProviderProps) => {
    const [note, setNote] = useState<INotes>(
        () => JSON.parse(localStorage.getItem('note') || '{}') || null
    )
    const [notes, setNotes] = useState<INotes[]>([])
    const [isNoteAdded, setIsNoteAdded] = useState(0)
    // Get single note statuses
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    // Get all notes statuses
    const [isNotesLoading, setIsNotesLoading] = useState(false)
    const [isNotesSuccess, setIsNotesSuccess] = useState(false)
    const [isNotesError, setIsNotesError] = useState(false)
    // Update note statuses
    const [isNoteUpdating, setIsNoteUpdating] = useState(false)
    const [isNoteUpdated, setIsNoteUpdated] = useState(false)
    const [isNoteUpdateError, setIsNoteUpdateError] = useState(false)

    const selectNote = async (noteId: INotes['id']) => {
        setIsLoading(true)
        const note = await getNote(noteId)
        if (typeof note === 'undefined') {
            setIsLoading(false)
            setIsError(true)
        } else {
            setIsSuccess(true)
            setIsError(true)
            localStorage.setItem('note', JSON.stringify(note))
            setIsLoading(false)
            setNote(note)
        }
    }

    const getNotes = async () => {
        setIsNotesLoading(true)
        const notes = await getAllNotes()
        if (typeof note === 'undefined') {
            setIsNotesLoading(false)
            setIsNotesError(true)
        } else {
            setIsNotesSuccess(true)
            setIsNotesError(true)
            setIsNotesLoading(false)
            setNotes(notes)
        }
    }

    const onNoteUpdate = async ({ id, title, description }: INotes) => {
        setIsNoteUpdating(true)
        try {
            await updateNote({
                id,
                title,
                description,
                date: new Date().toString(),
            })
            setIsNoteUpdating(false)
            setIsNoteUpdated(true)
        } catch (error) {
            setIsNoteUpdating(false)
            setIsNoteUpdateError(true)
        }
    }

    const onNoteAdd = () => {
        setIsNoteAdded((prev) => prev + 1)
    }
    const onNoteDelete = () => {
        setIsNoteAdded((prev) => prev - 1)
    }

    const value = {
        note,
        isNoteAdded,
        onNoteAdd,
        onNoteDelete,
        notes,
        isLoading,
        isSuccess,
        isError,
        isNotesLoading,
        isNotesSuccess,
        isNotesError,
        isNoteUpdating,
        isNoteUpdated,
        isNoteUpdateError,
        selectNote,
        getNotes,
        onNoteUpdate,
    }

    return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
}
