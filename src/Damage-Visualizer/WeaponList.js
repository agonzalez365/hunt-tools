import './WeaponList.css'

import React from 'react';
import Weapon from './Weapon';
import weaponData from '../weapondata';

class WeaponList extends React.Component {
    render() {
        return (
                <div className='weaponList'>
                    {weaponData.map((weapon, index) => {
                        return (
                            <Weapon name={weapon.name} id={index} key={weapon.name}/>
                        )
                    })}
                </div>
        );
    }
}

export default WeaponList;