import style from './RadioButton.module.css'

const RadioButton = ({ id, name, value, label }) => {
    return (
        <div className={style.radioInput}>
            <input type="radio" id={id} name={name} value={value} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default RadioButton
