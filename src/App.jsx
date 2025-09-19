
import { Suspense } from 'react'
import './App.css'

import Countries from './countreis/countries'
const countreisPromise=fetch('https://openapi.programming-hero.com/api/all')
.then (res=>res.json())


function App() {


  return (
    <>
    
   
      <h1>React world tour coming ...</h1>
      <Suspense fallback={<p>navir vhai coming ...</p>}>
 <Countries countreisPromise={countreisPromise}></Countries>
      </Suspense>
    
    
    </>
  )
}

export default App
