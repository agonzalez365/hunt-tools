import './WeaponInfo.css';

import React from 'react';
import Bar from '../main-components/Bar';
import RangeSlider from '../main-components/RangeSlider'
import HitboxMenu from '../main-components/HitboxMenu';

class WeaponInfo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            damageVal: 0,
            rangeVal: 20,
            handling: 0,
            reloadSpeed: 0,
            muzzleVelocity: 0,
            hitbox: 'Upper Torso'
        }
    }

    handleRangeUpdate = (rangeVal) => {
        console.log('Called', rangeVal);
        this.setState({ damageVal: this.calculateDamage(110, rangeVal) })
    }

    calculateDamage = (baseDamage, range, hitbox) => {
        let damagePercent = 1;
        let rangeAffected;
        let slopeStart;
        let slopeRange;
        let slope;

        if(range > 20) {
            slopeStart = 20;
            slopeRange = 10;
            slope = 0.014;

            rangeAffected = this.calcAffectedRange(slopeStart, slopeRange, range);

            console.log(damagePercent, "current range", rangeAffected);
            damagePercent -= rangeAffected * slope;
            console.log("after subtraction: ", damagePercent);
        }
        return baseDamage * damagePercent;
    }

    //determine what amount we will multiply by the slope by to determine the amount subtracted from damage percent
    calcAffectedRange = (slopeStart, slopeRange, range) => {
        let rangeAffected;

        if(slopeStart + slopeRange > range) {
            rangeAffected = slopeStart + slopeRange - range;
        }
        else {
            rangeAffected = slopeRange;
        }

        return rangeAffected;
    }

    render(){
        return (
            <div className='weaponInfo'>
                <div className='weaponName'>Weapon Name</div>
                <div className='weaponDescription'>Description</div>
                <div className='weaponAmmoType'>Ammo Type:</div>
                <div className='weaponAmmoAmount'>Ammo Amount:</div>
                <div className='weaponStats'>
                    <Bar stat='Damage' val={this.state.damageVal} maxVal='150'/>
                    <RangeSlider stat='Range' onRangeUpdate={this.handleRangeUpdate} />
                    <Bar stat='Rate of Fire'/>
                    <Bar stat='Max Headshot Range'/>
                    <Bar stat='Handling'/>
                    <Bar stat='Reload Speed'/>
                    <Bar stat='Muzzle Velocity'/>
                    <Bar stat='Travel Time'/>
                    <Bar stat='Melee Damage'/>
                    <Bar stat='Heavy Melee Damage'/>
                    <HitboxMenu />
                </div>
            </div>
        );
    }
}

export default WeaponInfo;