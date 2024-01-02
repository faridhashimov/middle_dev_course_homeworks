import { Card, CardContent } from '@mui/material'
import TypographyBox from '../TypographyBox/TypographyBox'
import '../Characters/Characters.css'

const Location = ({ item }) => {
    const { name, type, dimension, created } = item
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent sx={{ padding: '5px' }}>
                <TypographyBox prop="Name" value={name} />
                <TypographyBox prop="Type" value={type} />
                <TypographyBox prop="Dimension" value={dimension} />
                <TypographyBox prop="Created" value={created} />
            </CardContent>
        </Card>
    )
}

export default Location
