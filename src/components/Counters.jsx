import React, { useEffect, useState } from 'react';


const Counters = () => {

   const state = {
        counters:[
        {id:1, value: 3},
        {id:2, value: 0},
        {id:3, value: 1},
        {id:4, value: 4},
        {id:5, value: 0}
        ]
    };

    const handleIncrement = () =>{
        console.log("button clicked!");
    }

    const handleDelete = (e) => {
        let counterId = e.target.parentElement;
        return counterId.remove()
    }

    const handleReset= () => {
        const counters = state.counters.map(counter => {
            counter.value = 0
            return counter;
        })
    }

    
    return(
        <React.Fragment>
            {state.counters.map((counter, index) => 
                <div key={index}>
                    <span className="badge m-2 bg-warning">{counter.value}</span>
                    <button className="btn btn-success m-2" onClick={handleIncrement}>Increment</button>
                    <button className='btn btn-danger btn-sm m-2' onClick={handleDelete}>Delete</button>
                    <br />
                </div>
                
            )}
            <button className='btn btn-danger m-2' onClick={handleReset}>Reset</button>
        </React.Fragment>
    )
}

export default Counters
