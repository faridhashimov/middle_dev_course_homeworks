import {
    NavLink,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom'
import './CategoryLayout.css'
import logo from '../assets/Rick_and_Morty.svg.png'
import { useAuth } from '../context/AuthContext'
import { Suspense } from 'react'
import { Loading } from '../components'
import { Button, styled } from '@mui/material'

const CategoryLayout = ({ setPageNum }) => {
    const { signOut } = useAuth()
    const { user } = useAuth()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { categoryId } = useParams()
    const onSignOut = () => {
        signOut(() => {
            navigate('/login', { replace: true })
        })
    }

    const onChageCat = (e) => {
        if (e.target.href?.slice(31) !== categoryId) {
            setPageNum(1)
        }
    }

    const SignOutBtn = styled(Button)({
        color: '#13d924',
    })

    return (
        <>
            <ul className="navbar">
                <li>
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </li>
                {(user || pathname.slice(1) !== 'login') && (
                    <>
                        <li>
                            <NavLink
                                onClick={onChageCat}
                                to="/category/character"
                            >
                                Heroes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={onChageCat}
                                to="/category/location"
                            >
                                Locations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={onChageCat}
                                to="/category/episode"
                            >
                                Episodes
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <li className="signOut">
                        <SignOutBtn
                            size="small"
                            onClick={onSignOut}
                            variant="outlined"
                        >
                            Sign Out
                        </SignOutBtn>
                    </li>
                )}
            </ul>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}

export default CategoryLayout
