import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks'

type PrivateRoute = {
    children: JSX.Element
}

const PrivateRoute = ({ children }: PrivateRoute) => {
    const { user } = useAuth()
    const location = useLocation()

    if (user?.username === undefined) {
        return (
            <Navigate to="/login" state={{ from: location.pathname }} replace />
        )
    }

    return <>{children}</>
}

export default PrivateRoute
