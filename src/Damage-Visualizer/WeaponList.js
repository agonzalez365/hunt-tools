import './WeaponList.css'

import React from 'react';

class WeaponList extends React.Component {
    render() {
        return (
            <div className='weaponList'>
                {this.props.children}
            </div>
        );
    }
}

export default WeaponList;