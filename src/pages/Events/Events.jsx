import {React,useEffect,useState,} from 'react'
import { getAllEvetns } from '../../utils/firebase-functions'

export default function Events() {
  const [events, setEvents] = useState([]);
  
  getAllEvetns().then(response => setEvents(response) ).catch(err => console.log(err))
 
  
  return (
    <div>Events</div>
  )
}
