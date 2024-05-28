import { useState } from 'react'

// Asset Imports
import simApollo from '../assets/images/apollo-sim.jpg'
import simAres from '../assets/images/ares-sim.jpg'
import simAria from '../assets/images/aria-sim.jpg'
import simLuna from '../assets/images/luna-sim.jpg'

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
                                    <button><a href={mannequin.url}>Learn More</a></button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Deserunt distinctio nemo ex sapiente rem magni pariatur explicabo 
                    corporis cumque aperiam facilis, hic similique velit doloribus?
                </p>
            </div>
        </section>
  )
}

export default MannequinCards
