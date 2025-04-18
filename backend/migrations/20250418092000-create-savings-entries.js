// backend/migrations/20250418092000-create-savings-entries.js
exports.up = (pgm) => {
    pgm.createTable('savings_entries', {
      id: 'id',
      user_id:     { type: 'integer', notNull: true },
      amount:      { type: 'numeric(10,2)', notNull: true },
      date:        { type: 'date', notNull: true },
      description: { type: 'text' }
    })
    pgm.addConstraint('savings_entries', 'fk_savings_entries_user', {
      foreignKeys: {
        columns:   'user_id',
        references:'users(id)',
        onDelete:  'cascade',
      },
    });
  }
  
  exports.down = (pgm) => {
    pgm.dropTable('savings_entries')
  }
  