import { useLayoutEffect, useRef, useState } from 'react'

export function useToggle(defaultValue) {
    const [arr, setArr] = useState(defaultValue || [])
    const [value, setValue] = useState()
    const arrIndex = useRef(0)

    // console.log('arr:', arr)
    // console.log('value:', arr[arrIndex.current])

    useLayoutEffect(() => {
        if (defaultValue) {
            setValue(arr[0])
        } else {
            setValue('')
        }
    }, [])

    function indexInc() {
        arrIndex.current =
            arrIndex.current < arr.length - 1 ? ++arrIndex.current : 0
        setValue(arr[arrIndex.current])
    }

    function toggleValue(valueProp) {
        if (
            typeof valueProp === 'undefined' &&
            typeof defaultValue === 'object'
        ) {
            indexInc()
        } else if (arr.includes(valueProp)) {
            indexInc()
        } else if (
            typeof valueProp === 'undefined' &&
            typeof defaultValue === 'undefined' &&
            typeof value !== 'boolean'
        ) {
            setValue(true)
        } else if (typeof value === 'boolean') {
            setValue((prevState) => !prevState)
        } else if (typeof valueProp === 'string' && !arr.includes(valueProp)) {
            setArr((arr) => [...arr, valueProp])
            setValue(valueProp)
        } else {
            setValue('')
        }
    }

    return [value, toggleValue]
}
