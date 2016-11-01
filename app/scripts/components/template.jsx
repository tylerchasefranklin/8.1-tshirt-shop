var React = require('react');

var CatalogComponent = require('./catalog.jsx').CatalogComponent;
var TShirtCollection = require('../models/tshirts').TShirtCollection;
var OrderItemCollection = require('../models/orders').OrderItemCollection;
// var CartComponent = require('./cart.jsx').CartComponent;

var TemplateComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var collection = new TShirtCollection();
    var orderItemCollection = new OrderItemCollection();

    collection.fetch().then(function(data){
      self.setState({collection: collection, orderItemCollection: orderItemCollection});
    });
    return {
      collection: collection,
      orderItemCollection: orderItemCollection
    };
  },
  addToCart: function(catalogItem){
    var orderItemCollection = this.state.orderItemCollection;

    var cartItem = catalogItem.toJSON();
    delete cartItem.cid;
    orderItemCollection.add([cartItem]);

    this.setState({orderItemCollection: orderItemCollection});

    return {
      orderItemCollection: orderItemCollection
    };

    // console.log(orderItemCollection);

  },

  render: function(){
    var orderItemCollection = this.state.orderItemCollection;
    console.log(orderItemCollection);
    return (
        <div className="row">
          <CatalogComponent catalog={this.state.collection} addToCart={this.addToCart}/>
          <CartComponent addToCart={this.addToCart}/>
        </div>
    );
  }
});

// How do I get the items to the cart?

var CartComponent = React.createClass({
  // getDefaultProps: function(){
  //   var orderItemCollection = new OrderItemCollection();
  //   orderItemCollection.fetch();
  //   console.log(orderItemCollection);
  // },
  render: function(){
    return (
      <div className="col-md-4">
        <h3>Your Order!</h3>
        <ul className="cart-list">
          <li order={this.props.orderItemCollection}></li>
        </ul>
        <CartTotalComponent />
      </div>
    )
  }
});

var CartTotalComponent = React.createClass({
  render: function(){
    return (
      <span className="cart-total">$$$</span>
    )
  }
});



module.exports = {
  TemplateComponent: TemplateComponent
};
