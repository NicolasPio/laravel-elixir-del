# Laravel Elixir Delete

> Delete files and folders in your Laravel project

## Usage

Install Package
```
$ npm install --save-dev laravel-elixir-del
```

Add in gulpfile.js
```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-del');

elixir(function(mix) {

  mix.del('src/js/');

  mix.del(['src/file.js', 'other/file.js']);

});
```

Pass in options that are available to `del()`
```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-del');

elixir(function(mix) {

  mix.del('src/js/', {force: true, dryRun: true});

});
```

In some cases it's better to just delete, and not return a promise to delete, you can do the following:
```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-del');

elixir(function(mix) {

  mix.del('src/js/', {useSync: true});

});
```
The `useSync` option will run `del.sync()` instead of `del()` meaning anything it deletes  all the files it finds immediately.
