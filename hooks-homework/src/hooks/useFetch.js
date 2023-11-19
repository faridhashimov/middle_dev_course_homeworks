import { useEffect, useState } from 'react'

export function useFetch(url) {
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setIsloading(true)

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    setError(true)
                    setIsloading(false)
                }
                return res.json()
            })
            .then((res) => {
                setData(res)
                setIsloading(false)
            })
            .catch((err) => {
                setError(true)
                setIsloading(false)
            })
    }, [url])

    function refetch({ params }) {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    setError(true)
                    setIsloading(false)
                }
                return res.json()
            })
            .then((res) => {
                setData(res.slice(0, params._limit))
                setIsloading(false)
            })
            .catch((err) => {
                setError(true)
                setIsloading(false)
            })
    }

    return {
        data,
        isLoading,
        error,
        refetch,
    }
}
