import { useNavigate } from "react-router-dom";
import '../styles/App.css';

function Button(){

    const navigate = useNavigate();

    function goToHome(){
        navigate("/home")
    }
    function goToAbout(){
        navigate("/about")
    }
    return(
        <div>
            <button onClick={goToHome} className="buttons">Home</button>
            <button onClick={goToAbout} className="buttons">About</button>
        </div>
    )
}
export default Button