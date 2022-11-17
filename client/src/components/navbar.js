import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

function navbar(props) {
    return (
        <div className='navbar'>
            <NavLink className='logo' to="/">
                <img src="/assets/qatar_logo.png" alt="카타르 월드컵 로고" />    
            </NavLink>
            <div className='nav-menus'>
                <NavLink className='menu' to="/match">
                    <strong>Match</strong>
                </NavLink>
                <span className='separator'>|</span>
                <NavLink className='menu' to="/group">
                    <strong>Group</strong>
                </NavLink>
                <span className='separator'>|</span>
                <NavLink className='menu' to="/team">
                    <strong>Team</strong>
                </NavLink>
            </div>
        </div>
    );
}

export default navbar;