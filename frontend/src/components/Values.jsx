import { useState, useEffect } from "react"
import styled from 'styled-components'
import { API_BASE_URL } from "../api"
import axios from "axios"

const NoValuesFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 20em;
  place-items: center;
  & > p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

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
                console.error('Error fetching values:', err)
            })
    }, [])
  return (
    <section id="values" className="core-values-section">
        <div className="layout-container">
            <img src={coreValueImage} alt="core values image" />
            {values.length > 0 ? (
                <div className="values-container">
                    {values.map((value) => (
                        <div key={value.id} className="content">
                            <h2>{value.title}</h2>
                            <p>{value.content}</p>
                        </div>                
                    ))}
                </div>
            ):(
                <NoValuesFound>
                    <p>No 'Core Values' Found!</p>
                </NoValuesFound>
            )}
        </div>
    </section>
  )
}

export default Values
