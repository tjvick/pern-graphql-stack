// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 2345,
      user: 'postgres',
      password: 'password',
      database: 'postgres'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: ':memory:',
    pool: {
      min: 1,
      max: 1,
      idleTimeoutMillis: 360000*1000,
    }
  }
};
