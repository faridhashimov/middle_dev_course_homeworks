import style from './RadioGroup.module.css'

const RadioGroup = ({ label, children }) => {
    return (
        <div className={style.fieldset}>
            <h3>{label}</h3>
            {children}
        </div>
    )
}

export default RadioGroup
