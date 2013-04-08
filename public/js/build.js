(function() {
  require.config({
    deps: ['main'],
    baseUrl: "/js",
    paths: {
      jquery: '../components/jquery/jquery',
      handlebars: '../components/handlebars/handlebars',
      ember: '../components/ember/ember',
      modernizr: '../components/modernizr/modernizr',
      bootstrap: '../components/bootstrap/bootstrap'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      ember: {
        deps: ['jquery', 'handlebars'],
        exports: "Ember"
      }
    }
  });

}).call(this);
