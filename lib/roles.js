'use strict';
exports.name = 'roles'
exports.description = 'Manage Roles and Permissions'
exports.start = function(apx,next){
  //validate the config
  if(
    !(apx.config.exists('roles.apps') && apx.config.get('roles.apps') instanceof Array) ||
    !(apx.config.exists('roles.profiles') && apx.config.get('roles.profiles') instanceof Array)
  ){
    apx.sysLog.warn('roles not configured properly, skipping')
    next()
  } else {
    var roles = require('roles')
    //add apps
    apx.config.get('roles.apps').forEach(function(v){
      if(v.name && v.roles instanceof Array){
        roles.addApplication(v.name,v.roles)
      }
    })
    //add profiles
    apx.config.get('roles.profiles').forEach(function(v){
      if(v.name && v.permissions instanceof Array){
        roles.addProfile(v.name,v.permissions)
      }
    })
    apx.roles = roles
    next()
  }
}
exports.stop = function(apx,next){
  apx.roles = undefined
  next()
}