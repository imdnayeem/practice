import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Pokedex() {
  const [pokeData, setPokeData] = useState([]);
  const [pokeIndex, setPokeIndex] = useState(1);
  const [name, setName] = useState("Bulbasaur");
  const [desc, setDesc] = useState("");
  const [shape, setShape] = useState("");
  const [habitat, setHabitat] = useState("");
  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
  );
  const [color, setColor] = useState("");

  useEffect(() => {
    fetchKantoPokemon();
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`)
      .then((res) => {
        setImage(res.data.sprites.front_shiny);
        setName(res.data.name.toUpperCase());
      })
      .catch((err) => console.error(err.data));
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokeIndex}/`)
      .then((res) => {
        setDesc(res.data.flavor_text_entries[0].flavor_text);
        setColor(toTitleCase(res.data.color.name));
        setShape(toTitleCase(res.data.shape.name));
        setHabitat(toTitleCase(res.data.habitat.name));
      })
      .catch((err) => console.error(err.data));
  }, [pokeIndex]);

  const fetchKantoPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => {
        setPokeData(res.data.results);
      })
      .catch((err) => console.error(err.data));
  };

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <>
      <h1>Pokedex</h1>
      <select onChange={(e) => setPokeIndex(e.target.value)}>
        {pokeData.map(({ name, url }, id) => (
          <option key={id} value={id + 1}>
            {name}
          </option>
        ))}
      </select>
      {
        <Card style={{ width: "18rem", align: "center" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{color}</ListGroupItem>
            <ListGroupItem>{shape}</ListGroupItem>
            <ListGroupItem>{habitat}</ListGroupItem>
          </ListGroup>
        </Card>
      }
    </>
  );
}

export default Pokedex;
