// Asset Imports
import orgLogo from '../assets/images/others/sommed-logo.png'

const Spotlight = () => {
    const spotlights = [
        {
            image: orgLogo,
            title: "Society of Medical Students (SOMMEDS)",
            content: "is the premier medical student organization dedicated to fostering academic excellence, professional development, and community service among future healthcare leaders."
        }
    ]
  return (
    <section className="spotlight-section">
        <div className="spotlight-card">
            <h2>Student Society</h2>
            {spotlights.map((spotlight, index) => (
                <div key={index} className="content">
                    <img className="spotlight-img" src={spotlight.image} alt="spotlight image" />
                    <div className="text-group">
                        <h3>{spotlight.title}</h3>
                        <p>{spotlight.content}</p>
                        <a className="page-link" href="#">Visit Page</a>
                    </div>
                </div>
            ))}
        </div>                
    </section>
  )
}

export default Spotlight
