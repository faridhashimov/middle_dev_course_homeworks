import { groupContacts } from 'src/__data__'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export function groupContactsReducer(state: GroupContactsDto[] = groupContacts) {
    return state
}
