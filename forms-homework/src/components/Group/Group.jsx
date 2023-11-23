import style from './Group.module.css'

const Group = ({children}) => {
  return (
    <div className={style.radioInputGroup}>
        {children}
    </div>
  )
}

export default Group