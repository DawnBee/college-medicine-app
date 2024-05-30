import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

// Asset Imports
import processImage from '../assets/images/event-1.jpg'

const NoProcessFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 20em;
  place-items: center;
  & > p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const Process = () => {
    const [processes, setProcesses] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/admission/process`)
        .then(res => {
            setProcesses(res.data)
        })
        .catch(err => {
            console.error('Error fetching processes:', err)
        })
    }, [])
    
  return (
    <>
        <h2 className="section-header">Admission Process</h2>
        {processes.length > 0 ? (
            <div className="content-container">               
                <div className="grid-content">
                    {processes.map((process) => (
                        <div key={process.id} className="process-item">
                            <h3 className="item-header">{process.title}</h3>
                            <p>{process.description}</p>
                        </div>
                    ))}
                </div>
                <img className="process-image" src={processImage} alt="admission process image" />
            </div>
        ) : (
            <NoProcessFound>
                <p>No 'Admission Process' Found!</p>
            </NoProcessFound>
        )}
    </>
  )
}

export default Process
