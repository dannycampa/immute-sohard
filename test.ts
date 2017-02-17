import { Immutable } from './source/Immutable';
import { Mutator, CustomMutator } from './source/Mutator';

type TodoDict = {[title: string]: Todo};

interface Todos {
    todos: TodoDict;
}

interface Todo {
    description: string;
    dependencies?: TodoDict;
    completed?: boolean;
}

const immute = new Immutable<Todos>();

const initialTodos: Todos = {
    todos: {
        "Be super cool": {
            description: 'I should really do something cool with this module.',
            completed: true,
        },
    }
}

immute.update(initialTodos, data => {
    data.todos["Test it"] = {
        description: "Make a bad ass test."
    };
});
