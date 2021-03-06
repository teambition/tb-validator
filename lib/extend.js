// Generated by CoffeeScript 1.9.1
(function() {
  var Extends, RuleType, TypeMap;

  RuleType = require('./classes/ruletype');

  Extends = [];

  TypeMap = {};

  module.exports = {
    map: TypeMap,
    extend: function(opts) {
      var ruleType;
      opts || (opts = {});
      ruleType = new RuleType(opts);
      Extends.push(ruleType);
      if (opts.name) {
        TypeMap[opts.name] = ruleType;
      }
      return ruleType;
    },
    get: function(rule) {
      var handler, i, len;
      for (i = 0, len = Extends.length; i < len; i++) {
        handler = Extends[i];
        if (handler.canHandle(rule)) {
          return handler;
        }
      }
      return null;
    },
    getByName: function(name) {
      return TypeMap[name];
    }
  };

}).call(this);
