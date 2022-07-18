import React, { useEffect, useState } from 'react';


const Counters = () => {

    const [count, setCounter] = useState(0);

   const state = {
        counters:[
        {id:1, value: 3},
        {id:2, value: 0},
        {id:3, value: 1},
        {id:4, value: 4},
        {id:5, value: 0}
        ]
    };

    
    const handleIncrement = (counter) =>{
        const counters = [... state.counters];
        console.log(counter);


    }

    const handleDelete = (e) => {
        let counterId = e.target.parentElement;
        return counterId.remove()
    }
    
    const handleReset= () => {
        const counters = state.counters.map(counter => {
            counter.value = 0
            console.log(counter);
        })
      
    }

    useEffect(() =>{
        console.log("the counter has mounted");
    }, [])
    
    return(
        <React.Fragment>
            {state.counters.map((counter, index) => 
                <div key={index}>
                    <span className="badge m-2 bg-warning">{counter.value}</span>
                    <button className="btn btn-success m-2" onClick={() =>{useState(counter.value += 1)}}>Increment</button>
                    <button className='btn btn-danger btn-sm m-2' onClick={handleDelete}>Delete</button>
                    <br />
                </div>
                
            )}
            <button className='btn btn-danger m-2' onClick={handleReset}>Reset</button>
        </React.Fragment>
    )
}

export default Counters
