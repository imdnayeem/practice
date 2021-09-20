import "./App.css";
import "./styles.css";
import "./styles-custom.css";
import axios from "axios";
import React, { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { useParams, Link } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/song/songActions";
import { useSelector, useDispatch } from "react-redux";

const SongInfo = () => {
  const product = useSelector((state) => state.product);
  const { title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:3006/allProducts/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <>
          <h5>...loading</h5>
        </>
      ) : (
        <>
          <h3>{`Product info for " ${title} "`}</h3>
          <Table celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body key={productId}>
              <Table.Row>
                <Table.Cell>${price}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <p>
            <Link to="/products">back</Link>
          </p>
        </>
      )}
    </>
  );
};

export default SongInfo;
