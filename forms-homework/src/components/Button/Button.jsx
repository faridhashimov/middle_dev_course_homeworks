import React from 'react'
import styles from './Button.module.css'

const Button = ({ variant, use,disabled }) => {
    const filled = `${styles.btn} ${styles.filled}`
    const deflt = `${styles.btn} ${styles.default}`
    const outline = `${styles.btn} ${styles.outline}`

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
