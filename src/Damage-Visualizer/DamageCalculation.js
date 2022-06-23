//This file holds all the necessary functions for calculating damage.
//Functions are divided by ammo type

//holds all damage calculations methods, since they vary by ammo type
export const DamageCalculator = {
    //used in all damage calculations to determine what amount we will multiply by the slope by to determine the amount subtracted from damage percent for the given sloperange
    calcAffectedRange(slopeStart, slopeRange, range) {
        let rangeAffected;

        //console.log('\nRange affected calculations\n');
        if (slopeStart + slopeRange > range) {
            //console.log('True: ', 'Start', slopeStart, 'SRange', slopeRange, 'Range', range, 'Calc', Math.abs(range - slopeStart));
            rangeAffected = Math.abs(range - slopeStart);
        }
        else {
            //console.log('False: ', 'Start', slopeStart, 'Range', slopeRange, 'Range', range, 'Calc', slopeRange);
            rangeAffected = Math.abs(slopeRange);
        }

        return rangeAffected;
    },

    //determines hitbox damage modifiers
    calcHitboxModifier(hitbox, type) {
        switch (type) {
            case 'c':
                return HitboxModifiers.Compact[hitbox];
            case 'm':
                return HitboxModifiers.Medium[hitbox];
            case 'l':
                return HitboxModifiers.Long[hitbox];
            default:
                return -1;
        }
    },

    //currently all falloff calculations for this only go up to 100 meters
    //due to conflicting data regarding longer ranges for some ammo types and time constraints
    //what i made the calculations with:
    //https://cdn.discordapp.com/attachments/239478591723798529/989370641499164692/2r917o8xkep41.jpg
    //https://cdn.discordapp.com/attachments/972674325482192947/973422368770904105/ohjx8okd6qb81.jpg
    //conflicting data
    //https://www.huntshowdown.com/files/wysiwyg/b1db9cb5111decbaf24796a1e04e495d.jpg
    //my two main references also had conflicts on silenced weapons

    //other notes:
    //as far as I can tell damage might not be completely linear like the line graphs provided by the devs suggest
    //however it seems to be pretty close regardless**, most variance from actual stats will be in ranges with steeper slopes
    //on the base winfield

    calcCompactFalloff(baseDamage, range, hitbox) {
        //currently hard set to upper torso modifier due to issues with hitbox selection
        let damageWithFalloff = baseDamage * 1.3;
        let rangeAffected;
        let slopeStart;
        let slopeRange;
        let slope;
        let hitboxModifier = DamageCalculator.calcHitboxModifier(hitbox, 'c');

        //if range is high enough for falloff, apply damage lost over the range the given slope affects
        if (range > 20) {
            slopeStart = 20;
            slopeRange = 10;
            slope = 1.5;

            rangeAffected = DamageCalculator.calcAffectedRange(slopeStart, slopeRange, range);

            damageWithFalloff -= rangeAffected * slope;
            //if range is high enough for more falloff, do the same calculation for given range and slope, this will repeat a lot
            if (range > 30) {
                slopeStart = 30;
                slopeRange = 20;
                slope = 1.55;

                rangeAffected = DamageCalculator.calcAffectedRange(slopeStart, slopeRange, range);

                damageWithFalloff -= rangeAffected * slope;
            }
            if (range > 50) {
                slopeStart = 50;
                slopeRange = 20;
                slope = 0.85;

                rangeAffected = DamageCalculator.calcAffectedRange(slopeStart, slopeRange, range);

                damageWithFalloff -= rangeAffected * slope;
                if (range > 70) {
                    slopeStart = 70;
                    slopeRange = 30;
                    slope = 0.566;

                    rangeAffected = DamageCalculator.calcAffectedRange(slopeStart, slopeRange, range);

                    damageWithFalloff -= rangeAffected * slope;
                }
            }
        }
        //console.log(damageWithFalloff, hitboxModifier, damageWithFalloff * hitboxModifier)
        //when hitbox modifiers are re-implemented damage with falloff will be multiplied by it
        return damageWithFalloff;
    },

    calcMediumFalloff(baseDamage, range, hitbox) {
        //currently hard set to upper torso modifier due to issues with hitbox selection
        let damageWithFalloff = baseDamage * 1.3;
        let rangeAffected;
        let slopeStart;
        let slopeRange;
        let slope;
        let hitboxModifier = DamageCalculator.calcHitboxModifier(hitbox, 'c');

        //if range is high enough for falloff, apply damage lost over the range the given slope affects
        if (range > 20) {
            slopeStart = 20;
            slopeRange = 20;
            slope = 1.3;

            rangeAffected = DamageCalculator.calcAffectedRange(slopeStart, slopeRange, range);

            damageWithFalloff -= rangeAffected * slope;
            //if range is high enough for more falloff, do the same calculation for given range and slope, this will repeat a lot
            if (range > 30) {
                slopeStart = 30;
                slopeRange = 20;
                slope = 1.55;

                rangeAffected = DamageCalculator.calcAffectedRange(slopeStart, slopeRange, range);

                damageWithFalloff -= rangeAffected * slope;
            }
            if (range > 50) {
                slopeStart = 50;
                slopeRange = 20;
                slope = 0.85;

                rangeAffected = DamageCalculator.calcAffectedRange(slopeStart, slopeRange, range);

                damageWithFalloff -= rangeAffected * slope;
                if (range > 70) {
                    slopeStart = 70;
                    slopeRange = 30;
                    slope = 0.566;

                    rangeAffected = DamageCalculator.calcAffectedRange(slopeStart, slopeRange, range);

                    damageWithFalloff -= rangeAffected * slope;
                }
            }
        }
        console.log(damageWithFalloff, hitboxModifier, damageWithFalloff * hitboxModifier)
        //when hitbox modifiers are re-implemented damage with falloff will be multiplied by it
        return damageWithFalloff;
    }

}

//contains hitbox modifiers used in damage calculation
//modifiers provided by devs -> https://media.discordapp.net/attachments/350202864242655234/692799272017461315/27.jpg?width=1204&height=677
export const HitboxModifiers = {
    Compact: {
        'Head': 6,
        'Upper Torso': 1.3,
        'Lower Torso': 1,
        'Arms': 0.8,
        'Legs': 0.7
    },
    Medium: {
        'Head': 5,
        'Upper Torso': 1.3,
        'Lower Torso': 1,
        'Arms': 0.8,
        'Legs': 0.7
    },
    Long: {
        'Head': 4,
        'Upper Torso': 1.3,
        'Lower Torso': 1,
        'Arms': 0.8,
        'Legs': 0.7
    },
}