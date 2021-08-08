import React from "react"
import LinksContainer from "./LinksContainer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer =() =>{
    return (
        <footer className="footer-container">
            <div className="copyright-text">Copyright ©2021</div>
            <div className="footer-main">
                <div className="usefullinks">  
                    <LinksContainer heading="Useful Links">
                        <a href="https://www.google.com" className="link">Terms and Conditions</a>
                        <a href="https://www.google.com" className="link">Privacy Policy</a>
                        <a href="https://www.google.com" className="link">Copyright</a>
                        <a href="https://www.google.com" className="link">Feature Request</a>
                        <a href="https://www.google.com" className="link">Developer Contact</a>
                        <a href="https://www.google.com" className="link">Sponsership</a>
                        <a href="https://www.google.com" className="link">Future Updates</a>
                    </LinksContainer>
                    <LinksContainer heading="Resources">
                        <a href="https://www.google.com" className="link">Developer Contact</a>
                        <a href="https://www.google.com" className="link">Submit Feedback</a>
                        <a href="https://www.google.com" className="link">additional Resources</a>
                    </LinksContainer>
                    <LinksContainer heading="Contact">
                        <a href="https://www.google.com" className="link">Linkedin</a>
                        <a href="https://www.google.com" className="link">Instagram</a>
                        <a href="https://www.google.com" className="link">Twitter</a>
                        <a href="https://www.google.com" className="link">Facebook</a>
                    </LinksContainer>
                </div>
                <div className="footer-media">
                    <a href="https://www.google.com"><FontAwesomeIcon icon={['fab', 'github']} className="footer-icon"/></a>
                    <a href="https://www.google.com"><FontAwesomeIcon icon={['fab', 'facebook']} className="footer-icon"/></a>
                    <a href="https://www.google.com"><FontAwesomeIcon icon={['fab', 'linkedin']} className="footer-icon"/></a>
                    <a href="https://www.google.com"><FontAwesomeIcon icon={['fab', 'instagram-square']} className="footer-icon"/></a>
                    <a href="https://www.google.com"><FontAwesomeIcon icon={['fab', 'twitter-square']} className="footer-icon"/></a>
                </div>
                <div className="footer-connect">
                    Just drop your mail.. We'll connect with you in no time
                    <div style={{display:"flex",height:20}}>
                        <input type="text" className="inputbox" placeholder="Email"/>
                        <a href="https://www.google.com" style={{backgroundColor:"https://www.google.comDC493A",color:"white",margin:20,fontSize:10,height:25,width:50,display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none"}}>Submit</a>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer