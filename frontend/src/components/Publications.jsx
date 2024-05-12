import { useState, useEffect } from 'react'
import { API_BASE_URL } from "../api"
import axios from "axios"

const Publications = () => {
    const [publications, setPublications] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/home/publications`)
        .then(res => {
            setPublications(res.data)
        }) 
    }, [])

    return (
        <section className="publication-section">
            <div className="layout-container">
                <h2 className="publication-header">Research & Publications</h2>
                <div className="bento-container">
                    {publications.map((publication, index) => {
                        let truncatedTitle = publication.title.length > 20 ? `${publication.title.substring(0, 20)}...` : publication.title
                        let truncatedDescription = publication.description.length > 90 ? `${publication.description.substring(0, 90)}...` : publication.description

                        return (
                            <div key={publication.id} className="bento-box">
                                <div className="image-box">
                                    <img src={publication.image} alt={`research image ${index + 1}`}/>
                                </div>
                                <div className="content">
                                    <h3 className="bento-title">{truncatedTitle}</h3>
                                    <p>{truncatedDescription}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Publications
