import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { API_BASE_URL } from "../api"
import axios from "axios"

const NoPublicationsFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 20em;
  place-items: center;
  & > p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const Publications = () => {
    const [publications, setPublications] = useState([])

    useEffect(() => {
        const fetchPublications = async () => {
          try {
            const res = await axios.get(`${API_BASE_URL}/home/publications`, {
              params: { limit: 4}
            })
            setPublications(res.data)
          } catch (err) {
            console.error('Error fetching publications:', err)
          }
        }
        fetchPublications()
      },[])

    return (
        <section className="publication-section">
            <div className="layout-container">
                <h2 className="publication-header">Research & Publications</h2>
                {publications.length > 0 ? (
                    <div className="bento-container">
                    {publications.map((publication, index) => {
                        let truncatedTitle = publication.title.length > 20 ? `${publication.title.substring(0, 20)}...` : publication.title
                        let truncatedDescription = publication.description.length > 50 ? `${publication.description.substring(0, 50)}...` : publication.description

                        return (
                            <div key={publication.id} className="bento-box">
                                <div className="image-box">
                                    <Link to={`publications/${publication.id}`} className="bento-link">
                                        <img src={publication.image} alt={`research image ${index + 1}`}/>
                                    </Link>
                                </div>
                                <div className="content">
                                    <h3 className="bento-title">{truncatedTitle}</h3>
                                    <p>{truncatedDescription}</p>
                                </div>  
                            </div>
                        )
                    })}
                </div>
                ) : (
                    <NoPublicationsFound>
                        <p>No 'Publications' Found!</p>
                    </NoPublicationsFound>
                )}
            </div>
        </section>
    )
}

export default Publications
