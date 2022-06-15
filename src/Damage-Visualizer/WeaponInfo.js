import './WeaponInfo.css';

import React from 'react';
import Bar from '../main-components/Bar';
import RangeSlider from '../main-components/RangeSlider'

class WeaponInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {range: 10}
    }

    render(){
        return (
            <div className='weaponInfo'>
                <div className='weaponName'>Weapon Name</div>
                <div className='weaponDescription'>Description</div>
                <div className='weaponAmmoType'>Ammo Type:</div>
                <div className='weaponAmmoAmount'>Ammo Amount:</div>
                <div className='weaponStats'>
                    <Bar stat='Damage' val='75' maxVal='150'/>
                    <RangeSlider stat='Range' val='50' minVal='0' maxVal='100'/>
                    <Bar stat='Rate of Fire'/>
                    <Bar stat='Max Headshot Range'/>
                    <Bar stat='Handling'/>
                    <Bar stat='Reload Speed'/>
                    <Bar stat='Muzzle Velocity'/>
                    <Bar stat='Travel Time'/>
                    <Bar stat='Melee Damage'/>
                    <Bar stat='Heavy Melee Damage'/>
                </div>
            </div>
        );
    }
}

export default WeaponInfo;