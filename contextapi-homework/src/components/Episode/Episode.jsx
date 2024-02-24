import { Card, CardContent } from '@mui/material'
import '../Characters/Characters.css'
import TypographyBox from '../TypographyBox/TypographyBox'

const Episode = ({ item }) => {
    const { name, air_date, episode, created } = item
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent sx={{ padding: '5px' }}>
                <TypographyBox prop="Name" value={name} />
                <TypographyBox prop="Air Date" value={air_date} />
                <TypographyBox prop="Episode" value={episode} />
                <TypographyBox prop="Created" value={created} />
            </CardContent>
        </Card>
    )
}

export default Episode
