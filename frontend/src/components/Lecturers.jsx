import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

const NoLecturerFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 20em;
  place-items: center;
  & > p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const Lecturers = () => {
    const [lecturers, setLecturers] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/faculty/lecturers`)
        .then(res => {
            setLecturers(res.data)
        })
        .catch(err => {
            console.error('Error fetching lecturers:', err)
        })
    }, [])

    const half = Math.ceil(lecturers.length / 2)
    const lecturerLists = [
      lecturers.slice(0, half),
      lecturers.slice(half, lecturers.length),
    ]

  return (
    <section id="lecturers" className="lecturers-section">
        <div className="layout-container">
            <h2>Our Lecturers</h2>
            {lecturers.length > 0 ? (
                <div className="content">
                {lecturerLists.map((lecturerList, listIndex) => (
                    <ul key={listIndex} className="lecturer-list">
                    {lecturerList.map((lecturer) => (
                        <li key={lecturer.id} className="lecturer-item">
                        <i className="fa-solid fa-user-doctor"></i>
                        {lecturer.name}
                        </li>
                    ))}
                    </ul>
                ))}
                </div>
            ) : (
                <NoLecturerFound>
                    <p>'Lecturers' List Empty!</p>
                </NoLecturerFound>
            )}
        </div>
    </section>
  )
}

export default Lecturers
