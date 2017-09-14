import React from 'react'
import { Link } from 'react-router'

import './app.css'

export default function App({ children }) {
  return (
    <div>
      <header>
        <Link to="/">Rooms</Link>
        {" "}
        <Link to="/settings">Settings</Link>
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}
