module.exports = function (grunt) {

    "use strict";

    // Lets load some plugins here
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        banner: "/*! <%= pkg.name %> v<%= pkg.version %> | " +
            "<%= grunt.template.today('dd-mm-yyyy-hh:MM:ss') %>\n" +
            " * Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %> |" +
            " Licensed <%= pkg.license %>\n */\n",

        jsbeautifier: {
            files: [
                "js/**/*.js",
                "Gruntfile.js"
            ],
            options: {
                js: {
                    "indent_with_tabs": false,
                    "preserve_newlines": true,
                    "max_preserve_newlines": 4,
                    "space_in_paren": false,
                    "jslint_happy": true,
                    "brace_style": "collapse",
                    "keep_array_indentation": false,
                    "keep_function_indentation": false,
                    "eval_code": false,
                    "unescape_strings": false,
                    "break_chained_methods": false,
                    "e4x": false,
                    "wrap_line_length": 0,
                    "jsbeautifyrc_files": false
                }
            }
        },

        jslint: {
            all: {
                src: [
                    "js/*.js",
                    "Gruntfile.js"
                ],
                directives: {
                    node: true,
                    browser: true,
                    devel: true,
                    nomen: true,
                    todo: true
                }
            }
        },

        jekyll: {

            options: { // Universal options
                bundleExec: true
            },
            build: { // Target
                options: { // Target options
                    dest: '_site'
                }
            },
            serve: {}
        },

        watch: {

            jsbeautifier: {

                files: ["js/*.js", "Gruntfile.js"],
                tasks: ["jsbeautifier"]

            },

            jslint: {

                files: ["js/*.js"],
                tasks: ["jslint"]

            },

            jekyll: {
                files: ["_layouts/*.html", "_posts/*.markdown", "index.html", "blog/*.html", "_sass/*.sass", "css/*.sass", "js/*.js"],
                tasks: ["clean:forJekyllBuild", "jekyll:build"]
            }

        },

        clean: {

            forJekyllBuild: ["_site"],
            forGlobalBuild: ["_site/css", "_site/js"]

        },

        cssmin: {
            options: {
                report: "min",
                banner: "<%= banner %>"
            },
            build: {
                src: ["_site/css/*.css"],
                dest: "_site/css/main.min.css"

            }
        },

        uglify: {
            build: {
                options: {
                    mangle: true,
                    banner: "<%= banner %>",
                    report: "gzip"
                },
                src: "_site/js/**/*.js",
                dist: "_site/js/main.min.js",
                expand: true
            }
        }


    });

    // Default task(s)
    grunt.registerTask('default', ['watch']);
    grunt.registerTask("build", ["clean", "jekyll:build", "cssmin", "uglify"]);

};
