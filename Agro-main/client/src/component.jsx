import React, { useState } from 'react'
import QRCode from "qrcode"

const Component= () => {

  const N = 40
  const P = 50
  const K = 50
  const temperature = 40.0
  const humidity = 20.0
  const ph = 100
  const rainfall = 100
  const [data,setData] = useState('')
  const handleClick= async() => {
    const res = await fetch('/',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            N,P,K,temperature,humidity,ph,rainfall
        })
});
const val = await res.json();
setData(val.res)
console.log(data)
}


  return (
    <div className='text-white'>
      <button onClick={handleClick}>Submit</button>
      <h1>{data}</h1>
    </div>
  )
}

export default Component