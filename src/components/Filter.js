import React from 'react'
import Rate from './rate'
import{InputGroup,FormControl} from 'react-bootstrap';

function Filter() {
    return (
        <div className ="filter">

          <Rate />
              <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><i className="fas fa-search"></i></InputGroup.Text>
              <FormControl
                placeholder="search Movie by Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
        </div>
    )
}

export default Filter
