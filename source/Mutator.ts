export type CustomMutator<T> = (data: T, ...args: any[]) => T;

export class Mutator<T> {
    name: string;
    mutator: CustomMutator<T>;

    constructor(name: string, mutator: CustomMutator<T>) {
        this.name = name;
        this.mutator = mutator;
    }
}