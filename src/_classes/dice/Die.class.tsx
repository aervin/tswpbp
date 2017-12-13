import * as React from 'react';

export interface IDieProps {
    value: number;
    selected: boolean;
    disabled: boolean;
    diceGroupId: number;
}

export default class Die extends React.Component<IDieProps, IDieProps> {
    constructor(props: IDieProps) {
        super(props);
        this.state = { ...props };
    }

    public get groupId() {
        return this.state.diceGroupId;
    }

    public get status() {
        return {
            selected: this.state.selected,
            disabled: this.state.disabled
        };
    }

    public deselect(): void {
        this.setState({ selected: false });
    }

    public disable(): void {
        this.setState({ disabled: true });
    }

    public enable(): void {
        this.setState({ disabled: false });
    }

    public render(): JSX.Element {
        return (
            <img
                src={
                    DICE_IMAGES.find(img => img.value === this.state.value)!.img
                }
            />
        );
    }

    public select(): void {
        this.setState({ selected: true });
    }
}

// tslint:disable-next-line:no-any
const DICE_IMAGES: { value: number; img: any }[] = [
    {
        value: 0,
        img: require('./../../_images/dice/dice_animated.gif')
    },
    {
        value: 1,
        img: require('./../../_images/dice/dice_one.png')
    },
    {
        value: 2,
        img: require('./../../_images/dice/dice_two.png')
    },
    {
        value: 3,
        img: require('./../../_images/dice/dice_three.png')
    },
    {
        value: 4,
        img: require('./../../_images/dice/dice_four.png')
    },
    {
        value: 5,
        img: require('./../../_images/dice/dice_five.png')
    },
    {
        value: 6,
        img: require('./../../_images/dice/dice_six.png')
    }
];
