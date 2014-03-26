module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'assets/js/main.js': [
            'assets/js/jquery-2.0.3.js',
            'assets/js/jquery.onepage-scroll.js',
            'assets/js/app.js'
          ]
        }
      }
    },

    processhtml: {
      dist: {
        files: {
          'index.html': ['dev.html']
        }
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'assets/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'assets/css/',
        ext: '.min.css'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // 
  grunt.loadNpmTasks('grunt-processhtml');
  //
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'processhtml']);

};