import {useState,React} from "react";
import data from "./data";
import Tours from "./Componet/Tours";


   
const App=()=>{

  const [tours,setTours]=useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  console.log(tours);

if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

    return(
      <div>
      <Tours tours={tours} removeTour={removeTour}  ></Tours>
    </div>
    ) 
};

export default App;   
