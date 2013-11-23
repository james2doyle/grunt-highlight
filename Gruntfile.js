/*
 * grunt-highlight
 * https://github.com/james2doyle/grunt-highlight
 *
 * Copyright (c) 2013 James Doyle
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    highlight: {
      default_options: {
        options: {
          useCheerio: false
        },
        files: {
          'tmp/default_options.html': ['test/fixtures/testing.js'],
        }
      },
      custom_options: {
        options: {
          useCheerio: false,
          lang: 'bash'
        },
        files: {
          'tmp/custom_options.html': ['test/fixtures/custom.sh'],
        }
      },
      cheerio_options: {
        options: {},
        files: {
          'tmp/cheerio_options.html': ['test/fixtures/cheerio.html'],
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'highlight', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
