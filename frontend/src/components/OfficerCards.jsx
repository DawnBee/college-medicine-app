import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Asset Imports
import studentImageOne from '../assets/images/student-1.jpg'
import studentImageFour from '../assets/images/student-4.jpg'
import studentImageThree from '../assets/images/student-3.jpg'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 920 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 919, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  
const OfficerCards = () => {
    const officers = [
        {
            name: "Avril Lavigne",
            image: studentImageOne,
            position: "President",
        },
        {
            name: "Taylor Swift",
            image: studentImageFour,
            position: "Vice President",
        },
        {
            name: "Leonardo DeCarpio",
            image: studentImageThree,
            position: "Secretary",
        }                
    ]

    const CustomLeftArrow = ({ onClick }) => (
        <i id="prev" className="slider-btn fa-solid fa-chevron-left" onClick={onClick}></i>
    )
    
    const CustomRightArrow = ({ onClick }) => (
        <i id="next" className="slider-btn fa-solid fa-chevron-right" onClick={onClick}></i>
    )
    
  return (
    <section className="officer-info-section">
        <Carousel 
            responsive={responsive}
            containerClass="card-container"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
        >
            {officers.map((officer, index) => (
                <div key={index} className="officer-card">
                    <div className="container">
                        <div className="header">
                            <h2>SOMMED - {officer.position}</h2>
                        </div>
                        <div className="image-frame">
                            <img src={officer.image} alt="officer image" />
                        </div>
                        <div className="info-group">
                            <ul className="info-list">
                                <li className="info-item">
                                    <strong>Name:</strong>
                                    <p>{officer.name}</p>
                                </li>
                                <li className="info-item">
                                    <strong>Position:</strong>
                                    <p>{officer.position}</p>
                                </li>                                
                            </ul>
                        </div>                            
                    </div>
                </div>       
            ))}
        </Carousel>
    </section>
  )
}

export default OfficerCards
