###
# @author Will Steinmetz
# notific8 Javascript plug-in - build task
# Copyright (c)2013-2016, Will Steinmetz
# Licensed under the BSD license.
# http://opensource.org/licenses/BSD-3-Clause
###

module.exports = (grunt) ->
  grunt.config('pug',
    release:
      files:
        'demo/index.html': 'src/pug/index.pug'
  )

  grunt.loadNpmTasks 'grunt-contrib-pug'
