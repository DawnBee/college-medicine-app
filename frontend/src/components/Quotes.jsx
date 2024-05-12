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
  
const Quotes = () => {
    const quotes = [
        {
            image: analyzaImage,
            name: "Analyza Galia-Gabuay",
            position: "Associate Dean",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores rem commodi ab sed animi."
        },
        {
            image: romeoImage,
            name: "Romeo Teves",
            position: "Faculty Head",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores rem commodi ab sed animi."
        },
        {
            image: jocelynImage,
            name: "Jocelyn Frial",
            position: "Faculty Member",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores rem commodi ab sed animi."
        },                
    ]

    const CustomLeftArrow = ({ onClick }) => (
        <i ide="prev" className="slider-btn fa-solid fa-arrow-left" onClick={onClick}></i>        
    )

    const CustomRightArrow = ({ onClick }) => (
         <i className="slider-btn fa-solid fa-arrow-right" onClick={onClick}></i> 
    )

  return (
    <section className="quotes-section">
        <div className="layout-container">
            <Carousel
                responsive={responsive}
                containerClass="quotes-container"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}                
            >
                {quotes.map(( quote, index )=> (
                    <div key={index} className="quotes-card">
                        <div className="text-group">
                            <p>{quote.content}</p>
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
