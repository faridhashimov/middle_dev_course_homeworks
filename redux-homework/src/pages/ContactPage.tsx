import React, { FC, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useAppSelector } from 'src/redux/hooks'
import { useGetContactsQuery } from 'src/redux/contacts'

export const ContactPage: FC = () => {
    const { contactId } = useParams<{ contactId: string }>()
    const [contact, setContact] = useState<ContactDto>()

    const { data: contacts } = useGetContactsQuery()

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
}
