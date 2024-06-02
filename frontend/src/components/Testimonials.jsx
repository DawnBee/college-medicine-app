import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_BASE_URL } from "../api"
import axios from "axios"

const NoTestamentFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 20em;
  place-items: center;
  & > p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const Testimonials = () => {
    const [testaments, setTestaments] = useState([])

    useEffect(() => {
        const fetchTestaments = async () => {
          try {
            const res = await axios.get(`${API_BASE_URL}/home/testimonials`, {
              params: { limit: 3}
            })
            setTestaments(res.data)
          } catch (err) {
            console.error('Error fetching testimonials:', err)
          }
        }
        fetchTestaments()
      },[])

  return (
    <section className="testimonial-section">
        <div className="layout-container">
            {testaments.length > 0 ? (
                <div className="card-container">
                    {testaments.map((testament, index) => (
                    <div key={index} className="testimonial-card">
                        <img className="student-img" src={testament.image} alt="student image"/>
                        <div>
                            <p>{testament.content}</p>
                            <p className="student-name">{`- ${testament.name}`}</p>
                        </div>
                    </div>  
                    ))}          
                </div>
            ):(
                <NoTestamentFound>
                    <p>No 'Testimonial' Found!</p>
                </NoTestamentFound>
            )}
        </div>
    </section>
  )
}

export default Testimonials
