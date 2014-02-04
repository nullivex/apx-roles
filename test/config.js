module.exports = {
  roles: {
    apps: [
      {name: 'test', roles: ['find','save','remove','list']},
      {name: 'test2', roles: ['login','profile']}
    ],
    profiles: [
      {name: 'admin', permissions: ['test.*','test2.login']},
      {name: 'root', permissions: ['test.*','test2.*']}
    ]
  }
}