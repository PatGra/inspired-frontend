import '../styles/main.css';
import image from '../../src/assets/unsplash.jpg';
import icons from '../functions/icons';
import { useNavigate } from "react-router-dom";

function Home (){
    const navigate = useNavigate();


    function goTo(){
        navigate("/about")
    }

    return(
        <div id="page_home">
        <div className="container" >

        <div className="flowers">
            <img src={image} alt="green Plants"/>

            <div className="social-nav">
                
                {/* <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-linkedin-in"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a> */}
                
              
           
            </div>

            <div className="number">

                <div className="arrow">
               
                <icons.IoIosArrowForward className='arrowNavUp' onClick={goTo}/>
                    {/* <a className="arrow-nav up" href="./index3.html"><i className="fas fa-chevron-up"></i>
                    </a>

                    <a className="arrow-nav down" href="./index2.html"><i className="fas fa-chevron-down"></i>
                    </a> */}
                </div>

                <a className="number-nav" href="">01</a>

            </div>

            <div className="intro-text">
                <h2>Get inspired.</h2>
                <div className='textP'>
                <p>As a mixture of blue and yellow, green has a wide color spectrum. If you look in the RAL color system under green tones, you will find 36 shades. On the one hand, there are the dark shades such as fir green or olive green, or on the other hand, the light green shades such as mint and sage, which almost go into the pastel range.
                    This is reason enough to go on a little research trip...</p>
                </div>
                
            </div>
        </div>

        <div className="gray-box">

            <div className="text">
                <div className="opacity">gre<span className="hintergrund-img">en.</span></div>
            </div>
        </div>
        
    </div>
    </div>

    )
}

export default Home