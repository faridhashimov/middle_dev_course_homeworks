import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem('user')) || null
    )

    const userData = {
        user,
        signIn: (newUser, callback) => {
            setUser(newUser)
            localStorage.setItem('user', JSON.stringify(newUser))
            callback()
        },
        signOut: (callback) => {
            setUser(null)
            localStorage.removeItem('user')
            callback()
        },
    }
    return (
        <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    )
}
