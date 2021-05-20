import React, { Component } from "react";
import ProductsForm from "./productsForm/ProductsForm";
import ProductsList from "./productsList/ProductsList";
import { connect } from "react-redux";
import {
  errorProductsSelector,
  getProductsSelector,
  loaderProductsSelector,
} from "../../redux/products/productsSelector";
import {
  addAllProductsOperation,
  addProductOperation,
  deleteProductOperations,
} from "../../redux/products/productsOperations";

class Products extends Component {
  async componentDidMount() {
    this.props.addAllProductsOperation();
  }

  addCar = async (car) => {
    this.props.addProductOperation(car);
  };

  deleteCar = async (id) => {
    this.props.deleteProductOperations(id);
  };

  render() {
    console.log(this.props.products);
    return (
      <>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading && <h2>Loading</h2>}
        <h2>Продукты</h2>
        <ProductsForm addCar={this.addCar} />
        <ProductsList
          products={this.props.products}
          deleteCar={this.deleteCar}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: getProductsSelector(state),
  isLoading: loaderProductsSelector(state),
  error: errorProductsSelector(state),
});

const mapDispatchToProps = {
  addAllProductsOperation,
  addProductOperation,
  deleteProductOperations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
