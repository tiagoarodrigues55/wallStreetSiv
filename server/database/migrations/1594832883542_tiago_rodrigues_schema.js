'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TiagoRodriguesSchema extends Schema {
  up () {
    this.create('tiago_rodrigues', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('tiago_rodrigues')
  }
}

module.exports = TiagoRodriguesSchema
