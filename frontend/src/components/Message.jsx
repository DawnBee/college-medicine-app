import ShowMoreText from "react-show-more-text"
import { useState, useEffect } from "react"
import styled from 'styled-components'
import { API_BASE_URL } from "../api"
import axios from "axios"

const NoMessageFound = styled.div`
    width: 100%;
    display: grid;
    min-height: 25em;
    place-items: center;
    & div {
        gap: 1em;
        display: flex;
        align-items: center;
    & > i {
        color: #9E2828;
        font-size: 2.5rem;
    }
    & > p {
        font-size: 2rem;
        font-family: "Montserrat", sans-serif;
    }}
`;

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
            {messages.length > 0 ? (
                messages.map((message) => (
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
                ))
            ) : (
                <NoMessageFound>
                    <div className="container">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        <p>No 'Message' to Show!</p>
                    </div>
                </NoMessageFound>
            )}
        </div>
    </section>
  )
}

export default Message
