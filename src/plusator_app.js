requirejs.config({
    paths: {
        knockout: '../bower_components/knockout/dist/knockout',
        'coffee-script': '../bower_components/coffeescript/extras/coffee-script',
        cs: '../bower_components/require-cs/cs'
    }
});

require(['knockout', 'cs!Plusator'], function (ko, Plusator) {
    ko.applyBindings(new Plusator(50, 2));
});
