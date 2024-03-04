import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { contactsStore } from 'src/store/contactsStore'

export const GroupListPage = observer(() => {
    const groups = contactsStore.groups

    useEffect(() => {
        contactsStore.getGroups()
    }, [])

    return (
        <Row xxl={4}>
            {groups.map((groupContacts) => (
                <Col key={groupContacts.id}>
                    <GroupContactsCard groupContacts={groupContacts} withLink />
                </Col>
            ))}
        </Row>
    )
})
