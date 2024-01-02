import { Card, CardContent, CardMedia } from '@mui/material'
import './Characters.css'
import { TypographyBox } from '../../components'

const Characters = ({ item }) => {
    const { image, type, gender, status, species, name, created } = item

    return (
        <Card sx={{ height: '100%' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="green iguana"
            />
            <CardContent sx={{ padding: '5px' }}>
                <TypographyBox prop="Name" value={name} />
                <TypographyBox prop="Status" value={status} />
                <TypographyBox prop="Species" value={species} />
                <TypographyBox prop="Type" value={type} />
                <TypographyBox prop="Gender" value={gender} />
                <TypographyBox prop="Created" value={created} />
            </CardContent>
        </Card>
    )
}

export default Characters
