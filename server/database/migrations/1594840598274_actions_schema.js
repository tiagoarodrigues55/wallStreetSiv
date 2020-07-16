'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActionsSchema extends Schema {
  up () {
    this.create('actions', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('delegate').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('actions')
  }
}

module.exports = ActionsSchema
