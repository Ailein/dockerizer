/* eslint-disable */

/**
 * 1. create custom user
 * 2. create collection (Before MongoDB can save your new database, a collection name must also be specified at the time of creation.)
 */
db.createUser({
  user: 'egg_dockerize',
  pwd: 'egg_dockerize',
  roles: [
    {
      role: 'readWrite',
      db: 'egg_dockerize'
    }
  ]
})

db.egg_cnode.insert({
  egg_dockerize: 'egg_dockerize'
})