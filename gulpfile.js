var elixir = require('laravel-elixir');

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

    // js
    mix.copy("bower_components/jquery/dist/jquery.min.js", "resources/assets/js/jquery.min.js");
    mix.copy("bower_components/jquery-ui/jquery-ui.min.js", "resources/assets/js/jquery-ui.min.js");//hopefully these don't conflict
    mix.copy("bower_components/bootstrap/dist/js/bootstrap.min.js", "resources/assets/js/bootstrap.min.js");

    mix.copy("bower_components/typeahead.js/dist/typeahead.bundle.min.js", "resources/assets/js/typeahead.bundle.min.js");
    mix.copy("bower_components/bootstrap-tokenfield/dist/bootstrap-tokenfield.min.js", "resources/assets/js/bootstrap-tokenfield.min.js");
    mix.copy("bower_components/angular/angular.min.js", "resources/assets/js/angular.min.js");

    // groups
    // folders
    mix.copy("bower_components/ckeditor", "public/js/ckeditor");
    mix.copy("ckeditor.config.js", "public/js/ckeditor/config.js");

    // css

    mix.copy("bower_components/font-awesome/css/font-awesome.min.css", "resources/assets/css/font-awesome.min.css");
    mix.copy("bower_components/typeahead.js-bootstrap3.less/typeahead.css", "resources/assets/css/typeahead.css");
    mix.copy("bower_components/bootstrap-tokenfield/dist/css/bootstrap-tokenfield.min.css", "resources/assets/css/bootstrap-tokenfield.min.css");
    mix.copy("bower_components/bootstrap-tokenfield/dist/css/tokenfield-typeahead.min.css", "resources/assets/css/tokenfield-typeahead.min.css");

    mix.less("app.less")
        .styles(["font-awesome.min.css", "bootstrap-tokenfield.min.css", "tokenfield-typeahead.min.css","main.css"])
        .scripts(['jquery.min.js', 'jquery-ui.min.js', 'bootstrap.min.js', "angular.min.js", "typeahead.bundle.min.js", "bootstrap-tokenfield.min.js"])
        .version(["public/css/all.css","public/js/all.js"]);
});
