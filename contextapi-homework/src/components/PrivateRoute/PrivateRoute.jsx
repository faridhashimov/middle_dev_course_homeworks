import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export function PrivateRoute({ children }) {
    const auth = useAuth()
    const location = useLocation()
    console.log(auth)
    if (auth.user === null) {
        return (
            <Navigate to="/login" state={{ from: location.pathname }} replace />
        )
    }
    return children
}
