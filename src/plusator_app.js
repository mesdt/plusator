requirejs.config({
    waitSeconds: 15,
    paths: {
        knockout: '../bower_components/knockout/dist/knockout',
        'coffee-script': '../bower_components/coffeescript/extras/coffee-script',
        cs: '../bower_components/require-cs/cs',
        bootstrap: '../bower_components/bootstrap/less/bootstrap'
    },
    map: {
        '*': {
            less: '../bower_components/require-less/less'
        }
    }
});

require(['knockout', 'cs!Plusator', 'less!bootstrap'], function (ko, Plusator) {
    ko.applyBindings(new Plusator(50, 2));
});
