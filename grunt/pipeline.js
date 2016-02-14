// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'dependencies/bootstrap/dist/css/bootstrap.min.css',
  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
  // Dependencies like jQuery, or Angular are brought in here
  'dependencies/jquery/dist/jquery.min.js',
  'dependencies/bootstrap/dist/js/bootstrap.min.js',
  'dependencies/angular/angular.min.js',
  'dependencies/angular-animate/angular-animate.min.js',
  'dependencies/angular-resource/angular-resource.min.js',
  'dependencies/angular-route/angular-route.min.js',
  'dependencies/angular-sanitize/angular-sanitize.min.js',
  'dependencies/angular-strap/dist/angular-strap.min.js',
  'dependencies/angular-strap/dist/angular-strap.tpl.min.js',
  //'js/dependencies/angular-ui-router/release/angular-ui-router.min.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'app/**/*.module.js',
  'app/**/*.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html',
  'app/**/*.tpl.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
