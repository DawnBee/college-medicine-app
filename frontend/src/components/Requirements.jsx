import { useState, useEffect } from "react"
import { API_BASE_URL } from "../api"
import axios from "axios"

const Requirements = () => {
    const [requirements, setRequirements] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/admission/requirements`)
            .then(res => {
                setRequirements(res.data)
            })
            .catch(err => {
                console.error('Error fetching requirements', err)
            })            
    }, [])

  return (
    <section id="requirement-section" className="requirement-section">
        <div className="layout-container">
            <h2 className="section-header">Admission Requirements</h2>
            <ul className="require-list">
                {requirements.map(( requirement) => (
                    <li key={requirement.id} className="require-item">
                        <i className="fa-regular fa-clipboard"></i>
                        <div className="content">
                            <h3 className="require-header">{requirement.name}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Requirements
