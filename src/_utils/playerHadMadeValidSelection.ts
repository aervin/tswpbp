import { IDieProps } from './../_classes/dice/Die.class';
import diceValuesAreEqual from './../_utils/diceValuesAreEqual';
import isStraight from './../_utils/isStraight';
import isThreePairs from './../_utils/isThreePairs';

export default function playerHasMadeValidSelection(dice: IDieProps[]): boolean {
    const selectedDice: IDieProps[] = dice.filter(
        die => die.selected
    );
    if (selectedDice === undefined || selectedDice.length === 0) {
        return false;
    }
    switch (selectedDice.length) {
        case 1:
            return selectedDice[0].value === 1 || selectedDice[0].value === 5;
        case 2:
        case 3:
        case 4:
        case 5:
            return diceValuesAreEqual(selectedDice);
        case 6:
            return isStraight(selectedDice) || isThreePairs(selectedDice);
        default:
            return false;
    }
}
