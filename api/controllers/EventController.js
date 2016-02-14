/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var models = require('../../models');

module.exports = {
  EventList(req, res, next) {
    models.Event.findAll()
      .then(events => {
        return res.json(events);
      })
      .catch(err => {
        next(err);
      })
  },

  EventGet(req, res, next) {
    models.Event.findOne({id: req.swagger.params.id.value})
      .then(event => {
        if(event) {
          return res.json(event)
        } else {
          res.status(404).json({message: `No records found with id ${req.swagger.params.id.value}`});
        }
      })
      .catch(err => {
        next(err);
      });
  },

  EventCreate(req, res, next) {
    models.Event.create(req.swagger.params.event.value)
      .then(event => {
        if(event) {
          return res.json(event)
        } else {
          res.status(500).json({message: `Something went wrong creating the event`});
        }
      })
      .catch(err => {
        next(err);
      });
  }
};
