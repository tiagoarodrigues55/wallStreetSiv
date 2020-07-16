'use strict'

const TiagoRodrigues = use('App/Models/TiagoRodrigues')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tiagorodrigues
 */
class TiagoRodriguesController {
  async index () {
    const action = await TiagoRodrigues.all()
    return action
  }
  async store ({ request, auth}) {
    const action = await TiagoRodrigues.create({user_id: auth.user.id})
    return action
  }

  async show ({ params }) {
    const actions = await TiagoRodrigues.findOrFail(params.id)
    return actions
  }
  async update({ params, request, response }) {
    const action = await TiagoRodrigues.findOrFail(params.id);
    const data = request.only({user_id: auth.user.id});
    
    action.merge(data);
    await action.save();
    
    return action
}

  async destroy ({ params, request, response }) {
    const action = await TiagoRodrigues.findOrFail(params.id);
    await action.delete()
  }
}

module.exports = TiagoRodriguesController
