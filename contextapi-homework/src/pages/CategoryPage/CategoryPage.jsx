import { lazy, useCallback, useEffect, useRef } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Characters, Episode, Loading, Location } from '../../components'
import { useFetchElements } from '../../hooks'
import './CategoryPage.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const CategoryPage = ({ pageNum, setPageNum }) => {
    const { categoryId } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const { loading, error, data, hasMore } = useFetchElements(
        categoryId,
        pageNum
    )
    // const Characters = lazy(() =>
    //     import('../../components/Characters/Characters.jsx')
    // )
    // const Episode = lazy(() => import('../../components/Episode/Episode.jsx'))
    // const Location = lazy(() =>
    //     import('../../components/Location/Location.jsx')
    // )
    const observer = useRef()

    useEffect(() => {
        if (searchParams.get('sort') === null) {
            searchParams.set('sort', 'asc')
            setSearchParams(searchParams)
        }
    }, [searchParams, setSearchParams])

    const lastNodeRef = useCallback(
        (node) => {
            if (loading) return

            if (observer.current) {
                observer.current.disconnect()
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNum((prevState) => prevState + 1)
                }
            })

            if (node) {
                observer.current.observe(node)
            }
        },
        [loading, hasMore]
    )

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
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">
                            Sort
                        </InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value="asc"
                            label="Sort"
                            onChange={(e) =>
                                setSearchParams({ sort: e.target.value })
                            }
                        >
                            <MenuItem value="asc">ASC</MenuItem>
                            <MenuItem value="desc">DESC</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="categoriesContainer">
                    {categoryId === 'character'
                        ? sortArr(data).map((item, index) => {
                              if (data.length - 1 === index + 1) {
                                  return (
                                      <Link
                                          key={item.id}
                                          className="menuLink"
                                          to={`/category/character/${item.id}`}
                                      >
                                          <div
                                              ref={lastNodeRef}
                                              className="category"
                                          >
                                              <Characters item={item} />
                                          </div>
                                      </Link>
                                  )
                              } else {
                                  return (
                                      <Link
                                          key={item.id}
                                          className="menuLink"
                                          to={`/category/character/${item.id}`}
                                      >
                                          <div className="category">
                                              <Characters item={item} />
                                          </div>
                                      </Link>
                                  )
                              }
                          })
                        : categoryId === 'episode'
                        ? sortArr(data).map((item, index) => {
                              if (data.length - 10 === index + 1) {
                                  return (
                                      <Link
                                          key={item.id}
                                          className="menuLink"
                                          to={`/category/episode/${item.id}`}
                                      >
                                          <div
                                              ref={lastNodeRef}
                                              className="category"
                                          >
                                              <Episode item={item} />
                                          </div>
                                      </Link>
                                  )
                              } else {
                                  return (
                                      <Link
                                          key={item.id}
                                          className="menuLink"
                                          to={`/category/episode/${item.id}`}
                                      >
                                          <div className="category">
                                              <Episode item={item} />
                                          </div>
                                      </Link>
                                  )
                              }
                          })
                        : sortArr(data).map((item, index) => {
                              if (data.length - 10 === index + 1) {
                                  return (
                                      <Link
                                          key={item.id}
                                          className="menuLink"
                                          to={`/category/location/${item.id}`}
                                      >
                                          <div
                                              ref={lastNodeRef}
                                              className="category"
                                          >
                                              <Location item={item} />
                                          </div>
                                      </Link>
                                  )
                              } else {
                                  return (
                                      <Link
                                          key={item.id}
                                          className="menuLink"
                                          to={`/category/location/${item.id}`}
                                      >
                                          <div className="category">
                                              <Location item={item} />
                                          </div>
                                      </Link>
                                  )
                              }
                          })}
                    {loading ? <Loading /> : null}
                    {error && (
                        <div className="error">Something went wrong...</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CategoryPage
