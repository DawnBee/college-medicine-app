// Asset Imports
import studentImageOne from '../assets/images/student-1.jpg'
import studentImageTwo from '../assets/images/student-4.jpg'
import studentImageThree from '../assets/images/student-3.jpg'

const testaments = [
    {
        image: studentImageOne,
        name: "Taylor F. Swift",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus animi illo facilis similique dolorem maiores quis rem excepturi sapiente?"
    },
    {
        image: studentImageTwo,
        name: "Avril R. Lavigne",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus animi illo facilis similique dolorem maiores quis rem excepturi sapiente?"
    },
    {
        image: studentImageThree,
        name: "Tom H. Hanks",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus animi illo facilis similique dolorem maiores quis rem excepturi sapiente?"
    },
]

const Testimonials = () => {
  return (
    <section className="testimonial-section">
        <div className="layout-container">
            <div className="card-container">
                {testaments.map((testament, index) => (
                <div key={index} className="testimonial-card">
                    <img className="student-img" src={testament.image} alt="student image"/>
                    <div>
                        <p>{testament.content}</p>
                        <p className="student-name">{`- ${testament.name}`}</p>
                    </div>
                </div>  
                ))}          
            </div>
        </div>
    </section>
  )
}

export default Testimonials
