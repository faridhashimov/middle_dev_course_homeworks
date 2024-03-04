import { makeAutoObservable } from 'mobx'
import { api } from 'src/api'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

const FAVORITE_CONTACTS = 'h@dDsKish3272'

export const contactsStore = makeAutoObservable({
    contacts: [] as ContactDto[],
    groups: [] as GroupContactsDto[],
    favorites: JSON.parse(
        localStorage.getItem(FAVORITE_CONTACTS) ?? '[]'
    ) as ContactDto[],

    *getContacts() {
        const result: ContactDto[] = yield api.getContacts()
        if (result) {
            contactsStore.contacts = result
        }
    },

    *getGroups() {
        const result: GroupContactsDto[] = yield api.getGroups()
        console.log(result);

        if (result) {
            contactsStore.groups = result
        }
    },

    addToFavorites(payload: ContactDto) {
        this.favorites.push(payload)
        localStorage.setItem(FAVORITE_CONTACTS, JSON.stringify(this.favorites))
    },

    removeFromFavorites(payload: ContactDto['id']) {
        this.favorites = this.favorites.filter(
            (contact) => contact.id !== payload
        )
        localStorage.setItem(
            FAVORITE_CONTACTS,
            JSON.stringify(
                this.favorites.filter((contact) => contact.id !== payload)
            )
        )
    },
})
