import { NavLink, Outlet } from 'react-router-dom'
import './CategoryLayout.css'
import logo from '../../assets/Rick_and_Morty.svg.png'

const CategoryLayout = () => {
    return (
        <>
            <ul className="navbar">
                <li>
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/heroes">Heroes</NavLink>
                </li>
                <li>
                    <NavLink to="/category/locations">Locations</NavLink>
                </li>
                <li>
                    <NavLink to="/category/episodes">Episodes</NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default CategoryLayout
