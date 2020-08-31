import { EffectAmounts } from "./EffectAmounts";

export interface Spell {
    spellKey: string,
    name: string,
    abilityIconPath: string,
    abilityVideoPath: string,
    abilityVideoImagePath: string,
    cost: string,
    cooldown: string,
    description: string,
    dynamicDescription: string,
    formulas: any,
    range: Array<number>,
    costCoefficients: Array<number>,
    cooldownCoefficients: Array<number>,
    coefficients: {
        cofficient1: number,
        coefficient2: number
    },
    effectAmounts: EffectAmounts, 
    ammo: {
        ammoRechargeTime: Array<number>,
        maxAmmo: Array<number>
    },
    maxLevel: number
}