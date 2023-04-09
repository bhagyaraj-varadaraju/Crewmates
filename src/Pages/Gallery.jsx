import { useState, useEffect } from 'react'
import { supabase } from '../Client.jsx'
import GalleryCard from '../Components/GalleryCard.jsx'

const Gallery = () => {

    const [data, setData] = useState([])

    useEffect(() =>
    {
        //READ all the crewmates
        const readCrewmates = async () => 
        {
            const {data} = await supabase
                                .from('Crewmates')
                                .select()
                                .order('created_at', {ascending: true});

            console.log(data)
            setData(data);
        }
        readCrewmates().catch(console.error);

    }, []);

    return (
        <div>
            <h1>Your Crewmate Gallery!</h1>
            {
                data && data.length > 0 ?

                data.map((crewmate, idx) =><GalleryCard key={idx} id={crewmate.id} name={crewmate.name} speed={crewmate.speed} color={crewmate.color} />)

                : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>
    )
}

export default Gallery
