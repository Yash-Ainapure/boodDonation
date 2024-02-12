import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./Navbar.css"
export default function Navbar() {
    return (
        <div className='navbar bord'>
            <div className='logo bord'>
                {/* <img src=''></img> */}
                <h3>Blood Donation</h3>
            </div>
            <div className='navtabs bord'>
                <Link  to={"/"}><p>Home</p></Link>
                <Link to={"/about"}><p>About</p></Link>
                <Link to='/feedback'><p>Feedback</p></Link>
            </div>
            <div className='logintab bord'> <Link to='/login'><p>Login</p></Link></div>
           
        </div>
    )
}
