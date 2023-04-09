import { Link } from 'react-router-dom'
import crewmate from '../assets/crewmate.png'
import './Card.css'

const GalleryCard = (props) => {
    return (
        <div className="Card">
            <Link to={'/'+ props.id}><img src={crewmate} height="150px" width="auto" /></Link>
            <Link to={'/'+ props.id}><h3>{"Name of Crewmate: " + props.name}</h3></Link>
            <Link to={'/'+ props.id}><h3>{"Speed of Crewmate: " + props.speed}</h3></Link>
            <Link to={'/'+ props.id}><h3>{"Color of Crewmate: " + props.color}</h3></Link>
            <Link to={'/edit/'+ props.id}><button className="editButton">Edit Crewmate</button></Link>
        </div>
    )
}

export default GalleryCard
