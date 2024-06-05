import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

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

const Faculties = () => {
    const [faculties, setFaculties] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/faculty/faculties`)
        .then(res => {
            setFaculties(res.data)
        })
        .catch(err => {
            console.error('Error fetching faculties:', err)
        })           
    }, [])

    const itemsPerList = 4

    // Calculate the number of "faculty-lists" needed
    const numLists = Math.ceil(faculties.length / itemsPerList)

    // Create an array to hold the chunks of faculties
    const facultyLists = Array.from({ length: numLists }, (_, index) => {
        const start = index * itemsPerList
        const end = start + itemsPerList
        return faculties.slice(start, end)
    })

    return (
        <section id="faculties" className="faculties-section">
            <div className="layout-container">
                <div className="header">
                    <h2>Our Faculties</h2>
                </div>
                {faculties.length > 0 ? (
                    facultyLists.map((facultyList, listIndex) => (
                        <ul key={listIndex} className="faculty-list">
                            {facultyList.map((faculty, index) => (
                                <li key={index} className="faculty-item">
                                    <div className="image-box">
                                        <img src={faculty.image} alt="" className="faculty-img" loading="lazy" />
                                    </div>
                                    <div className="content">
                                        <p className="title">Dr. {faculty.name}</p>
                                        <p>{faculty.position}</p>
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
        </section>
    )
}

export default Faculties

