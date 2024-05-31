import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

const NoTrainingsFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 20em;
  place-items: center;
  & > p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const SimTraining = () => {
    const [trainings, setTrainings] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/simulation/trainings`)
            .then(res => {
                setTrainings(res.data)
            })
            .catch(err => {
                console.error('Error fetching trainings:', err)
            })
    }, [])
  return (
    <section id="sim-training" className="simbased-training-section">
        <div className="layout-container">
            <div className="intro-group">
                <h2>Simulation-Based Education (SBE): Training</h2>
                <p>
                    "Optimizing Simulation-Based Education (SBE): Training,
                    Collaboration, and Research - A focus on Technology-Driven 
                    Teaching and Learning Strategies." 
                </p>
            </div>
            {trainings.length > 0 ? (
                <div className="content">
                    <ul className="training-list">
                        {trainings.map((training) => {
                            return (
                                <li key={training.id} className="training-item">
                                <img src={training.image} alt="training image" />
                                <div className="text-group">
                                    <h3>{training.name}</h3>
                                    <em>{training.place}</em>
                                    <p>{training.description}</p>
                                </div>
                            </li>
                            )
                        })}
                    </ul>
                </div>                
            ):(
                <NoTrainingsFound>
                    <p>No 'Trainings' Found!</p>
                </NoTrainingsFound>
            )}
        </div>
    </section>
  )
}

export default SimTraining