// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, burger_status, cb) {
    orm.update("burgers", objColVals, burger_status, function(res) {
      cb(res);
    });
  },
  delete: function(burger_status, cb) {
    orm.delete("burgers", burger_status, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;