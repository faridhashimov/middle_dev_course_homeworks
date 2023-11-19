import { useEffect, useState } from 'react'

export function useLocalStorage(key) {
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem(key)) || String(key)
    )

    function setItem(newToken) {
        localStorage.setItem(key, JSON.stringify(newToken))
        setToken(localStorage.getItem(key))
    }

    function removeItem() {
        localStorage.removeItem(key)
        setToken(localStorage.getItem(key))
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(key))
    }, [key])

    return [
        token,
        {
            setItem,
            removeItem,
        },
    ]
}
