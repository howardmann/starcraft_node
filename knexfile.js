// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'howardmann',
      database: 'starcraft_node'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
