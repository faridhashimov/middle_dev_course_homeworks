import { useEffect, useState } from 'react'

export function useHover(myRef) {
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        const element = myRef.current
        if (element) {
            element.addEventListener('mouseenter', () => setHovered(true))
            element.addEventListener('mouseleave', () => setHovered(false))

            return () => {
                element.removeEventListener('mouseenter', () =>
                    setHovered(true)
                )
                element.removeEventListener('mouseleave', () =>
                    setHovered(false)
                )
            }
        }
    }, [myRef])

    return { hovered }
}
