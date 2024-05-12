const UpcomingEvents = () => {
    const upcomingEvents = [
        {
            title: "Workshop",
            date: ["March", "13"],
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            time: "8AM"
        },
        {
            title: "Grand Reunion",
            date: ["May", "15"],
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            time: "8AM"
        },
        {
            title: "Fund Run",
            date: ["April", "24"],
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            time: "8AM"
        },        
    ]

  return (
    <article className="upcoming-events">
        <h2>Upcoming Events</h2>
        <ul className="event-list">
            {upcomingEvents.map((event, index) => (
                <li key={index} className="event-item">
                    <div className="date-box">
                        <p className="date">{event.date[0]}<span>{event.date[1]}</span></p>
                    </div>
                    <div className="text-group">
                        <h3 className="name">{event.title}</h3>
                        <p>{event.content}</p>
                        <p className="time">{event.time}</p>
                    </div>
                </li>
            ))}
        </ul>
        <button className="expand-btn">See More<i className="fa-solid fa-chevron-down"></i></button>
    </article>
  )
}

export default UpcomingEvents
