import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../api'
import axios from 'axios'

// Components
import EventList from './EventList'

const EventDetail = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${API_BASE_URL}/home/events/${id}/`)
      .then(res => {
        setEvent(res.data)
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

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="layout-container">
      <main id="detail-content">
          <section className="main-section">
            <div className="upper">
              <h2 className="detail-title">{event.title}</h2>
              <img className="detail-img" src={event.image} alt={event.title} />
            </div>
            <div className="lower">
              <p>{event.description}</p>
            </div>
          </section>
          {/* Events Sidebar */}
          <EventList />
      </main>
    </div>
  )
}

export default EventDetail
