import React from 'react'

export default function Navbar() {
  return (
      <nav >
        <div className="navi">
            <img id="nike" src="/Nike-Logo.png" alt="logo" height="45px" width="75px"/>
            <ul>
                <li href="#">Menu </li>
                <li href="#">Location </li>
                <li href="#">About </li>
                <li href="#">Contact </li>
            </ul>
            <button id="login">Login</button>
        </div>
      </nav>
  )
}
