import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../api'
import axios from 'axios'

// Components
import OfficerList from './OfficerList'

const OfficerDetail = () => {
    const { id } = useParams()
    const [officer, setOfficer] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${API_BASE_URL}/others/officers/${id}/`)
          .then(res => {
            setOfficer(res.data)
            setLoading(false)
          })
          .catch(err => {
            console.error('Error fetching officer:', err)
            setLoading(false)
          })
      }, [id])

      if (loading) {
        return <div>Loading...</div>
      }
    
      if (!officer) {
        return <div>Officer not found</div>  
    }

  return (
    <div className="layout-container">
      <main id="detail-content">
          <section className="main-section">
            <div className="upper">
              <h2 className="detail-title">{officer.position}</h2>
              <img className="detail-img officer" src={officer.image} alt={officer.position} />
            </div>
            <div className="lower">
                <p className="officer-name"><span>Name:</span> {officer.name}</p>
            </div>
          </section>
          <OfficerList />
      </main>
    </div>
  )
}

export default OfficerDetail
