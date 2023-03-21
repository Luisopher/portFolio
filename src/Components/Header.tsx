import React, { useEffect } from "react";
import "./Header.css";
function Header({
  onLuisClick,
  onTimeLineClick,
  onWorkClick,
  onAboutClick,
}: any) {
  return (
    <>
      <div className="header_main">
        <div className="header_container">
          <div className="header_box">
            <div className="category">
              <ul>
                <li>
                  <button className="handleScroll" onClick={onLuisClick}>
                    &lt;Header /&gt;
                  </button>
                </li>{" "}
                <li>
                  {" "}
                  <button className="handleScroll" onClick={onAboutClick}>
                    &lt;About /&gt;
                  </button>
                </li>{" "}
                <li>
                  {" "}
                  <button className="handleScroll" onClick={onWorkClick}>
                    &lt;Work /&gt;
                  </button>
                </li>
                <li>
                  {" "}
                  <button className="handleScroll" onClick={onTimeLineClick}>
                    &lt;TimeLine /&gt;
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
