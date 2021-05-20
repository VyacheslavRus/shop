import React, { Component } from "react";
import { ProductsFormStyled } from "./ProductsFormStyled";

class ProductsForm extends Component {
  state = {
    name: "",
    model: "",
    colors: ["grey"],
    price: "",
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCar(this.state);
    this.setState({
      name: "",
      model: "",
      colors: ["grey"],
      price: "",
    });
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <ProductsFormStyled>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              onChange={this.onHandleChange}
              value={this.state.name}
            />
          </label>
          <label>
            Model:
            <input
              name="model"
              type="text"
              onChange={this.onHandleChange}
              value={this.state.model}
            />
          </label>
          <label>
            Price:
            <input
              name="price"
              type="text"
              onChange={this.onHandleChange}
              value={this.state.price}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </ProductsFormStyled>
    );
  }
}

export default ProductsForm;
