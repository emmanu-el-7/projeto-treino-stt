import React from 'react'
import './header.css'

function Header({ toggleActive }) {
    return (
        <header>
            <a href="#" className="menu" onClick={toggleActive}>
                <i class="bi bi-sliders"></i>
            </a>
            <div className="userItems">
                <a href="#" className="icon">
                    <i class="bi bi-heart-fill"></i>
                    <span className="like">0</span>
                </a>
                <a href="#" className="icon">
                    <i class="bi bi-bag-fill"></i>
                    <span className="bag">0</span>
                </a>
                <div className="avatar">
                    <a href="#"><img src="https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1gqfbei6sq37q1n1vcp1dvejr910.png" alt="User Image" /></a>
                    <div className="user">
                        <span>Username</span>
                        <a href="#">View Profile</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header