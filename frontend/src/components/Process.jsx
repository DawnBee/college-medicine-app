import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../api'
import axios from 'axios'

// Asset Imports
import processImage from '../assets/images/event-1.jpg'


const Process = () => {
    const [processes, setProcesses] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/admission/process`)
        .then(res => {
            setProcesses(res.data)
        })
    }, [])
    
  return (
    <>
        <h2 className="section-header">Admission Process</h2>
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
    </>
  )
}

export default Process
