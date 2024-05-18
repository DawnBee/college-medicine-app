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
    }, [])
  return (
    <section className="college-message-section">
        <div className="layout-container">
            {messages.map((message) => (
                <div key={message.id}>
                    <h2>Message from the {message.representative}</h2>
                    <div className="content">
                        <img className="message-img" src={message.image} alt="message image" />
                        <p>{message.content}</p>
                    </div>                
                </div>
            ))}
        </div>
    </section>
  )
}

export default Message
