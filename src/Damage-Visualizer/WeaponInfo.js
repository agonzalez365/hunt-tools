import './WeaponInfo.css';

import React from 'react';
import Bar from './Bar';
import RangeSlider from './RangeSlider'
import HitboxMenu from './HitboxMenu';
import { DamageCalculator } from './DamageCalculation';
import weaponData from '../weapondata';

class WeaponInfo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            //weapon info
            weaponName: weaponData[0].name,
            weaponDesc: weaponData[0].description,
            baseAmmoType: weaponData[0]['ammo-type'],
            ammoAmount: weaponData[0]['ammo-total'],

            //weapon stats
            baseDamage: weaponData[0].damage / 1.3,
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

    //state can lag behind due to setState being asynchronous, i haven't figured out how to completely fix it
    //i tried using callbacks with setstate however is still doesn't seem to wait
    handleUpdate = () => {
        console.log(this.state.baseAmmoType)
        switch (this.state.baseAmmoType) {
            case 'Compact Rifle':
                this.setState({ damageVal: DamageCalculator.calcCompactFalloff(this.state.baseDamage, this.state.rangeVal, this.state.hitbox)});
                break;
                // others will call different functions
            case 'Compact Pistol':
                this.setState({ damageVal: DamageCalculator.calcCompactFalloff(this.state.baseDamage, this.state.rangeVal, this.state.hitbox)});
                break;
            case 'Medium':
                this.setState({ damageVal: DamageCalculator.calcMediumFalloff(this.state.baseDamage, this.state.rangeVal, this.state.hitbox)});
            default:
                console.log('No Match');
                break;
        }
    }

    handleRangeUpdate = (rangeVal) => {
        this.setState({ rangeVal }, this.handleUpdate());
    }

    handleWeaponUpdate = (e) => {
        //takes index from event and updates relevant values
        this.setState({
            weaponName: weaponData[e.detail].name,
            weaponDesc: weaponData[e.detail].description,
            baseAmmoType: weaponData[e.detail]['ammo-type'],
            ammoAmount: weaponData[e.detail]['ammo-total'],

            baseDamage: weaponData[e.detail].damage / 1.3,
            damageVal: weaponData[e.detail].damage,
            baseAmmoType: weaponData[e.detail]['ammo-type'],
            rof: weaponData[e.detail]['rate-of-fire'],
            headshotRange: weaponData[e.detail]['headshot-range'],
            handling: weaponData[e.detail].handling,
            reloadSpeed: weaponData[e.detail].reload,
            muzzleVelocity: weaponData[e.detail]['muzzle-velocity'],
            meleeDamage: weaponData[e.detail]['light-melee-damage'],
            heavyMeleeDamage: weaponData[e.detail]['heavy-melee-damage'],
        }, this.handleUpdate());
    }

    handleHitboxUpdate = (e) => {
        this.setState({ hitbox: e.detail }, this.handleUpdate());
    }

    componentDidMount() {
        window.addEventListener('weapon-change', this.handleWeaponUpdate);
        window.addEventListener('hitbox-change', this.handleHitboxUpdate);
    }

    componentWillUnmount() {
        window.removeEventListener('weapon-change', this.handleWeaponUpdate);
        window.removeEventListener('hitbox-change', this.handleHitboxUpdate);
    }

    render(){
        return (
            <div className='weaponInfo'>
                <div className='weaponName'>{this.state.weaponName}</div>
                <div className='weaponDescription'>"{this.state.weaponDesc}"</div>
                <div className='weaponAmmoType'>Base Ammo Type: {this.state.baseAmmoType}</div>
                <div className='weaponAmmoAmount'>Ammo Amount: {this.state.ammoAmount}</div>
                <div className='weaponStats'>
                    <Bar stat='Damage' val={this.state.damageVal} maxVal='150'/>
                    <RangeSlider stat='Range' onRangeUpdate={this.handleRangeUpdate} append='m' val={this.state.rangeVal}/>
                    <Bar stat='Rate of Fire' val={this.state.rof} maxVal='150' append='rpm'/>
                    <Bar stat='Max Headshot Range' val={this.state.headshotRange} maxVal='500' append='m'/>
                    <Bar stat='Handling' val={this.state.handling} maxVal='100' append='%'/>
                    <Bar stat='Reload Speed' val={this.state.reloadSpeed} maxVal='30' append='sec'/>
                    <Bar stat='Muzzle Velocity' val={this.state.muzzleVelocity} maxVal='1000' append='m/s'/>
                    {/* travel time calculations not implemented */}
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