var React = require('react');

var TShirtCollection = require('../models/tshirts').TShirtCollection;


var CatalogItemComponent = React.createClass({
  render: function(){
    var self = this;

    var tShirt = this.props.model;
    return (
      <li className="catalog-item col-md-3">
        <h3>{tShirt.get("title")}</h3>
        <img src={tShirt.get("imageURL")}></img>
        <p>${tShirt.get("price")}</p>
        <button onClick={function(){self.props.addToCart(tShirt)}} className="btn btn-success">Add To Cart</button>
      </li>
    );
  }
});

var CatalogComponent = React.createClass({
  render: function(){
    var collection = this.props.catalog;
    var self = this;
    var listOfItems = collection.map(function(item){
      return (
        <CatalogItemComponent
          key={item.get('_id')}
          model={item}
          addToCart={self.props.addToCart}
        />
      );
    });
    return (
      <div className="col-md-8">
        <h3>T-SHIRTS!</h3>
        <ul className="catalog">
          {listOfItems}
        </ul>
      </div>
    );
  }
});


module.exports = {
  CatalogItemComponent: CatalogItemComponent,
  CatalogComponent: CatalogComponent
};
