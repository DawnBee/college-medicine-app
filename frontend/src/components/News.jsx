// Asset Imports
import studentImgFour from '../assets/images/student-4.jpg'

const News = () => {
  return (
    <article className="news-group">
        <img src={studentImgFour} alt="news image" />
        <div className="text-group">
            <h3>Top Board Achiever</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquam quas incidunt deserunt! Doloribus vitae cumque excepturi totam esse ab voluptatibus!
            </p>
        </div>
        <button className="expand-btn">See More<i className="fa-solid fa-chevron-down"></i></button>
    </article>
  )
}

export default News
