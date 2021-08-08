import Header from "./components/Header"
import logo from "./assets/images/logo.png"
import playlogo from "./assets/images/playlogo.png"
import appmock from "./assets/images/appmock.png"
import InfoBox from "./components/InfoBox"
import mock1 from "./assets/images/mock1.png"
import mock2 from "./assets/images/mock2.png"
import mock3 from "./assets/images/mock3.png"
import covidimg from "./assets/images/covidimg.png"

function App() {
  return (
    <div>
      <Header />
      <div className="banner">
        <div className="banner--logo-container">
          <div className="banner--logo-image"><img src={logo} className="banner--logo"/></div>
          <div className="banner--buttons-container">
          <img src={playlogo} className="play--logo"/>
          <div className="download-apk-btn">Download APK</div>
          </div>
        </div>
        <div className="appmock"><img src={appmock} className="appmock--img"/></div>
      </div>
      <div className="red-section">
        <div className="mssg">Leave Behind Memories, Not Your Important Stuff</div>
          <div class="infos">
          <InfoBox mockimg={mock1}  mocktext="Mark the places where you Stay, Work or hangout"/>
          <InfoBox mockimg={mock2}  mocktext="Add Tasks for Reminders"/>
          <InfoBox mockimg={mock3}  mocktext="Get Reminder Notifications While Entering or Leaving"/>
        </div>
        <div className="mssg mssg-bottom">It's That Simple!</div>
      </div>
      <div class="covid-container">
      <div class="covid-mssg"><div class="mssg2">Let's Beat Covid</div><div class="mss2-sub">A difference of carying a mask can be a difference between life and death. <br/>Let's never forget the covid rules.</div></div>
      <div class="covid-img-container"><img src={covidimg} class="covidimg"/></div>
      </div>
    </div>
  );
}

export default App;
