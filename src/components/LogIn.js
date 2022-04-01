import icons from "../functions/icons";
import '../styles/main3.css'
import { useNavigate } from "react-router-dom";
import Button from "./Button";


function LogIn(){
    const navigate = useNavigate()
    async function submit(e) {
        e.preventDefault();
      const rawResponse = await fetch(`${process.env.REACT_APP_URI}/login`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            projectName: e.target.projectName.value,
            password: e.target.password.value,
         }),
      });
      //const content = await rawResponse.json();

      console.log(rawResponse.status);
      
      if(rawResponse.status === 200) {
         navigate('/update')
      } else {
         console.error('failed')
      }
   }

    return (
        <div id="page_register-login">


    <div id="left"></div>
    <div id="right"></div>

    <div id="container">
        <div id="img">
            <div id="circle">
                <div class="container">

                    <form class="accordion--form" onSubmit={submit}>
                  
                        <h3 class="addProjectTitle">Projects</h3>
                  
                      <fieldset class="accordion--form__fieldset" id="fieldset-one">
                        <legend class="accordion--form__legend accordion--form__legend-active">Log in</legend>

                        <div class="accordion--form__wrapper accordion--form__wrapper-active">
                  
                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="name"> Project Name *</label> <br />
                            <input class="accordion--form__text required" type="text" name="projectName" id="name" placeholder="Name" required/>
                          </div>
                  
                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="suname">Password*</label> <br />
                            <input class="accordion--form__text required addValue" type="text" name="password" id="password" placeholder="Value" required/>
                          </div>

                          <div class="accordion--form__row">
                            <input class="accordion--form__submit" type="submit" name="submit" value="Submit"/>
                          </div>
                  
                        </div>
                         
                      </fieldset>
                  
                    </form>
          
                </div>
            </div>
        </div>

     
    </div>

    <footer>
    <Button/>
    </footer>

        </div>
    )
}

export default LogIn;