// Luo transactions‑taulu (viiteavain users.id:iin)
exports.up = (pgm) => {
  pgm.createTable('transactions', {
    id:          'id',
    user_id:     { type: 'integer', notNull: true },
    amount:      { type: 'numeric(10,2)', notNull: true },
    category:    { type: 'varchar(50)', notNull: true },
    date:        { type: 'date', notNull: true },
    description: { type: 'text' },
  });

  pgm.addConstraint('transactions', 'fk_transactions_user', {
    foreignKeys: {
      columns: 'user_id',
      references: 'users(id)',
      onDelete: 'cascade',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('transactions');
};
