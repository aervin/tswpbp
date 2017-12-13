import { IDieProps } from './Die.class';
import getRandomNumber from '../../_utils/getRandomNumber';
import Die from './Die.class';
import * as React from 'react';

export interface IDiceGroupProps {
    diceGroupId: number;
    diceData: IDieProps[];
    rolling: boolean;
}

export interface IDiceGroupState extends IDiceGroupProps {
    dice: JSX.Element[];
}

export default class DiceGroup extends React.Component<
    IDiceGroupProps,
    IDiceGroupState
> {
    constructor(props: IDiceGroupProps) {
        super(props);
        this.state = {
            ...props,
            dice: []
        };
    }

    public componentDidMount(): void {
        this.setState({
            dice: this.mapDiceDataToElements(this.state.diceData)
        });
    }

    public componentWillReceiveProps(newProps: IDiceGroupProps): void {
        this.setState({ ...newProps });
        this.setState({
            dice: this.mapDiceDataToElements(this.state.diceData)
        });
    }

    public disableGroup(): void {
        this.setState({
            dice: this.state.dice.map((die: JSX.Element) => {
                return (
                    <Die
                        key={getRandomNumber()}
                        {...die.props}
                        disabled={true}
                    />
                );
            })
        });
    }

    public enableGroup(): void {
        this.setState({
            dice: this.state.dice.map((die: JSX.Element) => {
                return (
                    <Die
                        key={getRandomNumber()}
                        {...die.props}
                        disabled={false}
                    />
                );
            })
        });
    }

    public render(): JSX.Element {
        return <div className="wrapper_dice-group">{this.state.dice}</div>;
    }

    private mapDiceDataToElements(diceData: IDieProps[]): JSX.Element[] {
        return diceData.map((die: IDieProps) => {
            return (
                <Die
                    key={getRandomNumber()}
                    value={die.value}
                    selected={die.selected}
                    diceGroupId={this.state.diceGroupId}
                    disabled={die.disabled}
                />
            );
        });
    }
}
