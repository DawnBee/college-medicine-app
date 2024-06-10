import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../api'
import axios from 'axios'

const Curriculum = () => {
    const [curriculum, setCurriculum] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/about/curriculum`)
            .then(res => {
                setCurriculum(res.data)
            })
            .catch(err => {
                console.error('Error fetching curriculum file:', err)
            })
    }, [])

  return (
    <section className="curriculum-section">
    <div className="layout-container">
        <h2>Curriculum & Syllabus</h2>
        <p>
            Explore the comprehensive curriculum and detailed syllabus 
            for the College of Medicine. This section provides essential 
            information on course structures, academic requirements, 
            and study materials designed to guide students through their 
            medical education journey.
        </p>
        {curriculum.map((curr) => (
            <a key={curr.id} href={curr.pdf} target="_blank" rel="noopener noreferrer">
                <button className="view-file-btn">
                    <i className="fa-regular fa-file-pdf" />
                    View File
                </button>
            </a>
        ))}
    </div>
    </section>
  )
}

export default Curriculum
