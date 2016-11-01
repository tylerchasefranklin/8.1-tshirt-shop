var React = require('react');
var CartComponent = require('./cart.jsx').CartComponent;
var TemplateComponent = require('./template.jsx').TemplateComponent;
var CatalogComponent = require('./catalog.jsx').CatalogComponent;
var TShirtCollection = require('../models/tshirts').TShirtCollection;
var OrderItemCollection = require('../models/orders').OrderItemCollection;

var AppComponent = React.createClass({
  render: function(){
    return (
      <div className="container">
        <TemplateComponent />
        <CartComponent />
      </div>
    )
  }
});


module.exports = {
  AppComponent: AppComponent
};
