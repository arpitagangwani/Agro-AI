import React from 'react'
import './contact.css'
import { useNavigate } from 'react-router-dom'
import home from './home.png'

const Contact = () => {
    const navigate = useNavigate()
  return (
<body>
<img type="image/png" src={home} className='w-[3rem] h-[3rem]' onClick={()=>navigate("/")}/>
    <main>
    
        <section class="contact-info">
            <h2>Contact Information</h2>
            <p>If you have any questions or inquiries, feel free to contact us:</p>
            <ul>
                <li>Email: AgroAI@gmail.com</li>
                <li>Phone:+919131911713</li>
               
                <li>Phone:+919669531778</li>
                <li>Address:Indira College Of Commerce Ans Science,Pune, India</li>
            </ul>
        </section>
    </main>
</body>
  )
}

export default Contact