import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./About.css";

function About() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    axios
      .get("https://backendport.herokuapp.com/about")
      .then((res) => setInformation(res.data[0]));
  }, [setInformation]);
  return (
    <Container className="About">
      <div className="div-foto">
        <img className="foto-perfil" src={information.photo} alt="FotoPerfil" />
      </div>
      <div className="descripcion">
        <h1>{information.name} </h1>
        <h2>{information.profession} </h2>
        <p>{information.about_me}</p>
        <ul className="skills">
          {information.skills &&
            information.skills.map((skill, index) => (
              <p className="skill" key={index}>
                {skill}
              </p>
            ))}
        </ul>
      </div>
    </Container>
  );
}

export default About;
