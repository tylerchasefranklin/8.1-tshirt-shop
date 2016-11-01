var React = require('react');
var TemplateComponent = require('./template.jsx').TemplateComponent;
var OrderItemCollection = require('../models/orders').OrderItemCollection;

var CartComponent = React.createClass({
  // getDefaultProps: function(){
  //
  // },
  render: function(){

    return (
      // <div className="col-md-4">
      //   <h3>Your Order!</h3>
      //   <ul className="cart-list">
      //     <li>order1</li>
      //   </ul>
      //   <CartTotalComponent />
      // </div>
    )
  }
});

// var CartItemComponent = React.createClass({
//   render: function(){
//     var order = this;
//     console.log(order);
    // var order = this.props.orderItemCollection.map(function(cartItem){
    //   return (
    //     <li className="cart-item">Cart Item</li>
    //   )
    // })
//   }
// });

var CartTotalComponent = React.createClass({
  render: function(){
    return (
      <span className="cart-total">$$$</span>
    )
  }
});

module.exports = {
  CartComponent: CartComponent
};
