define(['knockout'], function (ko) {
    return function Plusator(x, perc) {
        this.x = ko.observable(x);
        this.perc = ko.observable(perc);
        this.answer = ko.computed(function () {
            var x = parseFloat(this.x());
            var perc = parseFloat(this.perc());
            return x + x / 100 * perc;
        }, this);
    };
});
