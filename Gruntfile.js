module.exports = function(grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),
        transport:{
            options: {
                paths: ["."],
                alias: '<%= pkg.alias %>'
            },
            myTrans: {
                options : {
                    idleading : 'dist/'
                },
                files: [{
                    cwd: 'modules/',
                    src: ['**/*.js', '!**/*-debug.js'],
                    //filter: 'isPathInCwd',
                    dest: '.build'
                }]
            }
        },
        concat: {
            options: {
                paths : ['.'],
                include : 'relative'
            },
            myConcat: {
                options: {
                    include: 'all'
                },
                files: [{
                    expand: true,
                    cwd: '.build/',
                    src: ['**/*.js'],
                    dest: 'dist/',
                    ext: '.js'
                }]
            }
        },
        uglify: {
            myUglify: {
                options: {
                    banner: '/*js minify file, build at <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> <%= grunt.filename %>*/\n'
                },
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['**/*.js', '!**/*-debug.js'],
                    dest: 'dist/'
                }]
            }
        },
        less: {
            options: {
                paths: ["."],
                yuicompress: true
            },
            all: {
                expand: true,
                cwd: 'less/',
                src: ['**/*.less'],
                dest: 'dist/css',
                ext: '.min.css'
            }
        },
        clean: {
            build: ['.build', 'dist/**/*-debug.js'],
            all: ['.build', 'dist*']
        }/*,
        rename: {
            dist: {
                files: [{
                    src: ['dist1'],
                    dest: 'dist'
                }]
            }
        }*/
    });
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-rename');

    grunt.registerTask('build', ['transport:myTrans', 'concat', 'uglify', 'less', 'clean:build']);
    //grunt.registerTask('build-test', ['transport:myTrans', 'concat', 'uglify', 'less', 'transport:transOne', 'clean:all', 'rename']);
    grunt.registerTask('trans', ['transport']);
    grunt.registerTask('css-less', ['less']);
    grunt.registerTask('clear', ['clean:all']);
    grunt.registerTask('clear-build', ['clean:build']);
    grunt.registerTask('default', []);
}