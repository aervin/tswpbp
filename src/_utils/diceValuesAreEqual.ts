import { IDieProps } from '../_classes/dice/Die.class';

export default function diceHaveEqualValues(dice: IDieProps[]): boolean {
    const matchValue = dice[0].value;
    for (const die of dice) {
        if (die.value !== matchValue) {
            return false;
        }
    }
    return true;
}