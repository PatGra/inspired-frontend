import icons from "../functions/icons";
import '../styles/main2.css';
import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();


    function goToRegister(){
        navigate("/register")
    }
    function goToLogin(){
        navigate("/login")
    }

    return(
    <div id='page_about'>
        <div>
        <h2>All about green</h2>
        </div>
        <main>
            <div className="left">
                <div className="text">
                    <h3>About</h3>
                    <p> green. allows you to explore everything about the green tones of different green plants.
                    By measuring the resonance of different wavelengths of light, data about the color composition can be
                    obtained.</p>
                   
                </div>
                <div className="text">
                    <h3>Contact</h3>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione repellat totam sint
                    quisquam quasi beatae quaerat nisi veniam.</p>
                   
                </div>
            </div>
            <div className="middle"></div>

            <div className="right">
                <div className="text">



                    <h3> <a href="" onClick={goToRegister}>New Project</a></h3>
                    <p>Create new projects here.</p>
                   
                </div>

                <div className="text">
               
                    <h3> <a href=""onClick={goToLogin}>Update Projects</a></h3>
                    <p>You want to continue working on your project?
                    Here you can access the database.</p>
                 
                </div>
            </div>
        </main>
        <footer>
            <div className="arrow">
                <div className="arrow">
                    <a className="arrow-nav up" href="./index.html"><i className="fas fa-chevron-left"></i>
                    </a>
                    <a className="number-nav" href="">2</a>
                    <a className="arrow-nav down" href="./index3.html"><i className="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>



        </footer>
        </div>
            )
        }

export default About