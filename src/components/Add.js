import {Button,Modal,Form} from 'react-bootstrap';

import { useState } from 'react';


export default function Add() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Titre</Form.Label>
    <Form.Control type="email" placeholder="Give The Titre of the Movie" />
    <Form.Label>Movie Desception</Form.Label>
    <Form.Control type="email" placeholder="Give a brief description" />
    <Form.Label>PosterURL</Form.Label>
    <Form.Control type="email" placeholder="Give The Adress of the poster" />
    <Form.Label>Movie Rating</Form.Label>
    <Form.Control type="email" placeholder="Give The Rate of the movie" />
  </Form.Group>
  
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
