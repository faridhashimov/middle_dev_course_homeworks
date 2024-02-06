import { State } from 'src/types/common'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export interface CommonPageProps {
    contactsState: State<ContactDto[]>
    groupContactsState: State<GroupContactsDto[]>
}
