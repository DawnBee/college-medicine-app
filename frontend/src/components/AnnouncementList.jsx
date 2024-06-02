import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { API_BASE_URL } from "../api"
import axios from "axios"

const AnnouncementList = () => {
    const [announcements, setAnnouncements] = useState([])

    useEffect(() => {
        const fetchAnnouncements = async () => {
          try {
            const res = await axios.get(`${API_BASE_URL}/home/announcements`, {
              params: { limit: 8}
            })
            setAnnouncements(res.data)
          } catch (err) {
            console.error('Error fetching list of announcements:', err)
          }
        }
        fetchAnnouncements()
      },[])      

    const formatDate = (dateString) => {
        const options = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

  return (
    <aside className="list-sidebar">
        <h3 className="sidebar-title">Announcements</h3>
        <ul className="detail-list">
            {announcements.map((announcement) => {
                let truncatedTitle = announcement.title.length > 15 ? `${announcement.title.substring(0, 15)} ...` : announcement.title
                return (
                    <li key={announcement.id} className="list-item">
                        <img src={announcement.image} alt="" />
                        <div className="content">                  
                            <Link to={`/announcements/${announcement.id}`} className="item-title">
                                <h4>{truncatedTitle}</h4>
                            </Link>
                            <em>{formatDate(announcement.date_added)}</em>
                        </div>
                    </li>
                )
            })}
        </ul>
    </aside>
  )
}

export default AnnouncementList
