import { useContext } from "react"
import { NoteContext } from "../context/NoteContext"

export const useSelectNote = () => {
    return useContext(NoteContext)
}