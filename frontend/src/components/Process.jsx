// Asset Imports
import processImage from '../assets/images/event-1.jpg'

const processes = [
    {
        title: "Application",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa."
    },
    {
        title: "Entrance Exam",
        content: "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus."
    },
    {
        title: "Req. Submission",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci."
    },
    {
        title: "Panel Interview",
        content: "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
    },
    {
        title: "Selected Applicants",
        content: "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
    },
    {
        title: "Enrollment",
        content: "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
    },                
]

const Process = () => {
  return (
    <>
        <h2 className="section-header">Admission Process</h2>
        <div className="content-container">               
            <div className="grid-content">
                {processes.map((process, index) => (
                    <div key={index} className="process-item">
                        <h3 className="item-header">{process.title}</h3>
                        <p>{process.content}</p>
                    </div>
                ))}
            </div>
            <img className="process-image" src={processImage} alt="admission process image" />
        </div>
    </>
  )
}

export default Process
