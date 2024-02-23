import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useViewportSize() {
    const [height, setHeight] = useState()
    const [width, SetWidth] = useState()

    useWindowEvent('load', () => {
        setHeight(window.innerHeight)
        SetWidth(window.innerWidth)
    })

    useWindowEvent('resize', () => {
        setHeight(window.innerHeight)
        SetWidth(window.innerWidth)
    })

    return { height, width }
}
