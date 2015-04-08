define(['knockout'], function (ko) {
    return function Plusator() {
        this.x = ko.observable(50);
        this.perc = ko.observable(2);
        this.answer = ko.computed(function () {
            var x = parseFloat(this.x());
            var perc = parseFloat(this.perc());
            return x + x / 100 * perc;
        }, this);
    };
});
