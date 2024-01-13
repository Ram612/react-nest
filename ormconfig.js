module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_usrname',
    password: 'your_password',
    database: 'notes_app',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Set to false in production
  };
  