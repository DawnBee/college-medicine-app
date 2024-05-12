import { useState, useEffect } from 'react'
import { API_BASE_URL } from "../api"
import axios from "axios"

const Testimonials = () => {
    const [testaments, setTestaments] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/home/testimonials`)
        .then(res => {
            setTestaments(res.data)
        })
    }, [])
  return (
    <section className="testimonial-section">
        <div className="layout-container">
            <div className="card-container">
                {testaments.map((testament, index) => (
                <div key={index} className="testimonial-card">
                    <img className="student-img" src={testament.image} alt="student image"/>
                    <div>
                        <p>{testament.content}</p>
                        <p className="student-name">{`- ${testament.name}`}</p>
                    </div>
                </div>  
                ))}          
            </div>
        </div>
    </section>
  )
}

export default Testimonials
