import * as React from 'react';

export interface IPlayerProps {
    score: number;
    name: string;
    isPlayersTurn: boolean;
}

export default class Player extends React.Component<
    IPlayerProps,
    IPlayerProps
> {
    public score: number = 0;
    public potentialScore: number = 0;
    public playersTurn: boolean = false;

    constructor(props: IPlayerProps) {
        super(props);
        this.state = { ...props };
    }

    public render(): JSX.Element {
        return <p>{this.state.name}</p>;
    }
}
