var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');

var TemplateComponent = require('./components/template.jsx').TemplateComponent;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'order/': 'order'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(TemplateComponent, {router: this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
