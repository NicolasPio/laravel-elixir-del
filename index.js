var Elixir = require('laravel-elixir'),
    del = require('del');

var Task = Elixir.Task;

Elixir.extend('del', function (arr, options) {
    options = (typeof options === "undefined") ? {} : options;

    new Task('del', function () {
        if (options.useSync) {
            return del.sync(arr, options);
        }

        return del(arr, options);
    });
});
