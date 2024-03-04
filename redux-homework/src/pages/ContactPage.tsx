import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { contactsStore } from 'src/store/contactsStore'
import { observer } from 'mobx-react-lite'

export const ContactPage = observer(() => {
    const { contactId } = useParams<{ contactId: string }>()
    const [contact, setContact] = useState<ContactDto>()

    const contacts = contactsStore.contacts
    useEffect(() => {
        contacts &&
            setContact(() => contacts.find(({ id }) => id === contactId))
    }, [contactId])

    return (
        <Row xxl={3}>
            <Col className={'mx-auto'}>
                {contact ? <ContactCard contact={contact} /> : <Empty />}
            </Col>
        </Row>
    )
})
