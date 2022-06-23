import React from 'react';
import './HitboxMenu.css'

class HitboxMenu extends React.Component {

    hitboxes = [
        'Head',
        'Upper Torso',
        'Lower Torso',
        'Arms',
        'Legs'
    ]

    render() {
        return (
            <select className='hitboxSelector' defaultValue={this.hitboxes[1]}>
                {this.hitboxes.map((hitbox, index) => {
                    return (
                        <option className='hitboxSelection' key={index + hitbox}>{hitbox}</option>
                    );
                })}
            </select>
        );
    }
}

export default HitboxMenu;