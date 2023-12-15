import {useState} from 'react'
import './App.css'

function App() {

  const [count, setCount]= useState(0)

   function hello(){
    setCount(count+1)
   }
  return (
   <>
 <div> <h1 className='title' >BOOK-A-MOVIE</h1></div>
<div className='md:flex gap-60' >
  <div>
   <div className='movie-row' >SELECT A MOVIE</div>
 <div className='seat-row' >Select Time Slot</div>
 <div className='slot-row' >Select Seats</div>
 <div className='m-2' >Confirm Booking</div>
</div>
<div>Previous Booking Details</div>
</div>
   
   </>
  )
}

export default App