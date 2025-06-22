import React, { useState ,useEffect} from 'react'
import data from './reportdata.json'
import home from './home.png'
import { useNavigate } from 'react-router-dom'

const Report = () => {
  const[res,setRes] = useState()
  const navigate = useNavigate()
const [crop, setCrop] = useState()
useEffect(()=>{
  setCrop(localStorage.getItem("crop"))
  setRes(localStorage.getItem("res"))
},[])
  
  return (
    <div>
      <img type="image/png" src={home} className='w-[3rem] h-[3rem]' onClick={()=>navigate("/")}/>
    
    <div className='mx-auto w-[35rem] h-[20rem] bg-slate-300 mt-[6rem] p-[2rem] shadow-neutral-600 border-[1.5rem] border-cyan-800' >
      <h1 className='mb-[2rem] mt-[2rem] font-bold text-xl'>{res}</h1>
      {
      data.map(d=>{
        return(
          <div key={d.id}>
            {d.title==crop&&<h1 className='font-bold text-xl'>{d.season}</h1>}
          </div>
        )
      })}
      <h1 className='font-bold'>{data[crop]}</h1>
    </div>
    </div>
  )
}

export default Report