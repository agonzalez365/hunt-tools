import React from 'react';
import './HitboxMenu.css'
//import HitboxSelection from './HitboxSelection';

class HitboxMenu extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: this.hitboxes[1]
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        const hitboxSelectedEvent = new CustomEvent('hitbox-change', { detail: event.target.value });
        window.dispatchEvent(hitboxSelectedEvent);
    }

    hitboxes = [
        'Head',
        'Upper Torso',
        'Lower Torso',
        'Arms',
        'Legs'
    ]

    render() {
        return (
            <select className='hitboxSelector' value={this.state.value} onChange={this.handleChange} disabled>
                {this.hitboxes.map((hitbox, index) => {
                    return (
                        <option className='hitboxSelection' key={index} value={hitbox}>{hitbox}</option>
                    );
                })}
            </select>
        );
    }
}

export default HitboxMenu;