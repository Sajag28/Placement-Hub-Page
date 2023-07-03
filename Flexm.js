import './Flexm.css';
import React from 'react'
import Image from "./Image.js";
import Image2 from "./Image2.js";
import Image3 from "./Image3.js";
import Cards from"./Cards.js";
import Cards2 from"./Cards2.js";
import Cards3 from"./Cards3.js";
export default function Flexm() {


  return (
    <>
    <div className="div1">
    <div className="d-flex flex-row justify-content-evenly">
      <div className="p-2">
      <div className="d-flex flex-row mb-3">
        <div className="p-2 d-flex flex-row"><div className="d-flex justify-content-end"><Image/></div></div>
        
    </div> 
    </div>
      <div>
      <div className="p-2">
      <div className="d-flex flex-column mb-3">
      <div id="div1a">
        <div className="p-2" ><strong><h2 className="tag">"Connecting Talent with Opportunity. Our online recruiter site helps companies find the perfect candidates and job seekers discover their dream careers. Join us today and let us bridge the gap between talent and success."</h2></strong></div>
        <div className="GetStarted"><div class="d-flex justify-content-center"><div className="start">Get Started&#8594;</div></div></div>
        <div className="sam1">
        <div className="d-flex justify-content-evenly">
         <button type="button" className="btn btn-primary btn-lg">LOGIN</button>
         <button type="button" className="btn btn-secondary btn-lg">SIGN UP</button></div>
        </div>
      </div>
      </div>
      </div>
    </div>
   </div>
   </div>
   

    
    <div className="div2">
    <div className="d-flex flex-row  mb-3">
    <div className="p-2"><Image2/></div>
    <div class="ms-auto p-2" id="div2a">
         <div className="d-flex flex-column mb-3">
         <div className="d-flex justify-content-center"><h1> Recruiters, Why to go for online recruitment?</h1></div>
         <div className="d-flex justify-content-evenly" id="ben1">
           <div className="p-2" id="ben"><strong>TIME SAVING</strong></div>
           <div className="p-2" id="ben"><strong>WIDER REACH</strong></div>
           <div className="p-2" id="ben"><strong>COLLABORATION</strong></div>
         </div>
         
         <div className="d-flex justify-content-evenly" id="ben2">
           <div className="p-2" id="ben3"><strong>DATA DRIVEN INSIGHTS</strong></div>
           <div className="p-2" id="ben3"><strong>MOBILE ACCESIBILITY</strong></div>
           
         </div>
         </div>
     </div>
    </div>
    </div>
    <div className="div3">
    <div className="d-flex flex-row justify-content-evenly">
      <div className="p-2">
      <div className="d-flex flex-row mb-3">
        <div className="p-2 d-flex flex-row"><div className="d-flex justify-content-end"><Image3/></div></div>
        
    </div> 
    </div>
      <div>
      <div className="p-2">
      <div className="d-flex flex-column mb-3">
      <div id="div3a">
      <div className="d-flex flex-column mb-3">
      <div className="d-flex justify-content-center"><h1>Applicants, the reasons why you should go for online process?</h1></div>
      <div className="d-flex justify-content-evenly" id="ben1">
        <div className="p-2" id="ben6"><strong>ACCESS TO WIDE RANGE OF OPPURTUNITIES</strong></div>
        <div className="p-2" id="ben6"><strong>FASTER APPLICATION PROCESS</strong></div>
        <div className="p-2" id="ben6"><strong>REAL TIME UPDATES</strong></div>
      </div>
      
      <div className="d-flex justify-content-evenly" id="ben2">
        <div className="p-2" id="ben3"><strong>NETWORKING OPPURTUNITIES</strong></div>
        <div className="p-2" id="ben3"><strong>RESOURCEFUL INFORMATION</strong></div>
        
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
   </div>
    </div>
    <div id="div4">
      <div className="d-flex justify-content-center"><h3 className="foot">Placement Hub Copyright@34567</h3></div>
    </div>
    </>
  )
}
