import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { contactsStore } from 'src/store/contactsStore'
import { observer } from 'mobx-react-lite'

export const GroupPage = observer(() => {
    const { groupId } = useParams<{ groupId: string }>()
    const [allcontacts, setAllcontacts] = useState<ContactDto[]>([])

    const contacts = contactsStore.contacts
    const groups = contactsStore.groups

    const [groupContacts, setGroupContacts] = useState<GroupContactsDto>()

    useEffect(() => {
        const findGroup = groups.find(({ id }) => id === groupId)
        setGroupContacts(findGroup)
        setAllcontacts(() => {
            if (findGroup) {
                return contacts.filter(({ id }) =>
                    findGroup.contactIds.includes(id)
                )
            }
            return []
        })
    }, [groupId])

    return (
        <Row className="g-4">
            {groupContacts ? (
                <>
                    <Col xxl={12}>
                        <Row xxl={3}>
                            <Col className="mx-auto">
                                <GroupContactsCard
                                    groupContacts={groupContacts}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row xxl={4} className="g-4">
                            {allcontacts.map((contact) => (
                                <Col key={contact.id}>
                                    <ContactCard contact={contact} withLink />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </>
            ) : (
                <Empty />
            )}
        </Row>
    )
})
