import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetchElements(categoryId, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        setData([])
        setHasMore(true)
    }, [categoryId])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            url: `https://rickandmortyapi.com/api/${categoryId}`,
            method: 'GET',
            params: { page: pageNumber },
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                setData((prevState) => {
                    return [
                        ...new Set([
                            ...prevState,
                            ...[...prevState, ...res.data.results],
                        ]),
                    ]
                })
                if (res.data.info.next === null) {
                    setHasMore(false)
                }
                setLoading(false)
            })
            .catch((e) => {
                if (axios.isCancel(e)) {
                    return
                }
                setLoading(false)
                setError(true)
                console.error(e)
            })

        return () => cancel()
    }, [categoryId, pageNumber])

    return {
        loading,
        error,
        hasMore,
        data,
    }
}
