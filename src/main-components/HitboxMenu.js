import React from 'react';
import './HitboxMenu.css'

class HitboxMenu extends React.Component {
    state = {}

    hitboxes = [
        'Head',
        'Upper Torso',
        'Lower Torso',
        'Arms',
        'Legs'
    ]

    render() {
        return (
            <select className='hitboxSelector'>
                {this.hitboxes.map((hitbox, index) => {
                    return (
                        <option className='hitboxSelection' value={hitbox} key={index + hitbox}>{hitbox}</option>
                    );
                })}
            </select>
        );
    }
}

export default HitboxMenu;