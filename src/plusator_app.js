requirejs.config({
    waitSeconds: 15,
    paths: {
        text: '../bower_components/text/text',
        cs: '../bower_components/require-cs/cs',
        knockout: '../bower_components/knockout/dist/knockout',
        'coffee-script': '../bower_components/coffeescript/extras/coffee-script',
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

require(['knockout', 1/*0*/ ? 'css!twbs-css' : 'less!twbs-less'], function (ko) {
    ko.components.register('plusator', {
        viewModel: {require: 'cs!Plusator'},
        template: {require: 'text!plusator.html'}
    });
    ko.applyBindings();
});
