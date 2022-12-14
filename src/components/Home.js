import { NavLink } from "react-router-dom";

const Home = ({idSet}) => {

    const handleDestinationBackground = () => {
        idSet('destination-image');        
    }

    return (
        <div className="Home">
            <div className="home-container">
                <div className="home-text">
                    <h4>So, you want to travel to</h4>
                    <h2>SPACE</h2>
                    <p>  Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>

                <div className="home-explore" >
                    <NavLink to="/Destinations" onClick={handleDestinationBackground}>EXPLORE</NavLink >
                </div>
            </div>
        </div>
    );
}
 
export default Home;

