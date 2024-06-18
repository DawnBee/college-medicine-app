import { useState } from 'react'

// Asset Imports
import act_1 from '../assets/images/others/act-1.jpg'
import act_2 from '../assets/images/others/act-2.jpg'
import act_3 from '../assets/images/others/act-3.jpg'
import act_4 from '../assets/images/others/act-4.jpg'
import act_5 from '../assets/images/others/act-5.jpg'
import act_6 from '../assets/images/others/act-6.jpg'
import act_7 from '../assets/images/others/act-7.jpg'
import act_8 from '../assets/images/others/act-8.jpg'
import act_9 from '../assets/images/others/act-9.jpg'
import act_10 from '../assets/images/others/act-10.jpg'
import act_11 from '../assets/images/others/act-11.jpg'


const Gallery = () => {
    const [showSecondGroup, setShowSecondGroup] = useState(false)

    const images = [
        act_1, act_2, act_3, act_4, act_5,
        act_6, act_7, act_8, act_9, act_10, act_11
    ]

    const firstGroup = images.slice(0, 5)
    const secondGroup = images.slice(5)
    
    const handleViewMoreClick = () => {
        setShowSecondGroup(!showSecondGroup)
    }

    return (
        <section className="memories-section">
            <div className="intro">
                <h2>Community Gallery</h2>
                <p>
                    Showcasing the impactful outreach efforts and community 
                    service initiatives of our dedicated medical students, 
                    highlighting their commitment to making a difference in local communities
                </p>
            </div>
            <div className="gallery">
                <div className="img-container">
                    {firstGroup.map((image, index) => (
                        <div className="image-box" key={index}>
                            <img src={image} alt="memories image" className="gallery-img" />
                        </div>
                    ))}
                    {showSecondGroup && secondGroup.map((image, index) => (
                        <div className="image-box" key={index + firstGroup.length}>
                            <img src={image} alt="memories image" className="gallery-img" />
                        </div>
                    ))}
                </div>
                <button className="expand-btn" onClick={handleViewMoreClick}>
                    {showSecondGroup ? "View Less" : "View More"} 
                    <i className={`fa-solid fa-chevron-${showSecondGroup ? 'up' : 'down'}`}></i>
                </button>
            </div>
        </section>
    )
}

export default Gallery
