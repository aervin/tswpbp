import { IDieProps } from './Die.class';
import getRandomNumber from '../../_utils/getRandomNumber';
import Die from './Die.class';
import * as React from 'react';

export interface IDiceGroup {
    diceGroupId: number;
    diceGroupData: IDiceGroupData;
}

export interface IDiceGroupData {
    rolling: boolean;
    dice: IDieProps[];
}

export default class DiceGroup extends React.Component<IDiceGroup, IDiceGroup>
    implements IDiceGroup {
    public diceGroupId: number;
    public diceGroupData: IDiceGroupData;

    private dice: JSX.Element[];

    constructor(props: IDiceGroup) {
        super(props);
        this.diceGroupData = props.diceGroupData;
        this.dice = this.diceGroupData.dice.map((die: IDieProps) => {
            return (
                <Die
                    key={getRandomNumber()}
                    value={props.diceGroupData.rolling ? 0 : die.value}
                    selected={
                        props.diceGroupData.rolling ? false : die.selected
                    }
                    diceGroupId={this.diceGroupId}
                    disabled={props.diceGroupData.rolling ? true : die.disabled}
                />
            );
        });
    }

    public disableGroup(): void {
        this.dice = this.dice.map((die: JSX.Element) => {
            return <Die {...die.props} disabled={true} />;
        });
    }

    public enableGroup(): void {
        this.dice = this.dice.map((die: JSX.Element) => {
            return <Die {...die.props} disabled={false} />;
        });
    }

    public render(): JSX.Element {
        return <div className="wrapper_dice-group">{this.dice}</div>;
    }
}
