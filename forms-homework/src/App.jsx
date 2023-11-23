import './App.css'
import { SignIn, SignUp } from './components'

function App() {
    const signedIn = true

    const onSignUpSubmit = ({ e, inputs, signUpformRef }) => {
        e.preventDefault()
        signUpformRef.current.reset()
        console.log(inputs)
    }

    const onSignInSubmit = ({ e, inputs, signInformRef }) => {
        e.preventDefault()
        signInformRef.current.reset()
        console.log(inputs)
    }

    return (
        <div className="App">
            <header className="App-header">
                {signedIn ? (
                    <SignIn onSignInSubmit={onSignInSubmit} />
                ) : (
                    <SignUp onSignUpSubmit={onSignUpSubmit} />
                )}
            </header>
        </div>
    )
}

export default App
