import { useState, useEffect } from "react"
import styled from 'styled-components'
import { API_BASE_URL } from "../api"
import axios from "axios"

const NoRequirementFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 20em;
  place-items: center;
  & > p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const Requirements = () => {
    const [requirements, setRequirements] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/admission/requirements`)
            .then(res => {
                setRequirements(res.data)
            })
            .catch(err => {
                console.error('Error fetching requirements:', err)
            })            
    }, [])

  return (
    <section id="requirements" className="requirement-section">
        <div className="layout-container">
            <h2 className="section-header">Admission Requirements</h2>
            {requirements.length > 0 ? (
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
            ) : (
                <NoRequirementFound>
                    <p>No 'Admission Requirements' Found!</p>
                </NoRequirementFound>
            )}
        </div>
    </section>
  )
}

export default Requirements
