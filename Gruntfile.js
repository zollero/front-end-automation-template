module.exports = function (grunt) {
    //项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/js/',
                    src: '*.js',
                    dest: 'dest/js/',
                    rename: function(dest, src) {
                        var folder = src.substring(0, src.lastIndexOf('/'));
                        var filename = src.substring(src.lastIndexOf('/'), src.length);
                        filename = filename.substring(0, filename.lastIndexOf('.'));
                        var fileresult = dest + folder + filename + '.min.js';
                        grunt.log.writeln("现处理文件：" + src + "，处理后文件：" + fileresult);
                        return fileresult;
                    }
                }]
            }
        }
    });
    //加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-concat');

    //默认任务
    grunt.registerTask('default', ['uglify']);
    //grunt.registerTask('default', ['concat', 'uglify']);

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
