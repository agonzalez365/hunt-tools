import './Weapon.css';

import React from 'react';

class Weapon extends React.Component {
    render() {
        return (
            <div className='weapon' id={this.props.id}>
                <img src={this.props.icon} alt="" />
                <span>{this.props.name}</span>
            </div>
        );
    }
}

export default Weapon;