import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../api'
import { format } from 'date-fns'
import axios from 'axios'

const Activities = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        const fetchActivities = async () => {
          try {
            const res = await axios.get(`${API_BASE_URL}/others/activities`, {
              params: { limit: 3}
            })
            setActivities(res.data)
          } catch (err) {
            console.error('Error fetching activities:', err)
          }
        }
        fetchActivities()
      }, [])

  return (
    <article className="community-activities">
        <h2>Community Activities</h2>
        <ul className="activity-list">
            {activities.map((activity) => {
                // Parse and format datetime
                let date = new Date(activity.date_held)
                let formattedMonth = format(date, 'MMMM')
                let formattedDay = format(date, 'dd')
                let formattedTime = format(date, 'h a')

                return (
                    <li key={activity.id} className="activity-item">
                        <div className="date-box">
                            <p className="date">{formattedMonth}<span>{formattedDay}</span></p>
                        </div>
                        <div className="text-group">
                            <h3 className="name">{activity.name}</h3>
                            <p className="time">{formattedTime}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    </article>
  )
}

export default Activities