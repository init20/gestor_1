/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  //asistencias
  'GET /asistencias/lista': 'AsistenciasController.lista',
  'GET /asistencias/lista/:id': 'AsistenciasController.lista',
  'POST /asistencias/create': 'AsistenciasController.create',
  'POST /asistencias/update': 'AsistenciasController.update',
  //login
  'GET /login':{
    view :'login'
  },
  'POST /user/login' :'UserController.login',
  //lectores
  'GET /lectores/lista':'LectoresController.lista',
  'GET /lectores/agregar':'LectoresController.agregar',
  'POST /lectores/create':'LectoresController.create',
  'GET /lectores/editar/:id':'LectoresController.editar',
  'POST /lectores/actualizar/:id':'LectoresController.update',
  'POST /lectores/delete/:id':'LectoresController.delete',
//clases
  'GET /clases/lista':'ClasesController.lista',
  'POST /clases/create':'ClasesController.create',
  //User
  'POST /user/login' : 'UserController.login',
  'POST /user/signup' : 'UserController.signup',



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
