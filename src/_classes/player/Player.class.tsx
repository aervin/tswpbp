import * as React from 'react';

export interface IPlayerProps {
    score: number;
    name: string;
    isPlayersTurn: boolean;
}

export interface IPlayerState {
    score: number;
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
        this.score = props.score;
        this.playersTurn = props.isPlayersTurn;
    }

    public modifyScore(points: number): number {
        if (points !== undefined && typeof points === 'number') {
            this.score += points;
        }
        return this.score;
    }
}
