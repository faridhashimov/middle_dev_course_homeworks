import React from 'react'
import { useParams } from 'react-router-dom'
import { Characters, Episode, Location } from '../../components'
import characters from '../../data/characters.json'
import episode from '../../data/episode.json'
import location from '../../data/location.json'

import './ElementPage.css'
import '../CategoryPage/CategoryPage.css'

const ElementPage = () => {
    const { categoryId, elementId } = useParams()
    console.log(categoryId, elementId)

    return (
        <div className="pageContainer">
            {/* <div className="element">
              
            </div> */}
            {categoryId === 'heroes' ? (
                <div className="category">
                    <Characters item={characters[elementId - 1]} />
                </div>
            ) : categoryId === 'episodes' ? (
                <div className="category">
                    <Episode item={episode[elementId - 1]} />
                </div>
            ) : (
                <div className="category">
                    <Location item={location[elementId - 1]} />
                </div>
            )}
        </div>
    )
}

export default ElementPage
