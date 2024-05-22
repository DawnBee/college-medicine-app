import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../api'
import axios from 'axios'

// Components
import AnnouncementList from './AnnouncementList'

const AnnouncementDetail = () => {
    const { id } = useParams()
    const [announcement, setAnnouncement] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${API_BASE_URL}/home/announcements/${id}`)
            .then(res => {
                setAnnouncement(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.error('Error fetching announcement:', err)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!announcement) {
        return <div>Announcement not found</div>
    }
  return (
    <div className="layout-container">
      <main id="detail-content">
          <section className="main-section">
            <div className="upper">
              <h2 className="detail-title">{announcement.title}</h2>
              <img className="detail-img" src={announcement.image} alt={announcement.title} />
            </div>
            <div className="lower">
              <p>{announcement.description}</p>
            </div>
          </section>
          {/* Announcements Sidebar */}
          <AnnouncementList />
      </main>
    </div>
  )
}

export default AnnouncementDetail
