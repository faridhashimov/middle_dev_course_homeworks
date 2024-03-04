import { ContactDto } from './types/dto/ContactDto'
import { GroupContactsDto } from './types/dto/GroupContactsDto'
import { Response } from './types/response'

class Api {
    async getContacts(): Promise<Response<ContactDto[]>> {
        const response = await this.fetch(
            'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/190/h/560e0501fa0e19aed9ef169df6095f00.json'
        )

        return response
    }

    async getGroups(): Promise<Response<GroupContactsDto[]>> {
        const response = await this.fetch(
            'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/503/h/03b7cef5194e433422491a8f22413a18.json'
        )

        return response
    }

    async fetch(url: string) {
        return fetch(url).then((res) => res.json())
    }
}

export const api = new Api()
