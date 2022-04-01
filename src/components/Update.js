
import '../styles/main4.css'
import React from 'react';



import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button } from 'bootstrap';


function Update(){

    async function update(e) {
        e.preventDefault();
        const rawResponse = await fetch(`${process.env.REACT_APP_URI}/update/${e.target.projectName.value}`, {
          method: 'PUT',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            projectName: e.target.projectName.value,
            author: e.target.author.value,
            measurement: e.target.measurement.value,
            day: e.target.day.value,
            description: e.target.description.value,
            documentation: e.target.documentation.value,  
          })
          });
          const content = await rawResponse.json();
          
          console.log(content);
      }

    return (
        <div id="img">
            <div id="circle">
                

                <div class="container">

                    <form class="accordion--form" onSubmit={update}></form>
        <Accordion>
        <h3 class="addProjectTitle">Update</h3>
            <AccordionItem className='outline'>
                <AccordionItemHeading >
                    <AccordionItemButton className='bars'>
                    Values
                    </AccordionItemButton>
                </AccordionItemHeading >
                <AccordionItemPanel >
                       
                <fieldset class="accordion--form__fieldset" id="fieldset-one">
                        
                        <div class="accordion--form__wrapper accordion--form__wrapper-active">
                  
                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="projectName"> Project Name</label> <br />
                            <input class="accordion--form__text required" type="text" name="projectName" id="projectName" placeholder="Name" required/>
                          </div>
                  
                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="author">Author</label> <br />
                            <input class="accordion--form__text required" type="text" name="author" id="author" placeholder="Name"/>
                          </div>
                  
                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="measurement">Measurement</label> <br />
                            <input class="accordion--form__text required addValue" type="text" name="measurement" id="measurement" placeholder="Value" />
                          </div>
  
                          <div class="accordion--form__row">
                            <label class="accordion--form__label" for="day">Start Date</label> <br />
                            <input class="accordion--form__text" type="text" name="day" id="day" placeholder="Day" />
                          </div>
                          
                 </div>
                </fieldset>

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='bars'>
                        About
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <fieldset class="accordion--form__fieldset" id="fieldset-two">
                        <legend class="accordion--form__legend">Description</legend>
                  
                        <div class="accordion--form__wrapper">
                  
                          <div class="accordion--form__row">
                           
                            <textarea class="accordion--form__textarea required" name="description" id="description" placeholder="Project Details" ></textarea>
                          </div>
                  
                        </div>
                      </fieldset>

                      <fieldset class="accordion--form__fieldset" id="fieldset-two">
                        <legend class="accordion--form__legend">Documentation</legend>
                  
                        <div class="accordion--form__wrapper">
                  
                          <div class="accordion--form__row">
                            
                            <textarea class="accordion--form__textarea required" name="documentation" id="documentation" placeholder="Project Details" ></textarea>
                          </div>
                        </div>
                      </fieldset>
                  
                     
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            <fieldset class="accordion--form__fieldset" id="fieldset-three">
                
                <div class="accordion--form__row">
                        <input class="accordion--form__submit" type="submit" name="submit" value="Submit"/>
                </div>
            </fieldset>
        </div>
        </div>


        </div>
    );
}

export default Update;