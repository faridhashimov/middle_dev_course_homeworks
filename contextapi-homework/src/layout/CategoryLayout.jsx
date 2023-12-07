import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import './CategoryLayout.css'
import logo from '../assets/Rick_and_Morty.svg.png'
import { useAuth } from '../context/AuthContext'

const CategoryLayout = () => {
    const { signOut } = useAuth()
    const { user } = useAuth()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const onSignOut = () => {
        signOut(() => {
            navigate('/login', { replace: true })
        })
    }

    console.log(pathname.slice(1))

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
                            <NavLink to="/category/heroes">Heroes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/locations">
                                Locations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/episodes">Episodes</NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <li className="signOut">
                        <button onClick={onSignOut}>Sign Out</button>
                    </li>
                )}
            </ul>
            <Outlet />
        </>
    )
}

export default CategoryLayout
