import React,{useState} from 'react'
import {Card,Button,Modal} from 'react-bootstrap';
import Rate from './rate'
import {Link} from 'react-router-dom'
function MovieCard({movie}) {

  function Example() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    return (
      <>
        <Button onClick={() => setLgShow(true)}>Trailer</Button>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {movie.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{(movie.trailer)}</Modal.Body>
        </Modal>
      </>
    );
  }
  // const deleteMovie = () =>{
  //   console.log(movie)
  // }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
              
            
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title> {movie.name}  </Card.Title>
             
            </Card.Body>
            <Example />

            <Link to={`/details/${movie.id}`}> <Button variant="primary">Details</Button> </Link>
            
          </Card>
        </div>
    )
}

export default MovieCard
