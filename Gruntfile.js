module.exports = function(grunt) {

  // Lets load some plugins here
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: "/*! <%= pkg.name %> v<%= pkg.version %> | " +
            "<%= grunt.template.today('dd-mm-yyyy-hh:MM:ss') %>\n" +
            " * Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %> |" +
            " Licensed <%= pkg.license %>\n */\n",

    sass: {
      dist: {                            // Target
        options: {                       // Target options
          sourcemap: true,
          style: 'expanded'
        },
        files: {                        // Dictionary of files
          'css/main.css': 'sass/main.sass'       // 'destination': 'source
        }
      }
    },

    jekyll: {

      options: {                          // Universal options
          bundleExec: true
      },
      build: {                             // Target
          options: {                        // Target options
              dest: '_site'
          }
      },
      serve:{}
    },

    watch: {

      sass: {
        files: ["sass/*.sass"],
        tasks: ["sass"]
      },

      jekyll:{
        files: ["*"],
        tasks: ["jekyll:build"]
      }

    }


  });

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};