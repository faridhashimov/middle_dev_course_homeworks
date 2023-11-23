import { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import style from './SignUp.module.css'
import RadioGroup from '../RadioGroup/RadioGroup'
import Group from '../Group/Group'
import RadioButton from '../RadioButton/RadioButton'

import { ReactComponent as IconAt } from '../../assets/at.svg'

function SignUp({ onSignUpSubmit }) {
    const signUpformRef = useRef(null)
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        nickname: '',
        gender: '',
        password: '',
        match: '',
    })

    const icon = <IconAt style={{ width: '16px', height: '16px' }} />

    const [validMatch, setValidMatch] = useState(true)

    useEffect(() => {
        if (inputs.match.length > 0 && inputs.password.length > 0) {
            setValidMatch(inputs.password === inputs.match)
        }
    }, [inputs.password, inputs.match])

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
            <div className={style.SignUpContainer}>
                <h1 className={style.SignUpHeader}>Sign Up</h1>
                <form
                    ref={signUpformRef}
                    onSubmit={(e) => {
                        onSignUpSubmit({ e, inputs, signUpformRef })
                    }}
                    onChange={handleChange}
                    onReset={handleReset}
                >
                    <TextInput
                        type="text"
                        label="Name"
                        placeholder="Name"
                        name="name"
                        value={inputs.name}
                        withAsterisk
                        radius="sm"
                    />
                    <TextInput
                        type="text"
                        label="Nickname"
                        placeholder="Nickname"
                        name="nickname"
                        value={inputs.nickname}
                        withAsterisk
                        leftSection={icon}
                        radius="sm"
                    />
                    <TextInput
                        type="email"
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={inputs.email}
                        withAsterisk
                        // rightSection={icon}
                        radius="sm"
                    />
                    <RadioGroup label="Gender">
                        <Group>
                            <RadioButton
                                id="male"
                                name="gender"
                                value="male"
                                label="Male"
                            />
                            <RadioButton
                                id="female"
                                name="gender"
                                value="female"
                                label="Female"
                            />
                        </Group>
                    </RadioGroup>
                    <TextInput
                        type="password"
                        label="Password"
                        placeholder="Password"
                        name="password"
                        value={inputs.password}
                        withAsterisk
                        radius="sm"
                    />
                    <TextInput
                        type="password"
                        label="Re-type Password"
                        placeholder="Re-type Password"
                        name="match"
                        withAsterisk
                        error={!validMatch && "Passwords didn't match"}
                        radius="sm"
                    />
                    <Button
                        disabled={
                            !inputs.name ||
                            !inputs.email ||
                            !inputs.gender ||
                            !inputs.nickname ||
                            !validMatch
                        }
                        variant="outline"
                        use="Sign Up"
                    />
                </form>
            </div>
        </>
    )
}

export default SignUp
