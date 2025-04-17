// Luo savings‑taulu (yksi rivi per käyttäjä)
exports.up = (pgm) => {
    pgm.createTable('savings', {
      user_id: { type: 'integer', notNull: true, primaryKey: true },
      goal:    { type: 'numeric(10,2)', notNull: true, default: 0 },
      saved:   { type: 'numeric(10,2)', notNull: true, default: 0 },
    });
    // viiteavain users.id
    pgm.addConstraint('savings', 'fk_savings_user', {
      foreignKeys: {
        columns:   'user_id',
        references:'users(id)',
        onDelete:  'cascade',
      },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('savings');
  };
  