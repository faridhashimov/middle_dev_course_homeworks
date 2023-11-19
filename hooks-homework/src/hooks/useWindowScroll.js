import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
    const [scroll, setScroll] = useState({
        x: 0,
        y: 0,
    })

    useWindowEvent('scroll', () => {
        setScroll({
            x: window.scrollX.toFixed(2),
            y: window.scrollY.toFixed(2),
        })
    })

    function scrollTo({ y }) {
        window.scrollTo({
            top: y,
            // left: x,
            behavior: 'smooth',
        })
    }

    return [scroll, scrollTo]
}
