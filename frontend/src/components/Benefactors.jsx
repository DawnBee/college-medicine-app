import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../api'
import axios from 'axios'

const Benefactors = () => {
    const [benefactors, setBenefactors] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/about/benefactors`)
            .then(res => {
                setBenefactors(res.data)
            })
            .catch(err => {
                console.error('Error fetching benefactors', err)
            })              
    }, [])

  return (
    <section className="acknowledge-section">
        <div className="layout-container">
            <div className="header">
                <h2>The college expresses gratitude to the following:</h2>
            </div>
            <ul className="benefactor-list">
                {benefactors.map((benefactor)=> (
                    <li key={benefactor.id} className="benefactor-item">
                        <img src={benefactor.image} alt="benefactor image" />
                        <div className="content">
                            <h3>{benefactor.name}</h3>
                            <em className="titles">{benefactor.position}</em>
                            <p>{benefactor.content}</p>                                
                        </div>
                    </li>
                ))}                     
            </ul>                        
        </div>
    </section>
  )
}

export default Benefactors
