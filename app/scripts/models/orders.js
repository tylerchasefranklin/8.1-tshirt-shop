var Backbone = require('backbone');


var OrderItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderItemCollection = Backbone.Collection.extend({
  model: OrderItem,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/tshirtorders',
  total: function(){
    this.reduce(function(sum, model){
      return sum + parseFloat(model.get('price'));
    }, 0);
  }
});

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Model.extend({
  model: Order
});


module.exports = {
  Order: Order,
  OrderCollection: OrderCollection,
  OrderItem: OrderItem,
  OrderItemCollection: OrderItemCollection
};
