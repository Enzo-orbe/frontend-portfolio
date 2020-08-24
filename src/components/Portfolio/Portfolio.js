import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, CardGroup, Card, Button } from "react-bootstrap";
import "./Portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    axios
      .get("https://backendport.herokuapp.com/portfolio")
      .then((res) => setProjects(res.data));
  }, [setProjects]);
  return (
    <Container>
      <CardGroup className="mega-card-portfolio">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <Card className="individual-card" key={index}>
              <Card.Title>{project.name}</Card.Title>
              <Card.Img
                className="imagen-proyecto"
                alt="imagen-proyecto"
                src={project.image}
              />
              <Card.Body>
                <Card.Text className="descripcion">
                  {project.description}
                </Card.Text>
                <Button className="boton-visitar" href={project.Link}>
                  Visitar Proyecto
                </Button>
              </Card.Body>
            </Card>
          ))}
        ;
      </CardGroup>
    </Container>
  );
}

export default Portfolio;
