import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Characters, Episode, Location } from '../../components'
import './CategoryPage.css'
import characters from '../../data/characters.json'
import episode from '../../data/episode.json'
import location from '../../data/location.json'
import { useEffect } from 'react'

const CategoryPage = () => {
    const { categoryId } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if (searchParams.get('sort') === null) {
            searchParams.set('sort', 'asc')
            setSearchParams(searchParams)
        }
    }, [searchParams, setSearchParams])

    const sortArr = (arr) => {
        let sortedArr

        if (searchParams.get('sort') === 'asc') {
            sortedArr = arr.sort((a, b) => (a.created > b.created ? 1 : -1))
        } else {
            sortedArr = arr.sort((a, b) => (a.created > b.created ? -1 : 1))
        }

        return sortedArr
    }

    return (
        <div className="categoryPageContainer">
            <div className="categories">
                <div className="categoryHeader">
                    <h3>
                        {categoryId.charAt(0).toUpperCase() +
                            categoryId.slice(1)}
                    </h3>
                    <div className="sort">
                        <label htmlFor="sort">Sort by:</label>
                        <select
                            onChange={(e) =>
                                setSearchParams({ sort: e.target.value })
                            }
                            name="sort"
                            id="sort"
                        >
                            <option value="asc">ASC</option>
                            <option value="desc">DESC</option>
                        </select>
                    </div>
                </div>
                <div className="categoriesContainer">
                    {categoryId === 'heroes'
                        ? sortArr(characters).map((item) => (
                              <Link
                                  key={item.id}
                                  className="menuLink"
                                  to={`/category/heroes/${item.id}`}
                              >
                                  <div className="category">
                                      <Characters item={item} />
                                  </div>
                              </Link>
                          ))
                        : categoryId === 'episodes'
                        ? sortArr(episode).map((item) => (
                              <Link
                                  key={item.id}
                                  className="menuLink"
                                  to={`/category/episodes/${item.id}`}
                              >
                                  <div className="category">
                                      <Episode item={item} />
                                  </div>
                              </Link>
                          ))
                        : sortArr(location).map((item) => (
                              <Link
                                  key={item.id}
                                  className="menuLink"
                                  to={`/category/locations/${item.id}`}
                              >
                                  <div className="category">
                                      <Location item={item} />
                                  </div>
                              </Link>
                          ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryPage
