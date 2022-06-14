import './Nav.css';
import { NavLink } from 'react-router-dom';

import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <NavLink className='nav-links' to='loadouts'>Loadout Randomizer</NavLink>
                <NavLink className='nav-links' to='damage-visualizer'>Damage Visualizer</NavLink>
                <NavLink className='nav-links' to='credits'>Credits</NavLink>
            </nav>
        );
    }
}

export default Nav;