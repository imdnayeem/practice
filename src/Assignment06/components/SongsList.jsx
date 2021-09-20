import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "./App.css";
import "./styles.css";
import "./styles-custom.css";
import { Table } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/song/songActions";
import SongComponent from "./SongComponent";

const SongsList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:3006/allProducts")
      .catch((err) => {
        console.log("err : ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {Object.keys(products).length === 0 ? (
        <>
          <h5>...loading</h5>
        </>
      ) : (
        <>
          <h2>Products List</h2>
          <h6>{`Number of Products : ${products.length}`}</h6>
          <Table celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <SongComponent />
          </Table>
          <Link to="/products/addProduct">
            <button className="ui button">Add</button>
          </Link>
        </>
      )}
    </>
  );
};

export default withRouter(SongsList);
