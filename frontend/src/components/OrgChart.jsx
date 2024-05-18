import { useState, useEffect } from "react"
import { API_BASE_URL } from "../api"
import axios from "axios"

const OrgChart = () => {
    const [orgchart, setOrgChart] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/faculty/orgchart`)
            .then(res => {
                setOrgChart(res.data)
            })
    }, [])

  return (
    <section className="org-chart-section">
        <div className="intro">
            <div className="layout-container">
                <h2>Organizational Chart</h2>
                <p>
                    Welcome to the organizational heart of the College of Medicine!
                    Our college is led by Dr. Edwin C. Alconcel, a visionary leader 
                    who sets the collective endeavors and guides the college towards 
                    our shared goals. From this central point, lines of communication
                    and collaboration extend outward, connecting departments, units, and
                    personnel in a dynamic web of interaction and synergy. Together, we strive
                    to push the boundaries of knowledge, break down barriers, and create a future
                    where health and wellness are accessible to all.
                </p>
            </div>
        </div>
        <div className="chart-container">
            {orgchart.map((chart) => (
                <img key={chart.id} alt="org chart" src={chart.image}></img>
            ))}
        </div>
    </section>
  )
}

export default OrgChart
