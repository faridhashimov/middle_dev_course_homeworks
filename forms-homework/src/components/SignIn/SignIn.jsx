import { useRef, useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import style from './SignIn.module.css'

function SignIn({ onSignInSubmit }) {
    const signInformRef = useRef(null)
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleReset = () => {
        setInputs({})
    }

    return (
        <>
            <div className={style.SignInContainer}>
                <h1 className={style.SignInHeader}>Sign In</h1>
                <form
                    ref={signInformRef}
                    onSubmit={(e) =>
                        onSignInSubmit({ e, inputs, signInformRef })
                    }
                    onChange={handleChange}
                    onReset={handleReset}
                >
                    <TextInput
                        type="email"
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={inputs.email}
                        withAsterisk
                        radius="sm"
                    />
                    <TextInput
                        type="password"
                        label="Password"
                        placeholder="Password"
                        name="password"
                        value={inputs.password}
                        withAsterisk
                        radius="sm"
                    />
                    <Button
                        disabled={!inputs.email || !inputs.password}
                        variant="filled"
                        use="Sign In"
                    />
                </form>
            </div>
        </>
    )
}

export default SignIn
