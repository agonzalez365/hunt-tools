import './Weapon.css';

import React from 'react';

class Weapon extends React.Component {
    render() {
        return (
            <div className='weapon'>{this.props.name}</div>
        );
    }
}

export default Weapon;