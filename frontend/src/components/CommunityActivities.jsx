const CommunityActivities = () => {
    const activities = [
        {
            title: "Workshop",
            date: ["March", "13"],
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            time: "8AM"
        },
        {
            title: "Grand Reunion",
            date: ["May", "15"],
            content: "Dolor, sit amet consectetur.",
            time: "8AM"
        },
        {
            title: "Fund Run",
            date: ["April", "24"],
            content: "Ipsum dolor, consectetur adipisicing elit.",
            time: "8AM"
        },        
    ]

  return (
    <article className="community-activities">
        <h2>Community Activities</h2>
        <ul className="activity-list">
            {activities.map((activity, index) => (
                <li key={index} className="activity-item">
                    <div className="date-box">
                        <p className="date">{activity.date[0]}<span>{activity.date[1]}</span></p>
                    </div>
                    <div className="text-group">
                        <h3 className="name">{activity.title}</h3>
                        <p>{activity.content}</p>
                        <p className="time">{activity.time}</p>
                    </div>
                </li>
            ))}
        </ul>
        <button className="expand-btn">See More<i className="fa-solid fa-chevron-down"></i></button>
    </article>
  )
}

export default CommunityActivities
