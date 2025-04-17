// backend/migrations/20250417-create-users.js
exports.up = (pgm) => {
    pgm.createTable('users', {
      id:         'id', // serial primary key
      name:       { type: 'varchar(100)', notNull: true },
      email:      { type: 'varchar(100)', notNull: true, unique: true },
      password:   { type: 'varchar(256)', notNull: true },
      created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('users');
  };  