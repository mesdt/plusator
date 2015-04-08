requirejs.config({
    waitSeconds: 15,
    paths: {
        knockout: '../bower_components/knockout/dist/knockout',
        'coffee-script': '../bower_components/coffeescript/extras/coffee-script',
        cs: '../bower_components/require-cs/cs',
        'twbs-less': '../bower_components/bootstrap/less/bootstrap',
        'twbs-css': '../bower_components/bootstrap/dist/css/bootstrap.min'
    },
    map: {
        '*': {
            less: '../bower_components/require-less/less',
            css: '../bower_components/require-css/css.min'
        }
    }
});

require(['knockout', 'cs!Plusator', 1/*0*/ ? 'css!twbs-css' : 'less!twbs-less'], function (ko, Plusator) {
    ko.applyBindings(new Plusator(50, 2));
});
