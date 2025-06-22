import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'
import Data from './pricedata.json'
import home from './home.png'

const Profit = () => {
  const navigate = useNavigate()
  const [S,setS] = useState()
  const [F,setF] = useState()
  const [L,setL] = useState()
  const [E,setE] = useState()
  const [Y,setY] = useState()
  const [crop,setCrop] = useState('')
  const [data,setData] = useState()
  const [price,setPrice] = useState(0)

const priceValue=()=>{
  Data.map(d=>{
    return (<div key={d.id}>
    {d.title===crop.toLowerCase()&&setPrice(d.value)}
  </div>
)})
price&&console.log(price*Y,S*1,L*1,F*1,E*1)
price&&setData(Y*price -(S*1+L*1+F*1+E*1))
price&&console.log(data)
  }



  return (

<body>
    <div class="main">
    <img type="image/png" src={home} className='w-[3rem] h-[3rem]' onClick={()=>navigate("/")}/>
        <div class="nav">
            <h1><marquee behavior="" direction="left">AGRO MANAGEMENT SYSTEM</marquee></h1>
        </div>
        <div class="section">
            <div class="box">

                <div class="ip">
                    <h3>Crop Name</h3>
                    <input type="text" placeholder="Crop Name" value={crop} onChange={(e) => setCrop(e.target.value)}/>
                </div>
            </div>
            <div class="box">
                <div class="ip">
                    <h3>Cost of Seeds</h3>
                    <input type="number" placeholder="Cost of Seeds" value={S} onChange={(e) => setS(e.target.value)}/>
                </div>
            </div>
            <div class="box">
                <div class="ip">
                    <h3>Cost of Fertilizers</h3>
                    <input type="number" placeholder="Cost of Fertilizers" value={F} onChange={(e) => setF(e.target.value)}/>
                </div>
            </div>
            <div class="box">

                <div class="ip">
                    <h3>Cost of Labor</h3>
                    <input type="number" placeholder="Cost of Labor" value={L} onChange={(e) => setL(e.target.value)}/>
                </div>
            </div>
        </div>

        <div class="section1">
           
            <div class="box">
                <div class="ip">
                    <h3>Cost of Equipment</h3>
                    <input type="number" placeholder="Cost of Equipment" value={E} onChange={(e) => setE(e.target.value)}/>
                </div>
            </div>
            <div class="box">
                <div class="ip">
                    <h3>Yield(in quintal)</h3>
                    <input type="number" placeholder="Yield" value={Y} onChange={(e) => setY(e.target.value)}/>
                </div>
            </div>
        </div>
      
       {data?
        <div id="wrapper">
          {data>0?<h1 class="pro">Profit earned is {data}</h1>:
          <h1>Loss is {Math.abs(data)} </h1>}
        
    </div>:

        <div id="wrapper">
            <button class="btn" onClick={(e)=>priceValue()}>Calculate Revenue</button>
        </div>
      } 
      

    </div>
</body>

  )
}


export default Profit