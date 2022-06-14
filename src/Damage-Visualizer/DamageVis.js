import './DamageVis.css';

import React from 'react';
import ListControls from './ListControls';
import WeaponList from './WeaponList';
import WeaponInfo from './WeaponInfo';

class DamageVis extends React.Component {
    render() {
        return (
            <main>
                <div>
                    <ListControls />
                </div>
                <div className='container'>
                    <WeaponList />
                    <WeaponInfo />
                </div>
            </main>
        )
    }
}

export default DamageVis;