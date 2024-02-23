import React from 'react'
import './Button.css'

const Button = ({ variant, use, disabled }) => {
    const filled = `btn filled`
    const deflt = `btn default`
    const outline = `btn outline`

    const style = (variant) => {
        switch (variant) {
            case 'filled':
                return filled
            case 'outline':
                return outline
            default:
                return deflt
        }
    }

    return (
        <button disabled={disabled} type="submit" className={style(variant)}>
            {use}
        </button>
    )
}

export default Button
