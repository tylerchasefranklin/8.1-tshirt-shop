var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
require('./router');

$(function(){
  Backbone.history.start();
});
