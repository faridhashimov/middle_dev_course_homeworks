import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetchElement(categoryId, elementId) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            url: `https://rickandmortyapi.com/api/${categoryId}/${elementId}`,
            method: 'GET',
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                console.log(res.data)
                setData(res.data)
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
    }, [categoryId, elementId])

    return {
        loading,
        error,
        data,
    }
}
