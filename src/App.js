import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file
import twitterIcon from "./images/icon-twitter.svg";
import FbIcon from "./images/icon-facebook.svg";
import Up from "./images/icon-up.svg";
import Down from "./images/icon-down.svg";
import IgIcon from "./images/icon-instagram.svg";
import YtIcon from "./images/icon-youtube.svg";
const App = () => {
  const [isLightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    // Get Theme From Local Storage when the component mounts
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setLightTheme(true);
    }
  }, []);

  const themeSwitcher = () => {
    setLightTheme((prevTheme) => {
      const newTheme = !prevTheme;

      // Update theme in LocalStorage
      if (newTheme) {
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      } else {
        localStorage.removeItem("theme");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      }

      return newTheme;
    });
  };

  return (
    <body>
      <div className={isLightTheme ? "light" : "dark"} id="body">
        <div className="container">
          <div className="header">
            <div className="header-left">
              <h1 className="header-heading">Social Media Dashboard</h1>
              <p className="total-followers">Total Followers: 23,004</p>
            </div>
            <div className="header-right">
              <div className="dark-mode-title">
                <p>Dark Mode</p>
              </div>
              <div className="dark-mode-toggle">
                <label className="switch">
                  <input
                    id="toggleSwitch"
                    type="checkbox"
                    className="toggle-switch"
                    checked={isLightTheme}
                    onChange={themeSwitcher}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="summary">
            <div class="cards">
              <div class="card">
                <div class="usern-info">
                  <img src={FbIcon} alt="facebook" />
                  <span class="username">@alnahian2003</span>
                </div>
                <div class="followers">
                  <h2>1987</h2>
                  <span>FOLLOWERS</span>
                </div>
                <span class="todays-stats">
                  <img src={Up} alt="up" />
                  12 Today
                </span>
              </div>
              <div class="card">
                <div class="usern-info">
                  <img src={twitterIcon} alt="twitter" />
                  <span class="username">@alnahian2003</span>
                </div>
                <div class="followers">
                  <h2>1044</h2>
                  <span>FOLLOWERS</span>
                </div>
                <span class="todays-stats">
                  <img src={Up} alt="up" /> 99 Today
                </span>
              </div>
              <div class="card">
                <div class="usern-info">
                  <img src={IgIcon} alt="facebook" />
                  <span class="username">@alnahian2003</span>
                </div>
                <div class="followers">
                  <h2>11k</h2>
                  <span>FOLLOWERS</span>
                </div>
                <span class="todays-stats">
                  <img src={Up} alt="up" /> 1099 Today
                </span>
              </div>
              <div class="card">
                <div class="usern-info">
                  <img src={YtIcon} alt="facebook" />
                  <span class="username">Al Nahian</span>
                </div>
                <div class="followers">
                  <h2>8239</h2>
                  <span>SUBSCRIBERS</span>
                </div>
                <span class="todays-stats-down">
                  <img src={Down} alt="down" /> 144 Today
                </span>
              </div>
            </div>
          </div>

          <div class="overview">
            <h2>Overview - Today</h2>
            <div class="cards">
              <div class="card-overview">
                <div class="card-items">
                  <div class="card-top">
                    <p class="card-title">Page Views</p>
                    <img class="social-icons" src={FbIcon} alt="facebook" />
                  </div>
                  <div class="card-bottom">
                    <h3 class="number">87</h3>
                    <div class="rate">
                      <img src={Up} alt="up" />
                      <span class="rate-up">3%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-overview">
                <div class="card-items">
                  <div class="card-top">
                    <p class="card-title">Likes</p>
                    <img class="social-icons" src={FbIcon} alt="facebook" />
                  </div>
                  <div class="card-bottom">
                    <h3 class="number">52</h3>
                    <div class="rate">
                      <img src={Down} alt="down" />
                      <span class="rate-down">2%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-overview">
                <div class="card-items">
                  <div class="card-top">
                    <p class="card-title">Likes</p>
                    <img class="social-icons" src={IgIcon} alt="instagram" />
                  </div>
                  <div class="card-bottom">
                    <h3 class="number">5462</h3>
                    <div class="rate">
                      <img src={Up} alt="up" />
                      <span class="rate-up">2257%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-overview">
                <div class="card-items">
                  <div class="card-top">
                    <p class="card-title">Profile Views</p>
                    <img class="social-icons" src={IgIcon} alt="instagram" />
                  </div>
                  <div class="card-bottom">
                    <h3 class="number">52k</h3>
                    <div class="rate">
                      <img src={Up} alt="up" />
                      <span class="rate-up">1375%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-overview">
                <div class="card-items">
                  <div class="card-top">
                    <p class="card-title">Retweets</p>
                    <img class="social-icons" src={twitterIcon} alt="twitter" />
                  </div>
                  <div class="card-bottom">
                    <h3 class="number">117</h3>
                    <div class="rate">
                      <img src={Up} alt="up" />
                      <span class="rate-up">303%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-overview">
                <div class="card-items">
                  <div class="card-top">
                    <p class="card-title">Likes</p>
                    <img class="social-icons" src={twitterIcon} alt="twitter" />
                  </div>
                  <div class="card-bottom">
                    <h3 class="number">507</h3>
                    <div class="rate">
                      <img src={Up} alt="up" />
                      <span class="rate-up">553%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-overview">
                <div class="card-items">
                  <div class="card-top">
                    <p class="card-title">Likes</p>
                    <img class="social-icons" src={YtIcon} alt="youtube" />
                  </div>
                  <div class="card-bottom">
                    <h3 class="number">107</h3>
                    <div class="rate">
                      <img src={Down} alt="down" />
                      <span class="rate-down">19%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-overview">
                <div class="card-items">
                  <div class="card-top">
                    <p class="card-title">Total Views</p>
                    <img class="social-icons" src={YtIcon} alt="youtube" />
                  </div>
                  <div class="card-bottom">
                    <h3 class="number">1407</h3>
                    <div class="rate">
                      <img src={Down} alt="down" />
                      <span class="rate-down">12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="attribution">
          Coded by{" "}
          <a
            href="https://github.com/sameer0288"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sameer Ali
          </a>
          .
        </div>
      </div>
    </body>
  );
};

export default App;
