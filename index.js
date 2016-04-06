var Elixir = require('laravel-elixir'),
    del = require('del');

var Task = Elixir.Task;

Elixir.extend('del', function (arr) {
    new Task('del', function () {
        return del(arr);
    });
});
