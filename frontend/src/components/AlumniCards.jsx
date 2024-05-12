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
  
const AlumniCards = () => {
    const alumni = [
        {
            name: "Avril Lavigne",
            image: studentImageOne,
            specialization: "Neurologist",
            year: "2021-2025",
            occupation: "Neurologist",
            employer: "St. Elizabeth Hospital",
            achievements: "Top 3 Board Exam Passer",
        },
        {
            name: "Taylor Swift",
            image: studentImageFour,
            specialization: "Pathologist",
            year: "2021-2025",
            occupation: "Neurologist",
            employer: "Gensan Medical Center",
            achievements: "Top 1 Best Album Seller",
        },
        {
            name: "Leonardo DeCarpio",
            image: studentImageThree,
            specialization: "Surgeon",
            year: "2021-2025",
            occupation: "Neurologist",
            employer: "Davao Medical Center",
            achievements: "3-Time Oscar Awardee",
        }                
    ]

    const CustomLeftArrow = ({ onClick }) => (
        <i id="prev" className="slider-btn fa-solid fa-chevron-left" onClick={onClick}></i>
    )
    
    const CustomRightArrow = ({ onClick }) => (
        <i id="next" className="slider-btn fa-solid fa-chevron-right" onClick={onClick}></i>
    )
    
  return (
    <section className="alumni-info-section">
        <Carousel 
            responsive={responsive}
            containerClass="card-container"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
        >
            {alumni.map((alumnus, index) => (
                <div key={index} className="alumni-card">
                    <div className="container">
                        <div className="header">
                            <h2>Doctor of Medicine</h2>
                            <em>{alumnus.specialization}</em>
                        </div>
                        <div className="image-frame">
                            <img src={alumnus.image} alt="alumni image" />
                        </div>
                        <div className="info-group">
                            <ul className="info-list">
                                <li className="info-item">
                                    <strong>Name:</strong>
                                    <p>Dr. {alumnus.name}</p>
                                </li>
                                <li className="info-item">
                                    <strong>Graduation Year:</strong>
                                    <p>{alumnus.year}</p>
                                </li>
                                <li className="info-item">
                                    <strong>Occupation:</strong>
                                    <p>{alumnus.occupation}</p>
                                </li>
                                <li className="info-item">
                                    <strong>Employer:</strong>
                                    <p>{alumnus.employer}</p>
                                </li>
                                <li className="info-item">
                                    <strong>Achievements:</strong>
                                    <p>{alumnus.achievements}</p>
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

export default AlumniCards
