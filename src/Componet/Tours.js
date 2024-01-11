import React from 'react'
import Card from './Card';

function Tours({tours,removeTour,setTours}){
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Chandra</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card tours={tours} setTours={setTours} {...tour} removeTour={removeTour}> </Card>;
                    })
                }
            </div>
        </div>
    )
}

export default Tours; 