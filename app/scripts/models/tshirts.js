var Backbone = require('backbone');

var TShirtModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var TShirtCollection = Backbone.Collection.extend({
  model: TShirtModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/tshirts'
});


module.exports = {
  TShirtModel: TShirtModel,
  TShirtCollection: TShirtCollection
};
