'use strict'
module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      compile:
        expand: true,
        cwd: 'public/coffee',
        src: ['*.coffee'],
        dest: 'public/js',
        ext: '.js'
    requirejs:
      compile:
        options:
          mainConfigFile: 'public/js/build.js'
          baseUrl: 'public/js'
          name: 'main'
          include: ['build']
          out: 'public/js/main.min.js'
    watch:
      coffee:
        files: ['public/coffee/*.coffee']
        tasks: 'coffee'

  grunt.loadNpmTasks 'grunt-contrib'
  grunt.registerTask 'default', ['coffee', 'requirejs']