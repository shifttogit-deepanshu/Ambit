import Header from "./components/Header"
import logo from "./assets/images/logo.png"
import playlogo from "./assets/images/playlogo.png"
import appmock from "./assets/images/appmock.png"
import InfoBox from "./components/InfoBox"
import mock1 from "./assets/images/mock1.png"
import mock2 from "./assets/images/mock2.png"
import mock3 from "./assets/images/mock3.png"
import covidimg from "./assets/images/covidimg.png"
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <div>
      <Header />
      <div className="banner">
        <div className="banner--logo-container">
          <div className="banner--logo-image"><img src={logo} className="banner--logo" alt="Ambit Logo"/></div>
          <div className="banner--buttons-container">
          <img src={playlogo} className="play--logo" alt="google-play-logo"/>
          <div className="download-apk-btn">Download APK</div>
          </div>
        </div>
        <div className="appmock"><img src={appmock} className="appmock--img" alt="Ambit mock"/></div>
      </div>
      <div className="red-section">
        <div className="mssg">Leave Behind Memories, Not Your Important Stuff</div>
          <div className="infos">
          <InfoBox mockimg={mock1}  mocktext="Mark the places where you Stay, Work or hangout"/>
          <InfoBox mockimg={mock2}  mocktext="Add Tasks for Reminders"/>
          <InfoBox mockimg={mock3}  mocktext="Get Reminder Notifications While Entering or Leaving"/>
        </div>
        <div className="mssg mssg-bottom">It's That Simple!</div>
      </div>
      <div className="covid-container">
      <div className="covid-mssg"><div className="mssg2">Let's Beat Covid</div><div className="mss2-sub">A difference of carying a mask can be a difference between life and death. <br/>Let's never forget the covid rules with Ambit.</div></div>
      <img src={covidimg} className="covidimg" alt="Covid Drawable"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
