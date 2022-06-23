import './Weapon.css';

import React from 'react';

class Weapon extends React.Component {
    //fires custom event that sends an index that weaponinfo component can access to update its display
    handleClick = () => {
        const weaponChangeEvent = new CustomEvent('weapon-change', { detail: this.props.id });
        window.dispatchEvent(weaponChangeEvent);
    }

    render() {
        return (
            <div className='weapon' id={this.props.id} onClick={this.handleClick}>
                <img src={this.props.icon} alt="" />
                <span>{this.props.name}</span>
            </div>
        );
    }
}

export default Weapon;