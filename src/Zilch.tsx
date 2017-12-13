import { IDieProps } from './_classes/dice/Die.class';
import Player from './_classes/player/Player.class';
import getRandomNumber from './_utils/getRandomNumber';
import DiceGroup from './_classes/dice/DiceGroup.class';
import * as React from 'react';
import './Zilch.css';
import getRandomDieValue from './_utils/getRandomInt';

export interface IGameState {
    gameOver: boolean;
    diceData: IDieProps[];
    playerOne: { score: number; name: string; isPlayersTurn: boolean };
    playerTwo: { score: number; name: string; isPlayersTurn: boolean };
    rolling: boolean;
}
const GAME_STATE = {
    gameOver: false,
    diceData: [
        { value: 0, selected: false, disabled: false, diceGroupId: -1 },
        { value: 2, selected: false, disabled: false, diceGroupId: -1 },
        { value: 3, selected: false, disabled: false, diceGroupId: -1 },
        { value: 4, selected: false, disabled: false, diceGroupId: -1 },
        { value: 5, selected: false, disabled: false, diceGroupId: -1 },
        { value: 6, selected: false, disabled: false, diceGroupId: -1 }
    ],
    playerOne: {
        name: 'Player one',
        score: 0,
        isPlayersTurn: true
    },
    playerTwo: {
        name: 'Player two',
        score: 0,
        isPlayersTurn: false
    },
    rolling: false
};
export default class Zilch extends React.Component<{}, IGameState> {
    readonly state: IGameState;
    public potentialPoints = 0;

    constructor(props: {}) {
        super(props);
        this.state = { ...GAME_STATE };

        /* Bind methods for template */
        this.roll = this.roll.bind(this);
    }

    public componentDidMount(): void {
        this.initGame();
    }

    public render(): JSX.Element {
        return (
            <div>
                <DiceGroup
                    diceGroupId={getRandomNumber()}
                    rolling={this.state.rolling}
                    diceData={this.state.diceData}
                />
                <button disabled={this.state.rolling} onClick={this.roll}>
                    ROLL!
                </button>
                <Player
                    name={this.state.playerOne.name}
                    score={this.state.playerOne.score}
                    isPlayersTurn={this.state.playerOne.isPlayersTurn}
                />
                <Player
                    name={this.state.playerTwo.name}
                    score={this.state.playerOne.score}
                    isPlayersTurn={this.state.playerOne.isPlayersTurn}
                />
            </div>
        );
    }

    public roll(event: {}): void {
        this.toggleRollAnimiation();
        setTimeout(() => {
            this.setState({
                rolling: false,
                diceData: this.generateNewDice(this.state.diceData)
            });
        }, 300);
    }

    private toggleRollAnimiation(): void {
        this.setState({
            rolling: !this.state.rolling
        });
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

    private initGame(): void {}
}
