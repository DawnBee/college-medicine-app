// Asset Imports
import coreValueImage from '../assets/images/about/values.jpg'

const Values = () => {
  return (
    <section id="values" className="core-values-section">
        <div className="layout-container">
            <h2>College Core Values</h2>
            <div className="content">
                <img src={coreValueImage} alt="core values image" />
                <ul className="value-list">
                    <li className="value-item">
                        <h3>1st Value Here</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, corrupti!</p>
                    </li>
                    <li className="value-item">
                        <h3>2nd Value Here</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, corrupti!</p>
                    </li>
                    <li className="value-item">
                        <h3>3rd Value Here</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, corrupti!</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Values
