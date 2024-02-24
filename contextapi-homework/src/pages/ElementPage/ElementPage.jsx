import { useParams } from 'react-router-dom'
import { Characters, Episode, Location } from '../../components'
import { useFetchElement } from '../../hooks'

import './ElementPage.css'
import '../CategoryPage/CategoryPage.css'

const ElementPage = () => {
    const { categoryId, elementId } = useParams()
    const { loading, error, data } = useFetchElement(categoryId, elementId)

    const element =
        categoryId === 'character' ? (
            <div className="category">
                <Characters item={data} />
            </div>
        ) : categoryId === 'episode' ? (
            <div className="category">
                <Episode item={data} />
            </div>
        ) : (
            <div className="category">
                <Location item={data} />
            </div>
        )

    return (
        <div className="pageContainer">
            {!loading && !error ? element : null}
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">Something went wrong...</div>}
        </div>
    )
}

export default ElementPage
