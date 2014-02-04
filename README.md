apx-roles [![Build Status](https://travis-ci.org/snailjs/apx-roles.png?branch=master)](https://travis-ci.org/snailjs/apx-roles)
============

Implementation of [node-roles](https://github.com/dresende/node-roles) through an APX intitializer. Provides `apx.roles`
which can be used to test permissions.

The initializer sets up configuration options to build the definitions used in the role object.
Also, [apx-helper-crud](https://github.com/snailjs/apx-helper-crud) implements the `roles` initializer if it is loaded
at startup.

## Configuration

### Apps
* Variable `roles.apps`
* Required `yes`
* Default `null`

This is an array of of apps and their respective roles.

Example
```js
module.exports = {
  apps: [
    {name: 'myapp', roles: ['find','list','save','remove']}
  ]
}
```

### Profiles
* Variable `roles.profiles`
* Required `yes`
* Default `null`

Profiles are used to check roles against the currently logged in user. They are required and should list the available
roles to the profile these are called permissions.

Example
```js
module.exports = {
  apps: [
    {name: 'myapp', roles: ['find','list','save','remove']}
  ],
  profiles: [
    {name: 'manager', roles: ['myapp.find','myapp.list','myapp.save']},
    {name: 'admin', roles: ['myapp.*']}
  ]
}
```

## Changelog

### 0.1.0
* Initial release
