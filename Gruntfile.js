/**
 * Created by Melody on 5/9/16.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 1337,
                    base: './'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect', 'watch']);
};
