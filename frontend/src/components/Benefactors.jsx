import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

const NoBenefactorFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 20em;
  place-items: center;
  & > p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const Benefactors = () => {
    const [benefactors, setBenefactors] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/about/benefactors`)
            .then(res => {
                setBenefactors(res.data)
            })
            .catch(err => {
                console.error('Error fetching benefactors:', err)
            })              
    }, [])

  return (
    <section id="benefactors" className="acknowledge-section">
        <div className="layout-container">
            <div className="header">
                <h2>The college expresses gratitude to the following:</h2>
            </div>
            {benefactors.length > 0 ? (
                <ul className="benefactor-list">
                    {benefactors.map((benefactor)=> (
                        <li key={benefactor.id} className="benefactor-item">
                            <img src={benefactor.image} alt="benefactor image" />
                            <div className="content">
                                <h3>{benefactor.name}</h3>
                                <em className="titles">{benefactor.position}</em>                             
                            </div>
                        </li>
                    ))}                     
                </ul> 
            ):(
               <NoBenefactorFound>
                    <p>'Benefactor' List Empty!</p>
               </NoBenefactorFound>
            )}
        </div>
    </section>
  )
}

export default Benefactors
