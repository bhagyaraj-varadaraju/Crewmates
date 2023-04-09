import crewLogo from "../assets/crewmates.png"
import InputCard from '../Components/InputCard'
import { supabase } from '../Client';
import '../Components/Card.css'
import { useState } from "react";

const Create = () => {

    const [info, setInfo] = useState({ name: "", speed: "", color: "" });

    const createCrewmate = async (event) => {
        event.preventDefault();

        //CREATE the crewmate
        await supabase
        .from('Crewmates')
        .insert({ name: info.name, speed: info.speed, color: info.color});

        alert("Crewmate created successfully");
        setInfo({ name: "", speed: "", color: "" });
    }

    return (
        <div>
            <h1>Welcome to the Crewmate Creator!</h1>
            <img src={crewLogo} height="100px" width="auto"></img>
            <form className='Card'>
                <InputCard info={info} setInfo={setInfo} />
                <br/>
                <button onClick={createCrewmate}>Create Crewmate</button>
            </form>
        </div>
    )
}

export default Create
