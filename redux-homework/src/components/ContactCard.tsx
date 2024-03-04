import { ContactDto } from 'src/types/dto/ContactDto'
import { Card, ListGroup } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { AddToFavorites } from './AddToFavorites'
import { RemoveFromFavorites } from './RemoveFromFavorites'
import { observer } from 'mobx-react-lite'

interface ContactCardProps {
    contact: ContactDto
    withLink?: boolean
}

export const ContactCard = observer(
    ({ contact, withLink }: ContactCardProps) => {
        const { photo, id, name, phone, birthday, address } = contact
        const location = useLocation()

        return (
            <Card key={id}>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Body
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Card.Title>
                            {withLink ? (
                                <Link to={`/contact/${id}`}>{name}</Link>
                            ) : (
                                name
                            )}
                        </Card.Title>
                        {location.pathname === '/favorit' ? (
                            <RemoveFromFavorites id={contact.id} />
                        ) : (
                            <AddToFavorites contact={contact} />
                        )}
                    </Card.Body>
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to={`tel:${phone}`} target="_blank">
                                    {phone}
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>{birthday}</ListGroup.Item>
                            <ListGroup.Item>{address}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card.Body>
            </Card>
        )
    }
)
