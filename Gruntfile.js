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
      combine: {
        files: {
          'assets/css/main.css': ['assets/css/onepage-scroll.css', 'assets/css/font-awesome.css', 'assets/css/style.css']
        }
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