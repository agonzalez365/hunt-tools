//This file holds all the necessary functions for calculating damage.
//Functions are divided by ammo type

//used in all damage calculations to determine what amount we will multiply by the slope by to determine the amount subtracted from damage percent for the given sloperange
export function calcAffectedRange(slopeStart, slopeRange, range) {
    let rangeAffected;

    if (slopeStart + slopeRange > range) {
        rangeAffected = slopeStart + slopeRange - range;
    }
    else {
        rangeAffected = slopeRange;
    }

    return rangeAffected;
}

export function calcCompactFalloff(baseDamage, range, hitbox) {
    let damagePercent = 1;
    let rangeAffected;
    let slopeStart;
    let slopeRange;
    let slope;
    // let compactDamageMods = {
    //     head: 
    // }

    //TODO Improve calc
    //if range is high enough for falloff, apply percent of damage lost over the range the given slope affects
    if (range > 20) {
        slopeStart = 20;
        slopeRange = 10;
        slope = 0.014;

        rangeAffected = calcAffectedRange(slopeStart, slopeRange, range);

        damagePercent -= rangeAffected * slope;
        //if range is high enough for more falloff, do the same calculation for given range and slope, this will repeat a lot
        if(range > 30) {
            slopeStart = 30;
            slopeRange = 20;
            slope = 0.014;
            
            console.log(damagePercent)
            rangeAffected = calcAffectedRange(slopeStart, slopeRange, range);
            // console.log(rangeAffected);
            // console.log(rangeAffected * slope);
            // console.log(slope)

            damagePercent -= rangeAffected * slope;
            console.log(damagePercent);
        }
    }
    return baseDamage * damagePercent;
}