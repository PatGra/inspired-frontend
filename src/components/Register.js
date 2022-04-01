
import "../styles/main3.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

function Register() {
  const navigate = useNavigate();


  async function registerUser(e) {
    e.preventDefault();
    const rawResponse = await fetch(`${process.env.REACT_APP_URI}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectName: e.target.projectName.value,
        author: e.target.author.value,
        day: e.target.day.value,
        password: e.target.password.value,
        description: e.target.description.value,
        measurement: e.target.measurement.value,
      }),
    });
    //const content = await rawResponse.json();

    console.log(rawResponse.status);

    if (rawResponse.status === 201) {
      navigate("/update");
    } else {
      console.error("failed");
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
              <form class="accordion--form" onSubmit={registerUser}>
                <Accordion>
                  <h3 class="addProjectTitle">Register</h3>
                  <AccordionItem className="outline">
                    <AccordionItemHeading>
                      <AccordionItemButton className="bars">
                        Values
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <fieldset
                        class="accordion--form__fieldset"
                        id="fieldset-one"
                      >
                        <div class="accordion--form__wrapper accordion--form__wrapper-active">
                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="name">
                              {" "}
                              Project Name*
                            </label>{" "}
                            <br />
                            <input
                              class="accordion--form__text required"
                              type="text"
                              name="projectName"
                              id="projectName"
                              placeholder="Name"
                              required
                            />
                          </div>

                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="author">
                              Author*
                            </label>{" "}
                            <br />
                            <input
                              class="accordion--form__text required"
                              type="text"
                              name="author"
                              id="author"
                              placeholder="Name"
                              required
                            />
                          </div>

                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="measurement">
                              Measurement
                            </label>{" "}
                            <br />
                            <input
                              class="accordion--form__text required addValue"
                              type="text"
                              name="measurement"
                              id="measurement"
                              placeholder="Value"
                             
                            />
                          </div>

                          <div class="accordion--form__row">
                            <label
                              class="accordion--form__label"
                              for="day"
                            >
                              Start Date
                            </label>{" "}
                            <br />
                            <input
                              class="accordion--form__text"
                              type="text"
                              name="day"
                              id="day"
                              placeholder="Day"
                              
                            />
                          </div>
                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="password">
                              Password*
                            </label>{" "}
                            <br />
                            <input
                              class="accordion--form__text required addValue"
                              type="text"
                              name="password"
                              id="password"
                              placeholder="Value"
                              required
                            />
                          </div>
                        </div>
                      </fieldset>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton className="bars">
                        About
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <fieldset
                        class="accordion--form__fieldset"
                        id="fieldset-two"
                      >
                        <legend class="accordion--form__legend">
                          Description
                        </legend>

                        <div class="accordion--form__wrapper">
                          <div class="accordion--form__row">
                            <textarea
                              class="accordion--form__textarea required"
                              name="description"
                              id="biography"
                              placeholder="Project Details"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset
                        class="accordion--form__fieldset"
                        id="fieldset-two"
                      >
                        <legend class="accordion--form__legend">
                          Documentation
                        </legend>

                        <div class="accordion--form__wrapper">
                          <div class="accordion--form__row">
                            <textarea
                              class="accordion--form__textarea required"
                              name="biography"
                              id="biography"
                              placeholder="Project Details"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </fieldset>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <fieldset class="accordion--form__fieldset" id="fieldset-three">
                  <div class="accordion--form__row">
                    <input
                      class="accordion--form__submit"
                      type="submit"
                      name="submit"
                      value="Submit"
                    />
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
  );
  
}

export default Register;
