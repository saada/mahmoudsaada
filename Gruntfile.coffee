'use strict'

path = require('path')
lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet

folderMount = (connect, point)->
  return connect.static(path.resolve(point))

module.exports = (grunt) ->
  grunt.initConfig
    livereload:
      port: 35729
    connect:
      livereload:
        options:
          port: 80
          middleware: (connect, options)->
            return [lrSnippet, folderMount(connect, options.base)]
    regarde:
      js:
        files: ['**/*.jade','**/*.js','**/*.css', '**/*.html']
        tasks: ['livereload']
      coffee:
        files: 'public/**/*.coffee'
        tasks: ['coffee']
    coffee:
      compile:
        expand: true,
        cwd: 'public/coffee'
        src: ['*.coffee']
        dest: 'public/js'
        ext: '.js'
    requirejs:
      compile:
        options:
          mainConfigFile: 'public/js/build.js'
          baseUrl: 'public/js'
          name: 'main'
          include: ['build']
          out: 'public/js/main.min.js'
    growl:
        myMessage:
            message: "Some message"
            title: "Notification Title"

  grunt.loadNpmTasks 'grunt-contrib'
  grunt.loadNpmTasks 'grunt-regarde'
  grunt.loadNpmTasks 'grunt-growl'
  grunt.registerTask 'default', ['growl:myMessage', 'coffee', 'requirejs','livereload-start', 'connect', 'regarde']