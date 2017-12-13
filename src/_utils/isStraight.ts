import { IDieProps } from '../_classes/dice/Die.class';

export default function isStraight(dice: IDieProps[]): boolean {
    const values: number[] = dice.map((die: IDieProps) => die.value);
    return (
        values.includes(1) &&
        values.includes(2) &&
        values.includes(3) &&
        values.includes(4) &&
        values.includes(5) &&
        values.includes(6)
    );
}