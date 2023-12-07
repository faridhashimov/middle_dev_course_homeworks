import { useRef, useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import './SignIn.css'
import { useAuth } from '../../context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

function SignIn() {
    const signInformRef = useRef(null)
    const location = useLocation()
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const { signIn } = useAuth()
    const from = location.state?.from || '/'

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSignInSubmit = ({ e, inputs, signInformRef }) => {
        e.preventDefault()
        signIn(inputs, () => {
            navigate(from, { replace: true })
        })
        signInformRef.current.reset()
    }

    const handleReset = () => {
        setInputs({})
    }

    return (
        <div className="signInContainer">
            <div className="formContainer">
                <h1 className="formHeader">Sign In</h1>
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
        </div>
    )
}

export default SignIn
