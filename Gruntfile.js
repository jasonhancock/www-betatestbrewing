module.exports = function(grunt) {
  grunt.initConfig({

    themeDir: "themes/betatestbrewing",

    clean: {
      assets: {
        src:['<%= themeDir %>/static'],
      },
    },

    concat: {
      options: {
        separator: ';',
      },
      js_site: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './bower_components/bootstrap-switch/dist/js/bootstrap-switch.js',
          './bower_components/handlebars/handlebars.js',
          '<%= themeDir %>/js/site.js'
        ],
        dest: '<%= themeDir %>/static/js/site.min.js',
      },
    },

    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          "<%= themeDir %>/static/stylesheets/site.min.css": "<%= themeDir %>/less/site.less"
        },
      },
    },

    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['./bower_components/font-awesome/fonts/*'], dest: '<%= themeDir %>/static/fonts', filter: 'isFile'},
          {src: ['./bower_components/bjcp-style-data/json/style-data.min.json'], dest: './content/assets/data/style-data.min.json' }
        ]
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      site: {
        files: {
          '<%= themeDir %>/static/js/site.min.js': '<%= themeDir %>/static/js/site.min.js'
        },
      },
    },

    exec: {
      main: {
        command: "make html",
      }
    },

    watch: {
      js_site: {
        files: [
          './bower_components/jquery/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './bower_components/bootstrap-switch/dist/js/bootstrap-switch.js',
          './bower_components/handlebars/handlebars.js',
          '<%= themeDir %>/js/site.js'
        ],
        tasks: ['concat:js_site', 'uglify:site']
      },
      less: {
        files: [
          '<%= themeDir %>/less/*.less',
          './bower_components/bootstrap/less/*.less',
          './bower_components/font-awesome/less/*.less'
        ],
        tasks: ['less']
      },
      copy: {
        files: [
          './bower_components/font-awesome/fonts/*'
        ],
        tasks: ['copy']
      },
      exec: {
        files: [
            './content/assets/js/*.js',
            './content/pages/*.*',
            './content/**/**/*.*'
        ],
        tasks: ['exec'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('all', ['less', 'concat', 'uglify', 'copy']);
};
