"use strict";
var _ = require("lodash");
var Immutable = (function () {
    function Immutable(mutators) {
        var _this = this;
        this.update = function (data, mutator) {
            var newData = _.cloneDeep(data);
            try {
                mutator(newData);
            }
            catch (err) {
                console.error('Error mutating data. Returning original state', err);
            }
            console.log('Old Data:', data);
            console.log('New Data:', newData);
            return newData;
        };
        if (mutators) {
            mutators.forEach(function (m) {
                _this[m.name] = m.mutator;
            });
        }
    }
    return Immutable;
}());
exports.Immutable = Immutable;
//# sourceMappingURL=Immutable.js.map