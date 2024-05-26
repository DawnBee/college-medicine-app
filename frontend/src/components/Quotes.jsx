import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Asset Imports
import analyzaImage from '../assets/images/faculty/analyza.svg'
import romeoImage from '../assets/images/faculty/romeo.svg'
import jocelynImage from '../assets/images/faculty/jocelyn.svg'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 920 },
      items: 1,
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

const Quotes = () => {
    const quotes = [
        {
            image: analyzaImage,
            name: "Analyza Galia-Gabuay",
            position: "Associate Dean"
        },
        {
            image: romeoImage,
            name: "Romeo C. Teves",
            position: "Section Head, Pathology"
        },
        {
            image: jocelynImage,
            name: "Jocelyn S. Frial",
            position: "Chairperson, Clinical Sciences"
        },                
    ]

    const CustomLeftArrow = ({ onClick }) => (
        <i ide="prev" className="slider-btn fa-solid fa-arrow-left" onClick={onClick}></i>        
    )

    const CustomRightArrow = ({ onClick }) => (
         <i className="slider-btn fa-solid fa-arrow-right" onClick={onClick}></i> 
    )

  return (
    <section id="highlights" className="quotes-section">
        <div className="layout-container">
            <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}            
                responsive={responsive}
                containerClass="quotes-container"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
            >
                {quotes.map(( quote, index )=> (
                    <div key={index} className="quotes-card">
                        <div className="text-group">
                            <div className="title">
                                <p>Dr. {quote.name}</p>
                                <em>{quote.position}</em>
                            </div>
                        </div>
                        <div className="image-frame">
                            <img src={quote.image} alt="doctor's image" />
                        </div>
                    </div>
                ))}
            </ Carousel>
        </div>
    </section>
  )
}

export default Quotes
