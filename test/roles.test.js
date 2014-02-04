'use strict';
var expect = require('chai').expect
  , apx = require('apx')
  , roles = require('../lib/roles')
describe('Roles',function(){
  describe('Module Structure',function(){
    it('should have a name',function(){
      expect(roles.name).to.equal('roles')
    })
    it('should have a description',function(){
      expect(roles.description).to.equal('Manage Roles and Permissions')
    })
    it('should implement a start method',function(){
      expect(roles.start).to.be.a('function')
    })
  })
  describe('Initialization',function(){
    before(function(done){
      apx.once('ready',function(){
        done()
      })
      apx.start({
        testing: true,
        sysLogLevel: 2,
        cwd: __dirname,
        initializers: [roles],
        config: ['config.js']
      })
    })
    after(function(done){
      apx.once('dead',function(){
        done()
      })
      apx.stop()
    })
    it('should register the roles object',function(){
      expect(apx.instance.roles).to.be.an('object')
    })
    it('should not allow admin to use profile of test2',function(){
      expect(apx.instance.roles.getProfile('admin').hasRoles('test2.profile')).to.equal(false)
    })
    it('should allow root to use profile of test2',function(){
      expect(apx.instance.roles.getProfile('root').hasRoles('test2.profile')).to.equal(true)
    })
    it('should allow admin to use test1',function(){
      expect(apx.instance.roles.getProfile('admin').hasRoles('test.find')).to.equal(true)
    })
  })
})