// Asset Imports
import studentImgOne from '../assets/images/student-1.jpg'

const Spotlight = () => {
    const spotlights = [
        {
            image: studentImgOne,
            title: "Night Gala Queen",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit nisi totam?"
        }
    ]
  return (
    <section className="spotlight-section">
        <div className="spotlight-card">
            <h2>Alumni Spotlight</h2>
            {spotlights.map((spotlight, index) => (
                <div key={index} className="content">
                    <img className="spotlight-img" src={spotlight.image} alt="spotlight image" />
                    <div className="text-group">
                        <h3>{spotlight.title}</h3>
                        <p>{spotlight.content}</p>
                    </div>
                </div>
            ))}
        </div>                
    </section>
  )
}

export default Spotlight
