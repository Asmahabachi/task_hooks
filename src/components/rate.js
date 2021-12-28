import React from 'react'

function rate({rate}) {

    const ratingArr = [1,2,3,4,5]
    return (
        <div className="rating">
           {ratingArr.map((el, key) =>(el <= rate) ? <i key={key} className="fas fa-star"></i> : <i key={key} className="far fa-star"></i>)}
        </div>
    )
}

export default rate
