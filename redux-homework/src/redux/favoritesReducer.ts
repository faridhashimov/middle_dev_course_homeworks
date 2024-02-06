import { ContactDto } from 'src/types/dto/ContactDto'
import {
    ADD_TO_FAVORITES_ACTION,
    ProjectsActions,
    REMOVE_FROM_FAVORITES_ACTION,
} from './actions'

export function favoritesReducer(
    state: ContactDto[] | undefined = [],
    action: ProjectsActions
) {
    switch (action.type) {
        case ADD_TO_FAVORITES_ACTION:
            return [...state, action.payload.contact]
        case REMOVE_FROM_FAVORITES_ACTION:
            return [
                ...state.filter((contact) => contact.id !== action.payload.id),
            ]
        default:
            return state
    }
}
