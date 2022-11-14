import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const FullInfo = () => {
    const name = useParams()
    const getFullData = async() =>{
  const response = await axios.get(`
  https://restcountries.com/v2/name/${name.name}?fullText=true`)
console.log(response.data[0]);    
}
useEffect(()=>{
getFullData()
},[])
  return (
    <div>{name.name}</div>
  )
}

export default FullInfo