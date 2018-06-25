var orm = require('../config/orm.js')
var burger = {
    all: function(cb) {
      orm.all("c5hcxskh4gew458x", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.create("c5hcxskh4gew458x", 
      ['burger_name', 'devoured'],
      [name, false],
      cb)
    },
    update: function(id, cb) {
      var condition = 'id=' +id;
      orm.update("c5hcxskh4gew458x",{devoured: true}, condition, cb)
    }
};
  
module.exports = burger;
  