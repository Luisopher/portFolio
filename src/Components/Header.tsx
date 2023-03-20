import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header_main">
        <div className="header_container">
          <div className="header_box">
            <div className="logo">로고자리</div>
            <div className="category">
              <ul>
                <li>&lt;Header /&gt;</li>
                <li>&lt;TimeLine /&gt;</li>
                <li>&lt;Work /&gt;</li>
                <li>&lt;Footer /&gt;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
