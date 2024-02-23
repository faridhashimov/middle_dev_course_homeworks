import { InputLabel, styled } from '@mui/material'
import './TextInput.css'

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

    const StyledLabel = styled(InputLabel)({
        color: '#000',
        fontSize: '20px',
        fontWeight: 400,
    })

    return (
        <div className="inputContainer">
            <StyledLabel htmlFor={label}>
                {label}
                {withAsterisk && <span className="asterisk"> *</span>}
            </StyledLabel>
            <div
                style={{ borderRadius: `${borderRadius(radius)}px` }}
                className={`inputWrapper ${error && 'wrapperError'}`}
            >
                {leftSection && (
                    <div className="leftIconContainer">{leftSection}</div>
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
                    <div className="rightIconContainer">{rightSection}</div>
                )}
            </div>
            <div className="inputError">{error}</div>
        </div>
    )
}

export default TextInput
