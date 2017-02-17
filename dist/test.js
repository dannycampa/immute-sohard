"use strict";
var Immutable_1 = require("./source/Immutable");
var immute = new Immutable_1.Immutable();
var initialTodos = {
    todos: {
        "Be super cool": {
            description: 'I should really do something cool with this module.',
            completed: true,
        },
    }
};
immute.update(initialTodos, function (data) {
    data.todos["Test it"] = {
        description: "Make a bad ass test."
    };
});
//# sourceMappingURL=test.js.map