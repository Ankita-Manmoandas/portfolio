import react from "react";
import "./Contact.scss";
import DisplayPicture from "../../components/DisplayPicture/DisplayPicture";
import Github from "../../assests/images/git.png";
import linkedin from "../../assests/images/linkedin.png";
import cv from "../../assests/images/CV.png";
import twitter from "../../assests/images/twitter.png";


const Contact = () => {

  return <div className="contact">
    <h3 className="contact__header"> Contact </h3>

   <DisplayPicture className="contact__display"/>

   <h3 className="contact__sub-heading"> Get in touch:</h3>
   <h5 className="contact__email"> ankita.gandhim09@gmail.com</h5>
   <div className="contact__icons"> 
   <h4 className="contact__sub-heading"> Connect with me</h4>
   <img src= {Github} alt= "programming icon" className="contact__icon"/> 
   <img src= {linkedin} alt= "programming icon" className="contact__icon" /> 
   <img src= {cv} alt= "programming icon" className="contact__icon"  />
   <img src= {twitter} alt= "programming icon" className="contact__icon"  />
   </div>

   

  </div>
}

export default Contact;