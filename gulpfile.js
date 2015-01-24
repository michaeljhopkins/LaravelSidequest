var elixir = require('laravel-elixir');

require('laravel-elixir-browser-sync');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
    .sass('app.scss')
    .browserSync([
      'app/**/*',
      'public/**/*',
      'resources/views/**/*'
    ], {
      proxy: 'sidequest.app'
    });
});
