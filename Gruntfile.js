/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/* \n' +
					' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
					' * <%= pkg.description %> \n' +
					' * <%= pkg.homepage %> \n' +
					' * \n' +
					' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; <%= pkg.license %> Licensed \n' +
					' */ \n\n'
		},
		// LESS
		less: {
			target: {
				options: {
					report: 'min',
					cleancss: true
				},
				files: {
					'<%= pkg.codename %>-base.css': [ 'src/<%= pkg.codename %>-base.less' ],
					'<%= pkg.codename %>-grid.css': [ 'src/<%= pkg.codename %>-grid.less' ],
					'<%= pkg.codename %>-ie.css': [ 'src/<%= pkg.codename %>-ie.less' ]
				}
			}
		},
		//Banner
		usebanner: {
			banner: {
				options: {
					position: 'top',
					banner: '<%= meta.banner %>',
					linebreak: false
				},
				files: {
					src: [
						'<%= pkg.codename %>-base.css',
						'<%= pkg.codename %>-grid.css',
						'<%= pkg.codename %>-ie.css'
					]
				}
			}
		},
		//Bower sync
		sync: {
			all: {
				options: {
					sync: [ 'name', 'version', 'description', 'author', 'license', 'homepage' ],
					overrides: {
						main: [
							'<%= pkg.codename %>-base.css',
							'<%= pkg.codename %>-12.css'
						],
						ignore: [ "*.jquery.json", "Gruntfile.js", "src/" ]
					}
				}
			}
		}
	});

	// Readme
	grunt.registerTask('buildReadme', 'Build Formstone README.md file.', function () {
		var pkg = grunt.file.readJSON('package.json'),
			destination = "README.md",
			markdown = '<a href="http://gruntjs.com" target="_blank"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt"></a> \n' +
					   '# ' + pkg.name + ' \n\n' +
					   pkg.description + ' \n\n' +
					   '- [Demo](' + pkg.demo + ') \n' +
					   '- [Documentation](' + pkg.homepage + ') \n\n' +
					   '#### Bower Support \n' +
					   '`bower install ' + pkg.name + '`';

		grunt.file.write(destination, markdown);
		grunt.log.writeln('File "' + destination + '" created.');
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-npm2bower-sync');

	// Default task.
	grunt.registerTask('default', [ 'less', 'usebanner', 'sync', 'buildReadme' ]);

};