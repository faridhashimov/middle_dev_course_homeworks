import { Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import {
    Alert,
    Box,
    Button,
    CircularProgress,
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
        showPassword: false,
    })
    const { user, logIn, isLoading, isSuccess, isError } = useAuth()
    const navigate = useNavigate()

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (user?.username !== undefined) {
            navigate('/', { replace: true })
        }
    })

    const handleClickShowPassword = () => {
        setCredentials({
            ...credentials,
            showPassword: !credentials.showPassword,
        })
    }

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }

    console.log(user)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newUser = {
            username: credentials.username,
            password: credentials.password,
        }

        logIn(newUser, () => {
            navigate('/', { replace: true })
        })
    }

    return (
        <Container>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <LoginContainer>
                    <Form onSubmit={handleSubmit}>
                        <Typography variant="h4" textAlign={'center'} mb={3}>
                            Log In
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
                        <StyledLabel htmlFor="password">Password</StyledLabel>
                        <OutlinedInput
                            sx={{ marginBottom: '20px' }}
                            fullWidth
                            type={
                                credentials.showPassword ? 'text' : 'password'
                            }
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
                        <Button
                            sx={{ height: '56px' }}
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Login
                        </Button>
                    </Form>
                    <Typography mt={1}>
                        New User? <Link to={'/register'}>Register</Link>
                    </Typography>
                    {isError && (
                        <Alert sx={{ marginBottom: '10px' }} severity="error">
                            Wrong credentials!
                        </Alert>
                    )}
                    {isSuccess && (
                        <Alert sx={{ marginBottom: '10px' }} severity="success">
                            Success!
                        </Alert>
                    )}
                </LoginContainer>
            )}
        </Container>
    )
}

export default LoginPage
