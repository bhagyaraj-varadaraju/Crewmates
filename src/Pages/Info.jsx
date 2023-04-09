import { useEffect, useState } from 'react'
import sus from "../assets/suspect.png"
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../Client'

const Info = () => {
    const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" })

    const {id} = useParams();

    useEffect(() => {
        const readCrewmate = async () => {
            const {data:crewmate} = await supabase
                                        .from("Crewmates")
                                        .select()
                                        .eq('id', id);

            setCrewmate(crewmate[0]);
        }

        readCrewmate().catch(console.error);
    }, [])

    return (
        <div>
            <h1>Crewmate: {crewmate.color}</h1>

            <h1>Stats: </h1>
            <h2>Speed: {crewmate.speed}</h2>
            <h2>Color: {crewmate.color}</h2>
            
            {
                parseInt(crewmate.speed) >= 10
                ? <h3>Wow, this Crewmate is super fast, that will be helpful! 🏃💨</h3>
                : <h3>You may want to find a Crewmate with more speed, this one is kind of slow 😬</h3>
            }

            <Link to={'/edit/'+ id}><button className="editButton">Wanna edit this Crewmate?</button></Link>
            <div>
                <img src={sus} height="150px" width="auto"></img>
            </div>
        </div>
    )
}

export default Info
