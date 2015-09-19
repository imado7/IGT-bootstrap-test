module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compile SASS files into minified CSS.
        sass: {                              // Task 
			dist: {                            // Target 
			  options: {                       // Target options 
				style: 'expanded'
			  },
			  files: {                         // Dictionary of files 
				'build/css/style.css': 'sass/style.scss'
			  }
			}
		  },

        // Watch these files and notify of changes.
        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                files: [
                    'sass/**/*.scss'
                ],
                tasks: ['sass']
            }
        }
    });

    // Load externally defined tasks.
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Establish tasks we can run from the terminal.
    grunt.registerTask('default', ['sass', 'watch']);
}



