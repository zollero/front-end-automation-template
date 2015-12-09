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

    //默认任务
    grunt.registerTask('default', ['uglify']);
}
