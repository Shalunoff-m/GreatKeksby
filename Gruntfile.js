module.exports = function(grunt) {
    grunt.initConfig({
        //Конфигурация
        sass: {
            dev: {
                option: {
                    style: "expanded"
                },
                files: {
                    'css/style.css': 'style.scss',
                },

            },

        },
        watch: {
            sass: {
                files: "*.scss",
                tasks: "sass",

            }

        }


    })

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'watch']);

    //Загрузка модулей




};