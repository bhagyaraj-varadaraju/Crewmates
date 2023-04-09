import crewLogo from "../assets/crewmates.png"
import spaceship from "../assets/spaceship.png"

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Crewmate Creator!</h1>
            <h2>Here is where you can create your very own set of crewmates before sending them off into space!</h2>
            <div><img src={crewLogo} height="250px" width="500px" /></div>
            <div><img src={spaceship} height="auto" width="300px" /></div>
        </div>
    )
}

export default Home
