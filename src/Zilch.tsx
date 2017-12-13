// import isStraight from './_utils/isStraight';
// import isThreePairs from './_utils/isThreePairs';
import { IDieProps } from './_classes/dice/Die.class';
import Player from './_classes/player/Player.class';
// import getRandomNumber from './_utils/getRandomNumber';
// import DiceGroup from './_classes/dice/DiceGroup.class';
import * as React from 'react';
import './Zilch.css';
import getRandomDieValue from './_utils/getRandomInt';

export interface IGameState {
    gameOver: boolean;
    diceData: IDieProps[];
    playerOne: Player | undefined;
    playerTwo: Player | undefined;
    rolling: boolean;
}
const GAME_STATE = {
    gameOver: false,
    diceData: [
        { value: 1, selected: false, disabled: false, diceGroupId: -1 },
        { value: 2, selected: false, disabled: false, diceGroupId: -1 },
        { value: 3, selected: false, disabled: false, diceGroupId: -1 },
        { value: 4, selected: false, disabled: false, diceGroupId: -1 },
        { value: 5, selected: false, disabled: false, diceGroupId: -1 },
        { value: 6, selected: false, disabled: false, diceGroupId: -1 }
    ],
    playerOne: undefined,
    playerTwo: undefined,
    rolling: false
};
export default class Zilch extends React.Component<{}, IGameState> {
    public potentialPoints = 0;

    constructor(props: {}) {
        super(props);
        this.setState({ ...GAME_STATE });
        this.initGame();
    }

    render() {
        return <h1> Zilch! </h1>;
    }

    private generateNewDice(dice: IDieProps[]): IDieProps[] {
        let newDice: IDieProps[];
        const disabledDice: IDieProps[] = dice.filter(
            (die: IDieProps) => die.disabled
        );
        const enabledDice: IDieProps[] = dice.filter(
            (die: IDieProps) => !die.disabled
        );
        enabledDice.forEach((die: IDieProps) => {
            die.value = getRandomDieValue();
        });
        newDice = [...disabledDice, ...enabledDice];
        return newDice;
    }

    private initGame(): void {
        this.initPlayers();
    }

    private initPlayers(): void {
        this.setState({
            playerOne: new Player({
                score: 0,
                name: 'Player one',
                isPlayersTurn: true
            }),
            playerTwo: new Player({
                score: 0,
                name: 'Player two',
                isPlayersTurn: false
            })
        });
    }

    private roll(): void {
        this.toggleRollAnimiation();
        setTimeout(() => {
            this.setState({
                rolling: false,
                diceData: this.generateNewDice(this.state.diceData)
            });
        }, 300);
        /* delete me! */
        this.roll();
    }

    private toggleRollAnimiation(): void {
        this.setState({
            rolling: !this.state.rolling
        });
    }

    // private playerHasMadeValidSelection(): boolean {
    //     const selectedDice: IDieProps[] = this.state.diceData.filter(
    //         die => die.selected
    //     );
    //     if (selectedDice === undefined || selectedDice.length === 0) {
    //         return false;
    //     }
    //     switch (selectedDice.length) {
    //         case 1:
    //             return (
    //                 selectedDice[0].value === 1 || selectedDice[0].value === 5
    //             );
    //         case 2:
    //         case 3:
    //         case 4:
    //         case 5:
    //             return diceHaveEqualValues(selectedDice);
    //         case 6:
    //             return isStraight(selectedDice) || isThreePairs(selectedDice);
    //         default:
    //             return false;
    //     }
    // }
}
