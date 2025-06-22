import React,{useState} from 'react'
import './form.css'
import {useNavigate} from 'react-router-dom'
import home from './home.png'
const Form = () => {
  const navigate = useNavigate()

  const [N,setN] = useState()
  const [P,setP] = useState()
  const [K,setK] = useState()
  const [temperature,setTemperature] = useState()
  const [humidity,setHumidity] = useState()
  const [ph,setPh] = useState()
  const [rainfall,setRainfall] = useState()
  const handleClick= async(e) => {
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
const crop = val["crop"].toLowerCase()
localStorage.setItem("crop",crop)
localStorage.setItem("res",val["res"])
navigate('/report')
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
                    <h3>Nitrogen(ppm)</h3>
                    <input type="number" placeholder="Enter Nitrogen" value={N} onChange={(e) => setN(e.target.value)}/>
                </div>
            </div>
            <div class="box">
                <div class="ip">
                    <h3>Phosphorus(ppm)</h3>
                    <input type="number" placeholder="Enter Phosphorus" value={P} onChange={(e) => setP(e.target.value)}/>
                </div>
            </div>
            <div class="box">
                <div class="ip">
                    <h3>Potassium(ppm)</h3>
                    <input type="number" placeholder="Enter Potassium" value={K} onChange={(e) => setK(e.target.value)}/>
                </div>
            </div>
            <div class="box">

                <div class="ip">
                    <h3>Temperature(C)</h3>
                    <input type="number" placeholder="Enter Temperature in &deg C" value={temperature} onChange={(e) => setTemperature(e.target.value)}/>
                </div>
            </div>
        </div>

        <div class="section1">
           
            <div class="box">
                <div class="ip">
                    <h3>Humidity(g/m^3)</h3>
                    <input type="number" placeholder="Enter Humidity in %" value={humidity} onChange={(e) => setHumidity(e.target.value)}/>
                </div>
            </div>
            <div class="box">
                <div class="ip">
                    <h3>pH</h3>
                    <input type="number" placeholder="Enter pH value" value={ph} onChange={(e) => setPh(e.target.value)}/>
                </div>
            </div>
            <div class="box">

                <div class="ip">
                    <h3>Rainfall(mm)</h3>
                    <input type="number" placeholder="Enter Rainfall in mm" value={rainfall} onChange={(e) => setRainfall(e.target.value)}/>
                </div>
            </div>
        </div>

        <div id="wrapper">
            <button class="btn" onClick={(e)=>handleClick(e)}>Get Recommendation</button>
        </div>

    </div>
</body>

  )
}

export default Form