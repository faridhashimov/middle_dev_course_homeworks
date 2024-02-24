import {
    ReactNode,
    createContext,
    useState,
} from 'react'
import { IUsers } from '../db'
import { getUser } from '../manageAuth'

interface AuthContextType {
    user: IUsers | undefined
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    logIn: (newUser: IUsers, cb: () => void) => void
    logOut: (cb: () => void) => void
}

export const AuthContext = createContext<AuthContextType>({
    user: undefined,
    isLoading: false,
    isSuccess: false,
    isError: false,
    logIn() {},
    logOut() {},
})

export interface IProviderProps {
    children?: ReactNode
}

export const AuthProvider = ({ children }: IProviderProps) => {
    const [user, setUser] = useState<IUsers | undefined>(
        () => JSON.parse(localStorage.getItem('user') || '{}') || null
    )
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const logIn = async (newUser: IUsers, cb: () => void) => {
        setIsLoading(true)
        const user = await getUser(newUser)
        if (typeof user === 'undefined') {
            setIsLoading(false)
            setIsError(true)
        } else {
            setIsSuccess(true)
            localStorage.setItem('user', JSON.stringify(user))
            setIsLoading(false)
            setUser(user)
            cb()
        }
    }
    const logOut = (cb: () => void) => {
        setUser(undefined)
        localStorage.removeItem('user')
        cb()
    }

    const value = {
        user,
        isLoading,
        isSuccess,
        isError,
        logIn,
        logOut,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
