import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handlevisitedCountries,handleFlags}) => {
    // console.log(handlevisitedCountries)
    const [visited,setVisited]=useState(false)
    console.log(country.name.official)

    const btnhandel=()=>{
if(visited){
    setVisited(false)
}
else{
    setVisited(true)
}
 handlevisitedCountries(country);
 handleFlags(country)
}
    return (
        <div className={`country ${visited && 'visited'}`}>
              <img src={country.flags.flags.png} alt="" />
            <h3>name :{country.name.common} </h3>
            <p>popukation : {country.population.population}</p>
          
            <h4> ofical : {country.name.official}</h4>
            <p>area ;{country.area.area} {country.area.area>300000 ?'big country ' :"small country"}</p>
            <button onClick={btnhandel}>{visited?"visited": "not visited"}</button>
            <button onClick={handleFlags}>added a flags</button>
        </div>
    );
};

export default Country;