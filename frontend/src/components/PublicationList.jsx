import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { API_BASE_URL } from "../api"
import axios from "axios"


const PublicationList = () => {
    const [publications, setPublications] = useState([])

    useEffect(() => {
        const fetchPublications = async () => {
          try {
            const res = await axios.get(`${API_BASE_URL}/home/publications`, {
              params: { limit: 6}
            })
            setPublications(res.data)
          } catch (err) {
            console.error('Error fetching list of publications:', err)
          }
        }
        fetchPublications()
      },[])

  return (
    <aside className="list-sidebar">
        <h3 className="sidebar-title">Publications</h3>
        <ul className="detail-list">
            {publications.map((publication) => {
                let truncatedTitle = publication.title.length > 15 ? `${publication.title.substring(0, 15)} ...` : publication.title
                return (
                    <li key={publication.id} className="list-item">
                        <img src={publication.image} alt="" />
                        <div className="content">                  
                            <Link to={`/publications/${publication.id}`} className="item-title">
                                <h4>{truncatedTitle}</h4>
                            </Link>
                        </div>
                    </li>
                )
            })}
        </ul>
    </aside>
  )
}

export default PublicationList