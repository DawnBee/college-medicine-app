// Asset Imports
import evaBgRed from '../assets/images/faculty/eva-bg-red.svg'
import analyzaBgRed from '../assets/images/faculty/analyza-bg-red.svg'
import jocelynBgRed from '../assets/images/faculty/jocelyn-bg-red.svg'
import darwizaBgRed from '../assets/images/faculty/darwiza-bg-red.svg'
import rizaldyBgRed from '../assets/images/faculty/rizaldy-bg-red.svg'
import shilroseBgRed from '../assets/images/faculty/shilrose-bg-red.svg'
import romeoBgRed from '../assets/images/faculty/romeo-bg-red.svg'
import vienBgRed from '../assets/images/faculty/vien-bg-red.svg'
import bottomImage from '../assets/images/bg-university-grounds.jpg'

const Lecturers = () => {
    const lecturers = [
        {
            image: evaBgRed,
            name: "Eva Hormigos",
            content: "Section Head, Family and Community Medicine"
        },
        {
            image: analyzaBgRed,
            name: "Analyza Galia-Gabuay",
            content: "Associate Dean"
        },
        {
            image: jocelynBgRed,
            name: "Jocelyn Frial",
            content: "Chairperson, Clinical Sciences"
        },
        {
            image: darwizaBgRed,
            name: "Darwiza Guiomala",
            content: "Section Head, OB-Gyne"
        },
        {
            image: rizaldyBgRed,
            name: "Rizaldy Nolasco",
            content: "Section Head, Surgery"
        },
        {
            image: shilroseBgRed,
            name: "Shilrose Dy",
            content: "Chairperson, Basic Sciences"
        },
        {
            image: romeoBgRed,
            name: "Romeo Teves",
            content: "Section Head, Pathology"
        },
        {
            image: vienBgRed,
            name: "Vivien Mina",
            content: "Head, Medical Education Unit"
        },                                                                       
    ]

    const itemsPerList = 4

    // Calculate the number of "lecturer-lists" needed
    const numLists = Math.ceil(lecturers.length / itemsPerList)

    // Create an array to hold the chunks of lecturers
    const lecturerLists = Array.from({ length: numLists }, (_, index) => {
        const start = index * itemsPerList
        const end = start + itemsPerList
        return lecturers.slice(start, end)
    })

    return (
        <section className="lecturers-section">
            <div className="layout-container">
                <div className="header">
                    <h2>Our Faculties</h2>
                </div>
                {lecturerLists.map((lecturerList, listIndex) => (
                    <ul key={listIndex} className="lecturer-list">
                        {lecturerList.map((lecturer, index) => (
                            <li key={index} className="lecturer-item">
                                <div className="image-box">
                                    <img src={lecturer.image} alt="" className="lecturer-img" loading="lazy" />
                                </div>
                                <div className="content">
                                    <p className="title">Dr. {lecturer.name}</p>
                                    <p>{lecturer.content}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <img className="bottom-img" aria-hidden="true" src={bottomImage} alt="bottom image" />
        </section>
    )
}

export default Lecturers

