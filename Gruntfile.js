module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // configure jshint to validate js files -----------------------------------
    jshint: {
      files: ['/public/data/**/*.js', '/server/**/*.js'],
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in data
      build: ['Gruntfile.js', '/public/data/**/*.js']
    },
    sass: {
      dist: {
        files: {
          'public/styles/css/main.css': 'public/styles/sass/main.scss'
        }
      }
    },
    uglify: {
      options:{
        banner:'/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build:{
        files:{
          'public/dist/js/app.min.js': ['/public/data/app/*.js','/public/data/controllers/*.js','/public/data/directives/*.js']
        }
      }
      
    },
      // configure cssmin to minify css files ------------------------------------
    // cssmin: {
    //   options: {
    //     banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
    //   },
    //   build: {
    //     files: {
    //       '../dist/css/style.min.css': ['../styles/css/main.css','../styles/css/styles_300.css','../styles/css/styles_600.css','../styles/css/styles_768.css']
    //     }
    //   }
    // },
    watch: {
      app: {
        files: ['/public/data/**/*.js','/server/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['public/styles/sass/*.scss', 'public/styles/sass/partials/*.scss','public/styles/sass/partials/**/*.scss'],
        tasks: ['sass']
      }
      
    }
  
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch','uglify']);
};