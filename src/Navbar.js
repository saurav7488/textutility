import React from "react";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid mx-3">
        <a className="navbar-brand" href="#">{props.hypo} 
        </a>

      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggle}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        </label>
      </div>
    </nav>
  );
}
