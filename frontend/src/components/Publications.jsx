// Asset Imports
import wideBentoImage from '../assets/images/dna-under-microscope.jpg'
import tallBentoImage from '../assets/images/brain-blueprint.jpg'
import smallBentoImageOne from '../assets/images/cells.jpg'
import smallBentoImageTwo from '../assets/images/lung-x-ray.jpg'

const publications = [
    {
        title: "Dna Mutation - A Genetic Anomaly Study",
        image: wideBentoImage,
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa."
    },
    {
        title: "How our brains functions",
        image: tallBentoImage,
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa."
    },
    {
        title: "How bacteria adapts to environment",
        image: smallBentoImageOne,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente illo nihil quam sint soluta esse, quaerat eius vero corporis eum, magnam perferendis ipsum? Ex voluptatibus itaque est explicabo? At dolore libero culpa laudantium eius?"
    },
    {
        title: "A glimpse to the lungs",
        image: smallBentoImageTwo,
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa."
    },                        
]

const Publications = () => {

    return (
        <section className="publication-section">
            <div className="layout-container">
                <h2 className="publication-header">Research & Publications</h2>
                <div className="bento-container">
                    {publications.map((publication, index) => {
                        let truncatedTitle = publication.title.length > 20 ? `${publication.title.substring(0, 20)}...` : publication.title
                        let truncatedDescription = publication.description.length > 90 ? `${publication.description.substring(0, 90)}...` : publication.description

                        return (
                            <div key={index} className="bento-box">
                                <div className="image-box">
                                    <img src={publication.image} alt={`research image ${index + 1}`}/>
                                </div>
                                <div className="content">
                                    <h3 className="bento-title">{truncatedTitle}</h3>
                                    <p>{truncatedDescription}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Publications
