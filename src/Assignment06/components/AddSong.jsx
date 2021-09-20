import React from "react";
import "./App.css";
import { Formik, Form, useField } from "formik";
import "./styles.css";
import "./styles-custom.css";
import { withRouter, Prompt, Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const AddSong = (props) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const newId = uuidv4();

  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  return (
    <Formik
      initialValues={{
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: "12",
        category: "women's clothing",
        description:
          "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .min(2, "Too Short!")
          .max(60, "Must be 25 characters or less")
          .required("Required"),
        category: Yup.string()
          .min(2, "Too Short!")
          .max(30, "Must be 30 characters or less")
          .required("Required"),
        description: Yup.string()
          .max(250, "Invalid Description Length")
          .required("Required"),
        price: Yup.number().integer("Invalid price").required("Required"),
      })}
      onSubmit={(products) => {
        axios.post("http://localhost:3006/allProducts", products);
        props.history.push("/products");
      }}
    >
      {({ values }) => (
        <Form>
          <Prompt
            when={
              !!values.title ||
              !!values.price ||
              !!values.category ||
              !!values.description
            }
            message="Do you want to leave without saving data?"
          />
          <div>
            <MyTextInput
              type="text"
              name="title"
              placeholder="Mens Cotton Jacket"
              label="Apparel Name"
            />
          </div>
          <div>
            <MyTextInput
              type="number"
              name="price"
              placeholder="30"
              label="Price"
            />
          </div>
          <div>
            <MyTextInput
              type="text"
              name="category"
              placeholder="men's clothing"
              label="Category"
            />
          </div>
          <div>
            <MyTextInput
              type="text"
              name="description"
              placeholder="Your perfect pack for everyday use and walks in the forest"
              label="Description"
            />
          </div>
          <div>
            <button type="submit">save</button>
          </div>
          <div>
            <Link to="/products">back</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default withRouter(AddSong);
