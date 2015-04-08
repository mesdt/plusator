requirejs.config({
    paths: {
        knockout: '../bower_components/knockout/dist/knockout'
    }
});

require(['knockout', 'Plusator'], function (ko, Plusator) {
    ko.applyBindings(new Plusator());
});
