import ShowMoreText from "react-show-more-text"
import { useState, useEffect } from "react"
import { API_BASE_URL } from "../api"
import axios from "axios"

const Message = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/faculty/message`)
            .then(res => {
                setMessages(res.data)
            })
            .catch(err => {
                console.error('Error fetching message:', err)
            })            
    }, [])
  return (
    <section id="message" className="college-message-section">
        <div className="layout-container">
            {messages.map((message) => (
                <div key={message.id}>
                    <h2>Message from the {message.representative}</h2>
                    <div className="content">
                        <img className="message-img" src={message.image} alt="message image" />
                        <ShowMoreText
                            lines={5}
                            more="show more"
                            less="show less"
                            className="text"
                            anchorClass="show-more"
                            expanded={false}
                        >
                            {message.content}
                        </ShowMoreText>    
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Message
