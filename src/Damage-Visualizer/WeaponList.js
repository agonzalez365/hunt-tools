import './WeaponList.css'

import React from 'react';
import Weapon from './Weapon';

class WeaponList extends React.Component {
    render() {
        return (
                <div className='weaponList'>
                    <Weapon name='Springfield Compact 1866'/>
                </div>
        );
    }
}

export default WeaponList;