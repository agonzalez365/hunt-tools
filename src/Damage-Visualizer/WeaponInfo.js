import './WeaponInfo.css';

import React from 'react';

class WeaponInfo extends React.Component {
    render(){
        return (
            <div className='weaponInfo'>
                <div className='weaponName'>Weapon Name</div>
                <div className='weaponDescription'>Description</div>
                <div className='weaponAmmoType'>Ammo Type:</div>
                <div className='weaponAmmoAmount'>Ammo Amount:</div>
                <div className='weaponStats'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default WeaponInfo;