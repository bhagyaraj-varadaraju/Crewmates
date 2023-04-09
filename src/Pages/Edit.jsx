import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InputCard from '../Components/InputCard'
import crewLogo from "../assets/crewmates.png"
import { supabase } from '../Client'

const Edit = () => {
    // For handling the form inputs
    const [info, setInfo] = useState({ name: "", speed: "", color: "" });

    // For storing the value retrieving from the database table
    const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" });
    const {id} = useParams();

    useEffect(() => {
        const readCrewmate = async () => {
            const {data:crewmate} = await supabase
                                        .from("Crewmates")
                                        .select()
                                        .eq('id', id);

            setCrewmate(crewmate[0]);
            setInfo(crewmate[0]);
        }

        readCrewmate().catch(console.error);
    }, [])

    const editCrewmate = async (event) => {
        event.preventDefault();

        // UPDATE the selected crewmate
        await supabase
        .from("Crewmates")
        .update({name: info.name, speed: info.speed, color: info.color})
        .eq('id', id);

        alert("Crewmate updated successfully");
        setCrewmate(info);
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault();

        // DELETE the selected crewmate
        await supabase
        .from("Crewmates")
        .delete()
        .eq('id', id);

        alert("Crewmate deleted successfully");
        window.location = "/gallery";
    }

    return (
        <div>
            <h1>Update Your Crewmate :)</h1>
            <img src={crewLogo} height="150px" width="auto"></img>
            <h2>Current Crewmate Info:</h2>
            <h3>Name: {crewmate.name}, Speed: {crewmate.speed}, Color: {crewmate.color}</h3>

            <form className='Card'>
                <InputCard info={info} setInfo={setInfo} />
                <br />
                <button onClick={editCrewmate}>Edit Crewmate</button>
                <button onClick={deleteCrewmate}>Delete Crewmate</button>
            </form>

        </div>
    )
}

export default Edit
