import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

// Asset Imports
import bottomImage from '../assets/images/infirm-building.jpg'

const NoFacultyFound = styled.div`
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
        axios.get(`${API_BASE_URL}/faculty/faculties`)
        .then(res => {
            setLecturers(res.data)
        })
        .catch(err => {
            console.error('Error fetching lecturers:', err)
        })           
    }, [])

    const itemsPerList = 4

    // Calculate the number of "lecturer-lists" needed
    const numLists = Math.ceil(lecturers.length / itemsPerList)

    // Create an array to hold the chunks of lecturers
    const lecturerLists = Array.from({ length: numLists }, (_, index) => {
        const start = index * itemsPerList
        const end = start + itemsPerList
        return lecturers.slice(start, end)
    })

    return (
        <section id="faculties" className="lecturers-section">
            <div className="layout-container">
                <div className="header">
                    <h2>Our Faculties</h2>
                </div>
                {lecturers.length > 0 ? (
                    lecturerLists.map((lecturerList, listIndex) => (
                        <ul key={listIndex} className="lecturer-list">
                            {lecturerList.map((lecturer, index) => (
                                <li key={index} className="lecturer-item">
                                    <div className="image-box">
                                        <img src={lecturer.image} alt="" className="lecturer-img" loading="lazy" />
                                    </div>
                                    <div className="content">
                                        <p className="title">Dr. {lecturer.name}</p>
                                        <p>{lecturer.position}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ))
                ):(
                    <NoFacultyFound>
                        <p>'Faculty List' Empty!</p>
                    </NoFacultyFound>
                )}
            </div>
            <img className="bottom-img" aria-hidden="true" src={bottomImage} alt="bottom image" />
        </section>
    )
}

export default Lecturers

