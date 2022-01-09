import {Button,Modal,Form} from 'react-bootstrap';

import { useState } from 'react';


export default function Add({movieHandler}) {
  //modale manipulation
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // state adding new movie
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [rate, setRate] = useState("");
    const [trailer, setTrailer] = useState();
    const addNewMovie = () =>{

      movieHandler({name:titre, description, image, rate,trailer})
      handleClose()
    }

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
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
    <Form.Label>Movie Titre</Form.Label>
    <Form.Control type="email" placeholder="Give The Titre of the Movie" onChange = {(e)=>setTitre(e.target.value)} />
    <Form.Label>Movie Desception</Form.Label>
    <Form.Control type="email" placeholder="Give a brief description" onChange = {(e)=>setDescription(e.target.value)} />
    <Form.Label>PosterURL</Form.Label>
    <Form.Control type="email" placeholder="Give The Adress of the poster" onChange = {(e)=>setImage(e.target.value)}/>
    <Form.Label>Movie Rating</Form.Label>
    <Form.Control type="email" placeholder="Give The Rate of the movie" onChange = {(e)=>setRate(e.target.value) } />
    <Form.Label>Movie Trailer</Form.Label>
    <Form.Control type="text" placeholder="Give The Trailer of the movie" onChange = {(e)=>setTrailer((e.currentTarget.value).html) } />
  </Form.Group>
  
</Form>
          </Modal.Body>
          <Modal.Footer>
            
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addNewMovie}>
              Save Changes
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>

    );
  }
  
