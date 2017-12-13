import { IDieProps } from '../_classes/dice/Die.class';

export default function isThreePairs(dice: IDieProps[]): boolean {
    const groupBy = (list: {}[], key: string) => {
        return list.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    const groups = groupBy(dice, 'value');
    console.debug(groups);
    for (const key in groups) {
        if (groups[key].length !== 2) {
            return false;
        }
    }
    return true;
}
