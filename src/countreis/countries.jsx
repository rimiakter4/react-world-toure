import React, { use, useState } from 'react';
// import Country from './Country';
import Country from '../country/Country';
import './countries.css'

const Countries = ({countreisPromise}) => {
    const[visitedCountries,setVisitedCountries] =useState([])
    const handlevisitedCountries=(country)=>{
        console.log("visited cojtrerss")
        const newVisitedCountry=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountry)
    }
    const [addedFlags,setaddedFlags]=useState([])
    const handleFlags=(country)=>{
console.log("fllags added",country);
const newflags=[...addedFlags,country]
setaddedFlags(newflags)
    }
    const countriesData=use(countreisPromise)
    const countries= countriesData.countries
    console.log(countries)
    return (
        <div>
            <h1>hello worl :{countries.length}</h1>
            <h3>totalCountriesVisited :{visitedCountries.length}</h3>
            <h2>flags :{addedFlags.length} </h2>
            <ol>
                {
                    visitedCountries.map(country=><li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
  {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleFlags={handleFlags}  handlevisitedCountries={ handlevisitedCountries}></Country>)
            }
            </div>
          
        </div>
    );
};

export default Countries;