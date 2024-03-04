import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { contactsStore } from 'src/store/contactsStore'
import { observer } from 'mobx-react-lite'

export const ContactListPage = observer(() => {
    const [contacts, setContacts] = useState<ContactDto[]>([])
    const [groupsData, setGroupsData] = useState<GroupContactsDto[]>([])

    const data = contactsStore.contacts
    const groups = contactsStore.groups

    useEffect(() => {
        contactsStore.getContacts()
    }, [])

    useEffect(() => {
        data && setContacts(data)
    }, [data])
    useEffect(() => {
        groups && setGroupsData(groups)
    }, [groups])

    const onSubmit = (fv: Partial<FilterFormValues>) => {
        let findContacts = contacts

        if (fv.name) {
            const fvName = fv.name.toLowerCase()
            findContacts = findContacts.filter(
                ({ name }) => name.toLowerCase().indexOf(fvName) > -1
            )
        }

        if (fv.groupId) {
            const groupContacts = groupsData.find(({ id }) => id === fv.groupId)

            if (groupContacts) {
                findContacts = findContacts.filter(({ id }) =>
                    groupContacts.contactIds.includes(id)
                )
            }
        }

        setContacts(findContacts)
    }

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm
                    groupContactsList={groupsData}
                    initialValues={{}}
                    onSubmit={onSubmit}
                />
            </Col>
            <Col>
                <Row xxl={4} className="g-4">
                    {contacts.map((contact) => (
                        <Col key={contact.id}>
                            <ContactCard contact={contact} withLink />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
})
