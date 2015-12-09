module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'dest/concat.js',
            //src: ['src/test.js', 'src/test2.js'],
            //dest: 'dest/<%= pkg.file %>.min.js'
            dest: 'dest/concat.min.js'
          }
        },
        concat: {
            options: {
                separator: ';/**这是分隔*/',
                banner: '/*这是banner*/',
                footer: '/*这是footer*/'
            },
            dist: {
                src: ['src/test.js', 'src/test2.js'],
                dest: 'dest/concat.js'
            }
        }
    });
    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // 默认任务
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['concat', 'uglify']);

    grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
        if(arguments.length === 0) {
            grunt.log.writeln(this.name + ",没有参数");
        } else if (arguments.length === 1) {
            gurnt.log.writeln(this.name + ",arg1:" + arguments[0]);
        } else {
            grunt.log.writeln(this.name + ",arg1:" + arguments[0] + ",arg2:" + arguments[1]);
        }
    });
}
