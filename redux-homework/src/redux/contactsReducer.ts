import { contacts } from 'src/__data__'
import {
    ADD_NEW_CONTACT_ACTION,
    ProjectsActions,
    REMOVE_CONTACT_ACTION,
} from './actions'

export function contactsReducer(state = contacts, action: ProjectsActions) {
    switch (action.type) {
        case ADD_NEW_CONTACT_ACTION:
            return [...state, action.payload.contact]
        case REMOVE_CONTACT_ACTION:
            return state.filter((contact) => contact.id !== action.payload.id)
        default:
            return state
    }
}
