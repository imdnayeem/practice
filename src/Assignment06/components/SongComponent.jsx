import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./styles.css";
import "./styles-custom.css";
import { Table } from "semantic-ui-react";
import { useSelector } from "react-redux";

const SongComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, category } = product;
    return (
      <Table.Body key={id}>
        <Table.Row>
          <Table.Cell>
            <Link to={`/product/${id}`}>{title}</Link>
          </Table.Cell>
          <Table.Cell>${price}</Table.Cell>
          <Table.Cell>{category}</Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  });

  return <>{renderList}</>;
};

export default SongComponent;
