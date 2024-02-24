import db, { INotes } from './db'

export const insertNote = async ({ title, description, date }: INotes) => {
    try {
        await db.notes.add({ title, description, date })
        console.log('Data inserted successfully')
    } catch (error) {
        console.log('Cannot insert data', error)
    }
}

export const getAllNotes = async () => {
    try {
        const note = await db.notes.toArray()
        return note
    } catch (error) {
        console.log('Cannot get notes', error)
        return []
    }
}

export const getNote = async (noteId: INotes['id']) => {
    try {
        const note = await db.notes.get({ id: noteId })
        return note
    } catch (error) {
        console.log('Cannot get note', error)
    }
}

export const updateNote = async ({ id, title, description, date }: INotes) => {
    try {
        await db.notes.update(id!, { title, description, date })
        console.log('Data updated succesfully')
    } catch (error) {
        console.log('Cannot update note', error)
    }
}

export const deleteNote = async (id: number) => {
    try {
        await db.notes.delete(id!)
    } catch (error) {
        console.log('Cannot delete note', error)
    }
}
