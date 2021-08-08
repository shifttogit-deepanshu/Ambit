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
                        <a href="#" className="link">Terms and Conditions</a>
                        <a href="#" className="link">Privacy Policy</a>
                        <a href="#" className="link">Copyright</a>
                        <a href="#" className="link">Feature Request</a>
                        <a href="#" className="link">Developer Contact</a>
                        <a href="#" className="link">Sponsership</a>
                        <a href="#" className="link">Future Updates</a>
                    </LinksContainer>
                    <LinksContainer heading="Resources">
                        <a href="#" className="link">Developer Contact</a>
                        <a href="#" className="link">Submit Feedback</a>
                        <a href="#" className="link">additional Resources</a>
                    </LinksContainer>
                    <LinksContainer heading="Contact">
                        <a href="#" className="link">Linkedin</a>
                        <a href="#" className="link">Instagram</a>
                        <a href="#" className="link">Twitter</a>
                        <a href="#" className="link">Facebook</a>
                    </LinksContainer>
                </div>
                <div className="footer-media">
                    <a href="#"><FontAwesomeIcon icon={['fab', 'github']} className="footer-icon"/></a>
                    <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} className="footer-icon"/></a>
                    <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} className="footer-icon"/></a>
                    <a href="#"><FontAwesomeIcon icon={['fab', 'instagram-square']} className="footer-icon"/></a>
                    <a href="#"><FontAwesomeIcon icon={['fab', 'wikipedia']} className="footer-icon"/></a>
                    <a href="#"><FontAwesomeIcon icon={['fab', 'github']} className="footer-icon"/></a>
                </div>
                <div className="footer-connect">
                    Just drop your mail.. We'll connect with you in no time
                    <div style={{display:"flex",height:20}}>
                        <input type="text" className="inputbox" placeholder="Email"/>
                        <a href="#" style={{backgroundColor:"#DC493A",color:"white",margin:20,fontSize:10,height:25,width:50,display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none"}}>Submit</a>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer