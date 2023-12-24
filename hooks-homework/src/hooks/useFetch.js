import { useEffect, useState } from 'react'

export function useFetch(url) {
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    const fetchData = (url, params = undefined) => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    setError(true)
                    setIsloading(false)
                }
                return res.json()
            })
            .then((res) => {
                setData(params ? res.slice(0, params._limit) : res)
                setIsloading(false)
            })
            .catch((err) => {
                setError(true)
                setIsloading(false)
            })
    }

    useEffect(() => {
        setIsloading(true)

        fetchData(url)
    }, [url])

    function refetch({ params }) {
        setIsloading(true)

        fetchData(url, params)
    }

    return {
        data,
        isLoading,
        error,
        refetch,
    }
}
