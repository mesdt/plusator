function Plusator() {
    this.x = ko.observable(50);
    this.perc = ko.observable(2);
    this.answer = ko.computed(function () {
        var x = parseFloat(this.x());
        var perc = parseFloat(this.perc());
        var answer = x + x / 100 * perc;
        return answer;
    }, this);
}
