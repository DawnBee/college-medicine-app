import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

// Components
import PublicationList from './PublicationList'

const PublicationDetail = () => {
  const { id } = useParams()
  const [publication, setPublication] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${API_BASE_URL}/home/publications/${id}/`)
      .then(res => {
        setPublication(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching event:', err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!publication) {
    return <div>Event not found</div>
  }

  return (
    <div className="layout-container">
      <main id="detail-content">
          <section className="main-section">
            <div className="upper">
              <h2 className="detail-title">{publication.title}</h2>
              <img className="detail-img" src={publication.image} alt={publication.title} />
            </div>
            <div className="lower">
              <div className="lower-header">
                <h3>Abstract</h3>
                {publication.pdf && (
                    <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                        <button><i class="fa-solid fa-eye"></i>View PDF</button>
                    </a>
                )}
              </div>
              <p>{publication.description}</p>
            </div>
          </section>
          {/* Events Sidebar */}
          <PublicationList />
      </main>
    </div>
  )
}

export default PublicationDetail
