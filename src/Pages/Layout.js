import React from 'react'
import './Layout.css'
import {Outlet,Link} from "react-router-dom";
export default function Layout() {
  return (
    <div>
        <nav>
            <ul>
                <div className="item">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                </div>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
