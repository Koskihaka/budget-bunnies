// Luo incomes‑taulu
exports.up = (pgm) => {
    pgm.createTable('incomes', {
      id:          'id', 
      user_id:     { type: 'integer', notNull: true },
      amount:      { type: 'numeric(10,2)', notNull: true },
      category:    { type: 'varchar(50)', notNull: true },
      date:        { type: 'date', notNull: true },
      description: { type: 'text' },
    });
    // viiteavain users.id
    pgm.addConstraint('incomes', 'fk_incomes_user', {
      foreignKeys: {
        columns:   'user_id',
        references:'users(id)',
        onDelete:  'cascade',
      },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('incomes');
  };
  