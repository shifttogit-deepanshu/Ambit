import Header from "./components/Header"
import logo from "./assets/images/logo.png"
import playlogo from "./assets/images/playlogo.png"
import appmock from "./assets/images/appmock.png"

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
      <div className="red-section"></div>
    </div>
  );
}

export default App;
