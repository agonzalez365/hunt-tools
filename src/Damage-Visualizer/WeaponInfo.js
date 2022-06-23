import './WeaponInfo.css';

import React from 'react';
import Bar from '../main-components/Bar';
import RangeSlider from '../main-components/RangeSlider'
import HitboxMenu from '../main-components/HitboxMenu';
import { calcCompactFalloff } from './DamageCalculation';
import weaponData from '../weapondata';

class WeaponInfo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            //weapon stats
            damageVal: weaponData[0].damage,
            rangeVal: 0,
            rof: weaponData[0]['rate-of-fire'],
            headshotRange: weaponData[0]['headshot-range'],
            handling: weaponData[0].handling,
            reloadSpeed: weaponData[0].reload,
            muzzleVelocity: weaponData[0]['muzzle-velocity'],
            travelTime: 0,
            meleeDamage: weaponData[0]['light-melee-damage'],
            heavyMeleeDamage: weaponData[0]['heavy-melee-damage'],
            hitbox: 'Upper Torso'
        }
        console.log(weaponData[0]);
    }

    handleRangeUpdate = (rangeVal) => {
        console.log('Called', rangeVal);
        this.setState({ damageVal: calcCompactFalloff(110, rangeVal) })
    }

    handleWeaponUpdate = (e) => {
        //takes index from event and updates relevant values
        this.setState({
            damageVal: weaponData[e.detail].damage,
            rof: weaponData[e.detail]['rate-of-fire'],
            headshotRange: weaponData[e.detail]['headshot-range'],
            handling: weaponData[e.detail].handling,
            reloadSpeed: weaponData[e.detail].reload,
            muzzleVelocity: weaponData[e.detail]['muzzle-velocity'],
            meleeDamage: weaponData[e.detail]['light-melee-damage'],
            heavyMeleeDamage: weaponData[e.detail]['heavy-melee-damage'],
        });
    }

    componentDidMount() {
        window.addEventListener('weapon-change', this.handleWeaponUpdate);
    }

    componentWillUnmount() {
        window.removeEventListener('weapon-change', this.handleWeaponUpdate);
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
                    <RangeSlider stat='Range' onRangeUpdate={this.handleRangeUpdate} append='m'/>
                    <Bar stat='Rate of Fire' val={this.state.rof} maxVal='150' append='rpm'/>
                    <Bar stat='Max Headshot Range' val={this.state.headshotRange} maxVal='500' append='m'/>
                    <Bar stat='Handling' val={this.state.handling} maxVal='100' append='%'/>
                    <Bar stat='Reload Speed' val={this.state.reloadSpeed} maxVal='30' append='sec'/>
                    <Bar stat='Muzzle Velocity' val={this.state.muzzleVelocity} maxVal='1000' append='m/s'/>
                    <Bar stat='Travel Time' val={this.state.travelTime} maxVal='150' append='sec'/>
                    <Bar stat='Melee Damage' val={this.state.meleeDamage} maxVal='150'/>
                    <Bar stat='Heavy Melee Damage' val={this.state.heavyMeleeDamage} maxVal='150'/>
                    <HitboxMenu />
                </div>
            </div>
        );
    }
}

export default WeaponInfo;