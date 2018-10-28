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
/*
  'POST /companies' : 'CompanyController.create',
  'GET /companies' : 'CompanyController.find',
  'GET /companies/:id' : 'CompanyController.findOne',
  'PATCH /companies/:id' : 'CompanyController.update',
  'DELETE /companies/:id' : 'CompanyController.delete',


  //Jobs
  'POST /jobs' : 'JobController.create',
  'GET /jobs' : 'JobController.find',

  //Applications
  'POST /applications' :'ApplicationController.create',
  'GET /applications' :'ApplicationController.find',
*/
  //asistencias
  'GET /asistencias/list': 'AsistenciasController.list',
  'GET /asistencias/list/:id': 'AsistenciasController.list',
  'POST /asistencias/create': 'AsistenciasController.create',
  'POST /asistencias/update': 'AsistenciasController.update',


  //lectores
  'GET /lectores/list':'LectoresController.list',
  'GET /lectores/add':'LectoresController.add',
//  'POST /lectores/add':'LectoresController.add',
  'POST /lectores/create':'LectoresController.create',
  'GET /lectores/edit/:id':'LectoresController.edit',
  'POST /lectores/update/:id':'LectoresController.update',
  'POST /lectores/delete/:id':'LectoresController.delete',
//clases
  'GET /clases/list':'ClasesController.list',
  'POST /clases':'ClasesController.create',



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
