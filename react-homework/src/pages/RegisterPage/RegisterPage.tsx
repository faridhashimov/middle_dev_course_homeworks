import { Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import {
    Alert,
    // Alert,
    Box,
    Button,
    // CircularProgress,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
    styled,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { Link } from 'react-router-dom'
import { registerUser } from '../../manageAuth'

const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
})

const LoginContainer = styled(Box)(({ theme }) => ({
    padding: 20,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    width: '400px',
    border: '1px solid #ddd',
}))

const Form = styled('form')({})

const StyledLabel = styled(InputLabel)({
    color: '#000',
    fontSize: '16px',
    fontWeight: 400,
    textAlign: 'left',
    marginBottom: '5px',
})

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        retypedPassword: '',
        showPassword: false,
        showRetypedPassword: false,
    })
    const [match, setMatch] = useState(false)
    // const { logIn, isLoading, isSuccess } = useAuth()
    const navigate = useNavigate()
    const { user } = useAuth()

    useEffect(() => {
        if (user?.username !== undefined) {
            navigate('/', { replace: true })
        }
    })

    useEffect(() => {
        if (
            credentials.password !== credentials.retypedPassword &&
            credentials.retypedPassword.length > 0
        ) {
            setMatch(false)
        } else {
            setMatch(true)
        }
    }, [credentials.password, credentials.retypedPassword])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleClickShowPassword = () => {
        setCredentials({
            ...credentials,
            showPassword: !credentials.showPassword,
        })
    }
    const handleClickShowRetypedPassword = () => {
        setCredentials({
            ...credentials,
            showRetypedPassword: !credentials.showRetypedPassword,
        })
    }

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newUser = {
            username: credentials.username,
            password: credentials.password,
        }
        registerUser(newUser, () => {
            navigate('/login')
        })
    }

    return (
        <Container>
            <LoginContainer>
                <Form onSubmit={handleSubmit}>
                    <Typography variant="h4" textAlign={'center'} mb={3}>
                        Register
                    </Typography>

                    <StyledLabel htmlFor="username">Username</StyledLabel>
                    <OutlinedInput
                        sx={{ marginBottom: '10px' }}
                        id="username"
                        fullWidth
                        placeholder="Username"
                        name="username"
                        value={credentials.username}
                        onChange={(e) => handleChange(e)}
                        startAdornment={
                            <InputAdornment position="start">
                                <Person />
                            </InputAdornment>
                        }
                    />
                    <StyledLabel htmlFor="email">Password</StyledLabel>
                    <OutlinedInput
                        sx={{ marginBottom: '10px' }}
                        fullWidth
                        type={credentials.showPassword ? 'text' : 'password'}
                        value={credentials.password}
                        placeholder="Password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        startAdornment={
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {credentials.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <StyledLabel htmlFor="email">Re-type Password</StyledLabel>
                    <OutlinedInput
                        sx={{ marginBottom: '20px' }}
                        fullWidth
                        type={
                            credentials.showRetypedPassword
                                ? 'text'
                                : 'password'
                        }
                        value={credentials.retypedPassword}
                        placeholder="Password"
                        name="retypedPassword"
                        onChange={(e) => handleChange(e)}
                        startAdornment={
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowRetypedPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {credentials.showRetypedPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <Button
                        sx={{ height: '56px' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Register
                    </Button>
                </Form>
                <Typography mt={1} mb={1}>
                    Already have an account? <Link to={'/login'}>Login</Link>
                </Typography>
                {!match && (
                    <Alert sx={{ marginBottom: '10px' }} severity="error">
                        Passwords don't match!
                    </Alert>
                )}
                {!match && (
                    <Alert sx={{ marginBottom: '10px' }} severity="error">
                        Passwords don't match!
                    </Alert>
                )}
            </LoginContainer>
        </Container>
    )
}

export default LoginPage
