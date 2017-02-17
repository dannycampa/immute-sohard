import * as _ from 'lodash';
import { Mutator, CustomMutator } from './Mutator';

export class Immutable<T> {
    constructor(mutators?: Mutator<T>[]) {
        if (mutators) {
            mutators.forEach(m => {
                this[m.name] = m.mutator;
            });
        }
    }

    public update: CustomMutator<T> = (data, mutator: (data: T) => void) => {
        const newData = _.cloneDeep(data);

        try {
            mutator(newData)
        } catch(err) {
            console.error('Error mutating data. Returning original state', err);
        }

        console.log('Old Data:', data);
        console.log('New Data:', newData);

        return newData;
    }

    public deleteFromKey: CustomMutator<T> = (data, key: string | number) => {
        let newData = _.cloneDeep(data);

        newData = _.omit(newData, key) as T;

        return newData;
    }
}