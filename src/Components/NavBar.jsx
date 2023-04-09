import { Link } from 'react-router-dom'
import peeking from "../assets/peeking.png"
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <ul style={{listStyleType: 'none'}}>
                <li><Link className="navLink" to="/"> Home </Link></li>
                <li><Link className="navLink"to="/create"> Create a Crewmate! </Link></li>
                <li><Link className="navLink" to="/gallery"> Crewmate Gallery </Link></li>
            </ul>
            <div id="nav-image">
                <img src={peeking} height="200px" width="auto"></img>
            </div>

        </div>
    )
}

export default NavBar
