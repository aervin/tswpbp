import * as React from 'react';

export interface IDieProps {
    value: number;
    selected: boolean;
    disabled: boolean;
    diceGroupId: number;
}

export default class Die extends React.Component<IDieProps, IDieProps> {
    /* The number of dots on this die's face */
    public value: number;

    /* Die have a GroupId if they've been counted toward
    a player's potential gains */
    private diceGroupId: number;

    /* Allows/disallows player to roll this die */
    private disabled: boolean;

    /* Player has selected this die for scoring */
    private selected: boolean;

    constructor(props: IDieProps) {
        super(props);
        this.value = props.value || 1;
        this.diceGroupId = props.diceGroupId || -1;
        this.disabled = props.disabled || false;
        this.selected = props.selected || false;
    }

    public get groupId() {
        return this.diceGroupId;
    }

    public get status() {
        return {
            selected: this.selected,
            disabled: this.disabled
        };
    }

    public deselect(): void {
        this.selected = false;
    }

    public disable(): void {
        this.disabled = true;
    }

    public enable(): void {
        this.disabled = false;
    }

    public render(): JSX.Element {
        return (
            <img src={DICE_IMAGES.find(img => img.value === this.value)!.img} />
        );
    }

    public select(): void {
        this.selected = true;
    }
}

const DICE_IMAGES: { value: number; img: any }[] = [
    {
        value: 0,
        img: require('./../../_images/dice_animated.gif')
    },
    {
        value: 1,
        img: require('./../../_images/dice_one.png')
    },
    {
        value: 2,
        img: require('./../../_images/dice_two.png')
    },
    {
        value: 3,
        img: require('./../../_images/dice_three.png')
    },
    {
        value: 4,
        img: require('./../../_images/dice_four.png')
    },
    {
        value: 5,
        img: require('./../../_images/dice_five.png')
    },
    {
        value: 6,
        img: require('./../../_images/dice_six.png')
    }
];
