import { useState } from "react";
import "./App.css";
import Slider from "react-slick";
import { useEffect } from "react";
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
function App() {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (email.length) {
      if (regex.test(email)) {
        setShowError(false);
      } else {
        setShowError(true);
      }
    }
  }, [email]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
  };
  const settingsTest = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  function redirect() {
    if (!showError && email.length) {
      window.open("https://app.loch.one/welcome.", "_blank");
    } else {
      setShowError(true)
    }

  }
  return (
    <div className="App">
      <div className="left">
        <div className="notification">
          <div className="notification-left">
            <img src="/assets/Bell.png" alt="notification-icon" />
            <div className="heading">
              Get notified when a highly correlated whale makes a move
            </div>
            <div className="para">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </div>
          </div>
          <div className="notification-right">
            <Slider className="slick-list" {...settings}>
              <div className="image-container">
                <img
                  src="/assets/Card1.png"
                  alt="notification"
                  className="notification-image"
                />
              </div>
              <div className="image-container">
                <img
                  src="/assets/Card2.png"
                  alt="notification"
                  className="notification-image"
                />
              </div>
              <div className="image-container">
                <img
                  src="/assets/Card3.png"
                  alt="notification"
                  className="notification-image"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="work">
          <img src="/assets/Cohorts.png" alt="work" className="work-image" />
          <div className="work-right">
            <img
              src="/assets/Eye.png"
              alt="eye-icon"
              style={{ float: "right" }}
            />
            <div
              className="heading"
              style={{ clear: "both", textAlign: "right" }}
            >
              Watch what the whales are doing
            </div>
            <div className="para" style={{ textAlign: "right" }}>
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </div>
          </div>
        </div>

        <div className="testimonial-heading">Testimonials</div>
        <div className="testimonial-content">
          <img
            src="/assets/LochIcon.png"
            alt="loch icon"
            className="loch-icon"
          />
          <div className="testimonial-slides">
            <Slider className="" {...settingsTest}>
              <div className="image-containe">
                <img
                  src="/assets/Frame1.png"
                  alt="notification"
                  className="test-image"
                />
              </div>
              <div className="image-containe">
                <img
                  src="/assets/Frame2.png"
                  alt="notification"
                  className="test-image"
                />
              </div>
              <div className="image-containe">
                <img
                  src="/assets/Frame3.png"
                  alt="notification"
                  className="test-image"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-content">
          <h3 className="form-heading">Sign up for exclusive access.</h3>
          <input
            placeholder="Your email address"
            type="email"
            name="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          {showError ? (
            <div className="error">Please enter a valid email</div>
          ) : null}
          <button className="btn" onClick={redirect}>
            Get Started
          </button>
          <p className="bottom-text">
            You'll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
