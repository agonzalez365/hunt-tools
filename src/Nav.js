import './Nav.css';
import { NavLink } from 'react-router-dom';

import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <NavLink to='loadouts'>Loadout Randomizer</NavLink>
                <NavLink to='damage-visualizer'>Damage Visualizer</NavLink>
            </nav>
        );
    }
}

export default Nav;