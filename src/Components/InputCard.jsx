import React from 'react';
import { useState } from 'react'

const InputCard = ({info, setInfo}) => {

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setInfo( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const colors = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow']

    return (
        <div>
            <label htmlFor="name">Name:</label> <br />
            <input type="text" placeholder="Enter crewmate's name" id="name" name="name" value={info.name} onChange={handleChange}/ ><br />
            <br/>

            <label htmlFor="speed">Speed (mph):</label><br />
            <input type="number" placeholder="Enter speed in mph" id="speed" name="speed" value={info.speed} onChange={handleChange}/ ><br />
            <br/>

            <p>Color:</p>
            
            {colors.map((color, idx) => (
                <React.Fragment key={idx}>
                    <input checked={info.color == color} type="radio" id={color} name="color" value={color} onChange={handleChange} />
                    <label htmlFor={color}>{color}</label><br />    
                </React.Fragment>
            ))}
        </div>
    )
}

export default InputCard
