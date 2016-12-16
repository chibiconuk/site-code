module.exports = function(grunt) {
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	browserify: {
	    dist: {
		options: {
		    transform: [
			["babelify", {presets: ['es2015', 'react'], sourceMap: true}]
		    ]
		},
		src: 'src/main.js',
		dest: 'dist/main.js'
	    }
	},
	uglify: {
	    dist: {
		options: {
		    sourceMap: true,
		    sourceMapName: 'dist/sourceMap.map'
		},
		src: 'dist/main.js',
		dest: 'dist/composite.all.min.js'
	    }
	},
	htmlmin: {
	    dist: {
		options: {
		    removeComments: true,
		    collapseWhitespace: true
		},
		files: {
		    'dist/index.html': 'src/index.html'
		}
	    }
	},
	sass: {
	    dist: {
		options: {
		    style: 'compressed',
		    compass: false,
		    loadPath: ['node_modules/bootstrap-sass/assets/stylesheets', 'sass']
		},
		files: {
		    'dist/stylesheet.css': 'sass/main.scss'
		}
	    }
	},
	watch: {
	    js: {
		files: ['src/*.js'],
		tasks: ['browserify', 'uglify']
	    },
	    css: {
		files: ['sass/*.scss'],
		tasks: ['sass']
	    },
	    html: {
		files: ['src/*.html'],
		tasks: ['htmlmin']
	    }
	}
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify', 'uglify', 'htmlmin', 'sass']);
};
