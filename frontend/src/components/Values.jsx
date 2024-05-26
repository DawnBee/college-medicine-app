import { useState, useEffect } from "react"
import { API_BASE_URL } from "../api"
import axios from "axios"

// Asset Imports
import coreValueImage from '../assets/images/sim-1.jpg'

const Values = () => {
    const [values, setValues] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/about/values`)
            .then(res => {
                setValues(res.data)
            })
            .catch(err => {
                console.error('Error fetching values', err)
            })
    }, [])
  return (
    <section id="values" className="core-values-section">
        <div className="layout-container">
            <img src={coreValueImage} alt="core values image" />
            <div className="values-container">
                {values.map((value) => (
                    <div key={value.id} className="content">
                        <h2>{value.title}</h2>
                        <p>{value.content}</p>
                    </div>                
                ))}
            </div>
        </div>
    </section>
  )
}

export default Values
