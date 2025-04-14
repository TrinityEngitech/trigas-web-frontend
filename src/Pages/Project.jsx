// package
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Carousel } from "react-bootstrap";
// pages
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../assets/css/font.css";
import "../assets/css/Projects.css";
import Testimonal from "../Component/Testimonal";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import s2 from "../assets/image/s6.jpeg";
// import s1 from "../assets/image/s2.jpg";
import s3 from "../assets/image/s3.jpeg";
import s4 from "../assets/image/s4.jpeg";
import p1 from "../assets/image/p1.jpeg";
import p2 from "../assets/image/p2.jpeg";
import p3 from "../assets/image/p3.jpeg";

const projects = [
  {
    id: 1,
    title: "PROPANE/LPG Bulk Storage Plant",
    image: [p1, p2, p3],
    description: "An above-ground PROPANE/LPG storage plant in a mountainous region, ensuring safe storage and efficient distribution.",
  },
  {
    id: 2,
    title: "LPG Gas Bank System",
    image: [s2],
    description: "A secure LPG Gas Bank System with bottling plants, ensuring efficient storage, refilling, and uninterrupted supply for industrial use.",
  },
  {
    id: 3,
    title: "LNG Bulk Storage Plant",
    image: [s4], 
    description: "An advanced LNG Bulk Storage Plant designed for safe, large-scale storage and efficient distribution, ensuring a reliable energy supply.",
  },
  {
    id: 4,
    title: "Secondary Pipeline Distribution System",
    image: [s3],
    description: "An extensive Pipeline Distribution System ensuring safe and efficient gas transportation for industrial sectors.",
  },
];

function Project() {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <Header />
      {/* project */}
      <div className="projects">
        {/* heading */}
        <div className="container-fulid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1 className="">Our Projects</h1>
              <p>
                <Link to="/">Home</Link>{" "}
                <i>
                  <MdOutlineKeyboardArrowRight />
                </i>
                <Link>Projects</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Project List */}
        <Container className="py-5">
          <Row>
            {projects.map((project) => (
              <Col md={6} lg={4} className="mb-4" key={project.id}>
                <Card
                  className="shadow-sm border-0"
                  onClick={() => handleShow(project)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Auto-changing Carousel inside the Card */}
                  <Carousel
                    controls={false}
                    indicators={false}
                    interval={2000}
                    fade
                  >
                    {project.image.map((img, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={img}
                          className="d-block w-100"
                          alt={project.title}
                          style={{ height: "400px" }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <Card.Body>
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Modal with Multiple Images */}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              {selectedProject?.image.length > 1 ? (
                <Carousel>
                  {selectedProject.image.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={img}
                        alt={`Slide ${index}`}
                        className="img-fluid rounded"
                        style={{ height: "400px" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <img
                  src={selectedProject?.image[0]}
                  alt={selectedProject?.title}
                  className="img-fluid rounded"
                />
              )}
              <p className="mt-3">{selectedProject?.description}</p>
            </Modal.Body>
          </Modal>
        </Container>
          <Testimonal />
      </div>
      {/* project */}
      <Footer />
    </div>
  );
}

export default Project;
