import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { API_BASE_URL } from "../api"
import axios from "axios"


const CustomIcon = styled.i.attrs({
    className: 'fa-solid fa-user-doctor'
  })`
    color: #fff;
    padding: 1rem;
    display: grid;
    max-width: 100px;
    place-items: center;
    background: #272727;
    border-radius: 100px;
  `;

const OfficerList = () => {
    const [officers, setOfficers] = useState([])

    useEffect(() => {
        const fetchOfficers = async () => {
          try {
            const res = await axios.get(`${API_BASE_URL}/others/officers`, {
              params: { limit: 10}
            })
            setOfficers(res.data)
          } catch (err) {
            console.error('Error fetching list of officers:', err)
          }
        }
        fetchOfficers()
      },[])      
  return (
    <aside className="list-sidebar">
        <h3 className="sidebar-title">List of Officers</h3>
        <ul className="detail-list">
            {officers.map((officer) => (
                <li key={officer.id} className="list-item">
                    <CustomIcon />
                    <div className="content">                  
                        <Link to={`/officers/${officer.id}`} className="item-title">
                            <h4>{officer.position}</h4>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default OfficerList
