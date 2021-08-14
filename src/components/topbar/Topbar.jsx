import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarLeft">
          <p>Call us:</p>
          <span>+6239516201</span>
        </div>
        <div className="topbarRight">
          <i className="topIcon fab fa-facebook-f"></i>
          <i className="topIcon fab fa-instagram"></i>
          <i className="topIcon fab fa-pinterest-p"></i>
        </div>
      </div>
      <hr />
      <div className="topbar">
        <div className="topNavLeft">
          <span>
            <a className="link" href="#home">
              FitnessBar
            </a>
          </span>
        </div>
        <div className="topNavCenter">
          <ul className="topNavList">
            <li className="topNavListItem">
              <a href="#home">HOME</a>
            </li>
            <li className="topNavListItem">
              <a href="#goalBased">FITNESS PLANS</a>
            </li>
            <li className="topNavListItem">
              <a href="#onPersonal"> PERSONAL TRAINING</a>
            </li>
            <li className="topNavListItem">
              <a href="#grpFitness">GROUP FITNESS</a>
            </li>
            {/* <li className="topNavListItem">CONTACT</li>
            <li className="topNavListItem">SCHEDULES</li>
            <li className="topNavListItem">TRAINERS</li> */}
            <img
              src="https://images.unsplash.com/photo-1618754580230-dc55ba127aa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt=""
              className="topNavImg"
            />
            <span className="topNavListBtn">LOGIN / SIGNUP</span>
          </ul>
        </div>
      </div>
    </>
  );
}
