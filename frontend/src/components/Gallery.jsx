import { useState } from 'react'

// Asset Imports
import eventOne from '../assets/images/event-1.jpg'
import eventTwo from '../assets/images/event-2.jfif'
import eventThree from '../assets/images/event-3.jpg'
import eventFour from '../assets/images/event-4.jpeg'
import simOne from '../assets/images/sim-1.jpg'
import simTwo from '../assets/images/sim-2.jpg'
import simThree from '../assets/images/sim-3.jpg'
import simFour from '../assets/images/sim-4.jpg'
import studentOne from '../assets/images/student-1.jpg'
import studentThree from '../assets/images/student-3.jpg'
import collegeGrounds from '../assets/images/bg-university-grounds.jpg'

const Gallery = () => {
    const [showSecondGroup, setShowSecondGroup] = useState(false)

    const images = [
        eventOne, eventTwo, eventThree, eventFour, simOne,
        simTwo, simThree, simFour, collegeGrounds, studentOne, studentThree
    ]

    const firstGroup = images.slice(0, 5)
    const secondGroup = images.slice(5)
    
    const handleViewMoreClick = () => {
        setShowSecondGroup(!showSecondGroup)
    }

    return (
        <section className="memories-section">
            <div className="intro">
                <h2>Alumni Memories</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum consequatur nihil ab tempora possimus, harum quod dolor velit sit tenetur.
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
