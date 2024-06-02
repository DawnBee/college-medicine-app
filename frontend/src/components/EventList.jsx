import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { API_BASE_URL } from "../api"
import axios from "axios"


const EventList = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const res = await axios.get(`${API_BASE_URL}/home/events`, {
              params: { limit: 6}
            })
            setEvents(res.data)
          } catch (err) {
            console.error('Error fetching list of events:', err)
          }
        }
        fetchEvents()
      },[])  

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
  return (
    <aside className="list-sidebar">
        <h3 className="sidebar-title">Recent Events</h3>
        <ul className="detail-list">
            {events.map((event) => {
                let truncatedTitle = event.title.length > 15 ? `${event.title.substring(0, 15)} ...` : event.title
                return (
                    <li key={event.id} className="list-item">
                        <img src={event.image} alt="" />
                        <div className="content">                  
                            <Link to={`/events/${event.id}`} className="item-title">
                                <h4>{truncatedTitle}</h4>
                            </Link>
                            <em>{formatDate(event.date_added)}</em>
                        </div>
                    </li>
                )
            })}
        </ul>
    </aside>
  )
}

export default EventList