// Luo expenses‑taulu
exports.up = (pgm) => {
    pgm.createTable('expenses', {
      id:          'id',
      user_id:     { type: 'integer', notNull: true },
      amount:      { type: 'numeric(10,2)', notNull: true },
      category:    { type: 'varchar(50)', notNull: true },
      date:        { type: 'date', notNull: true },
      description: { type: 'text' },
    });
    // viiteavain users.id
    pgm.addConstraint('expenses', 'fk_expenses_user', {
      foreignKeys: {
        columns:   'user_id',
        references:'users(id)',
        onDelete:  'cascade',
      },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('expenses');
  };
  