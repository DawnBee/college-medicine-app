import { useState } from 'react'

// Asset Imports
import simApollo from '../assets/images/simulation/apollo.png'
import simAres from '../assets/images/simulation/ares.png'
import simAria from '../assets/images/simulation/aria.png'
import simLuna from '../assets/images/simulation/luna.png'

const mannequins = [
    {
        name: "Apollo",
        image: simApollo,
        url: "https://www.caehealthcare.com/solutions/brands/cae-apollo/",
        description: "High-fidelity adult patient simulator"
    },
    {
        name: "Ares",
        image: simAres,
        url: "https://www.caehealthcare.com/solutions/brands/cae-ares/",
        description: "Mid-fidelity patient simulator"
    },
    {
        name: "Aria",
        image: simAria,
        url: "https://www.caehealthcare.com/solutions/brands/cae-aria/",
        description: "High-fidelity pediatric manikin"
    },
    {
        name: "Luna",
        image: simLuna,
        url: "https://www.caehealthcare.com/solutions/brands/cae-luna/",
        description: "Infant Patient Simulator"
    },            
]

const MannequinCards = () => {
    const [hoveredIndexes, setHoveredIndexes] = useState([])

    const handleMouseEnter = (index) => {
        setHoveredIndexes([...hoveredIndexes, index])
    }

    const handleMouseLeave = (index) => {
        setHoveredIndexes(hoveredIndexes.filter((i) => i !== index))
    }

    return (
        <section id="mannequins" className="sim-mannequins-section">
            <div className="layout-container">
                <h2>High-Fidelity Simulation Mannequins</h2>
                <ul className="mannequin-list">
                    {mannequins.map((mannequin, index) => (
                        <li key={index} className="mannequin-item">
                            <div className="image-frame">
                                <strong>{index + 1}</strong>
                                <img src={mannequin.image} alt={mannequin.name} className="mannequin-img" />
                                <div
                                    className={`info-box ${hoveredIndexes.includes(index) ? 'show' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <h3>{mannequin.name}</h3>
                                    <p>{mannequin.description}</p>
                                    <button><a href={mannequin.url} target="_blank" rel="noopener noreferrer">Learn More</a></button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <p>
                    High-Fidelity mannequins are advanced, lifelike training tools 
                    used in medical simulations. They can mimic human physiology 
                    and respond to treatments, providing realistic scenarios for 
                    healthcare professionals to practice clinical skills and emergency responses.
                </p>
            </div>
        </section>
  )
}

export default MannequinCards
