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
