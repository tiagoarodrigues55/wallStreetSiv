'use strict'
const Action = use('App/Models/Action')
require('fetch')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with Action
 */
class ActionController {
  async index () {
    const action = await Action.all()
    return action
  }
  async store ({ request, auth}) {
    const data = request.only(['delegate'])
    const action = await Action.create({user_id: auth.user.id, ...data })
    return action
  }

  async show ({ params }) {
    const actions = await Action.findOrFail(params.id)
    return actions
  }
  async update({ params, request, auth, response }) {
    const delegate = request.only(['delegate'])
    // const action = await Action.findBy('delegate', delegate.delegate && 'user_id', auth.user.id) 
    // console.log(await Action.all('delegate', delegate.delegate && 'user_id', params.id))
    const action = await Action.query().where('delegate', delegate.delegate)
    console.log(action)
    // action.merge({user_id: auth.user.id});
    // await action.save();
    
    return action
}

  async destroy ({ params, request, response }) {
    const action = await Action.findOrFail(params.id);
    await action.delete()
  }
}

module.exports = ActionController
