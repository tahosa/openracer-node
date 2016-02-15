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

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
