// Asset Imports
import benefactorImageOne from '../assets/images/faculty/eva-bg-red.svg'
import benefactorImageTwo from '../assets/images/faculty/romeo-bg-red.svg'

const Benefactors = () => {
    const benefactors = [
        {
            image: benefactorImageOne,
            name: "Senator Pia Cayetano",
            profession: "Chairwoman of the Blue Ribbon Comittee",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In alias iste quo odio itaque ipsam? Dignissimos, praesentium provident."
        },
        {
            image: benefactorImageTwo,
            name: "Ched De Vera",
            profession: "CHED (Comission On Higher Education) President",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In alias iste quo odio itaque ipsam? Dignissimos, praesentium provident."
        },        
    ]

  return (
    <section className="acknowledge-section">
        <div className="layout-container">
            <div className="header">
                <h2>The college expresses gratitude to the following:</h2>
            </div>
            <ul className="benefactor-list">
                {benefactors.map((benefactor, index)=> (
                    <li key={index} className="benefactor-item">
                        <img src={benefactor.image} alt="benefactor image" />
                        <div className="content">
                            <h3>{benefactor.name}</h3>
                            <em className="titles">{benefactor.profession}</em>
                            <p>{benefactor.content}</p>                                
                        </div>
                    </li>
                ))}                     
            </ul>                        
        </div>
    </section>
  )
}

export default Benefactors
