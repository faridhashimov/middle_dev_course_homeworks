import style from './TextInput.module.css'

const TextInput = ({
    type,
    label,
    value,
    placeholder,
    name,
    withAsterisk,
    leftSection,
    rightSection,
    error,
    radius,
}) => {

    const borderRadius = (radius) => {
        switch (radius) {
            case 'xs':
                return 2
            case 'sm':
                return 4
            case 'md':
                return 8
            case 'lg':
                return 12
            case 'xl':
                return 20
            default:
        }
    }
    return (
        <div className={style.inputContainer}>
            <label htmlFor={label}>
                {label}
                {withAsterisk && <span className={style.asterisk}> *</span>}
            </label>
            <div
                style={{ borderRadius: `${borderRadius(radius)}px` }}
                className={`${style.inputWrapper} ${
                    error && style.wrapperError
                }`}
            >
                {leftSection && (
                    <div className={style.leftIconContainer}>{leftSection}</div>
                )}
                <input
                    style={{ borderRadius: `${borderRadius(radius)}px` }}
                    id={label}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                />
                {rightSection && (
                    <div className={style.rightIconContainer}>
                        {rightSection}
                    </div>
                )}
            </div>
            <div className={style.error}>{error}</div>
        </div>
    )
}

export default TextInput
