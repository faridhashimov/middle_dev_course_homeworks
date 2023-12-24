import { useReducer, useRef } from 'react'

export function useToggle(defaultValue) {
    const arrIndex = useRef(0)
    const initialState = !defaultValue ? true : defaultValue[0]

    function reducer(value, action) {
        switch (action.type) {
            case 'boolean': {
                return !value
            }
            case 'object': {
                return action.payload
            }
            case 'undefined': {
                return true
            }
            case 'string': {
                return action.payload
            }
            default:
                throw new Error()
        }
    }

    function indexInc() {
        arrIndex.current =
            arrIndex.current < defaultValue.length - 1 ? ++arrIndex.current : 0
    }

    const handleArray = () => {
        dispatch({ type: 'object', payload: defaultValue[arrIndex.current] })
    }
    const handleBoolean = () => {
        dispatch({ type: 'boolean' })
    }
    const handleStr = (prop) => {
        dispatch({ type: 'string', payload: prop })
    }
    const handleEmptyValue = () => {
        dispatch({ type: 'undefined' })
    }

    const [value, dispatch] = useReducer(reducer, initialState)

    function toggle(prop) {
        if (defaultValue) {
            indexInc()
        }
        typeof prop === 'string'
            ? handleStr(prop)
            : Array.isArray(defaultValue)
            ? handleArray()
            : typeof initialState === 'boolean'
            ? handleBoolean()
            : handleEmptyValue()
    }

    return [value, toggle]
}
