import React from 'react'
import Rate from './rate'
function Details({Liste,match,history}) {
    console.log(match,Liste)
    const found = Liste.find((elem) => (elem.id == match.params.id))
    console.log(found)  
    return (
        <div >
            <h1 style={{color: 'white'}}>{found.name}</h1>
            <Rate rate ={found.rating} />
            <img width='450' src={found.image} alt={found.name} />
            <div>
            {found.trailer}
            </div>
            <div style={{color: 'white',fontSize:40}}>  
            {found.description}
            </div>

            <button onClick={()=>history.goBack()}>Go back</button>
            <button onClick={()=>history.push('/')}>Home</button>
        </div>
    )
}

export default Details