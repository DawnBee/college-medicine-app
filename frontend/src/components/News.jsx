import ShowMoreText from "react-show-more-text"
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

const News = () => {
  const [news, setNews] = useState([])
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/others/news`, {
          params: { limit: 1}
        })
        setNews(res.data)
      } catch (err) {
        console.error('Error fetching news:', err)
      }
    }
    fetchNews()
  }, [])

  const handleClick = () => {
    setExpanded(!expanded);
  }

  // Custom Show More/Less Arrows
  const moreButton = (
    <button onClick={handleClick} className={`expand-btn ${expanded ? 'expanded' : ''}`}>
      See More <i className="fa fa-chevron-down" />
    </button>
  )

  const lessButton = (
    <button onClick={handleClick} className={`expand-btn ${expanded ? 'expanded' : ''}`}>
      See Less <i className="fa fa-chevron-up" />
    </button>
  )

  return (
    <article className="news-group">
      {news.map((_news) => (
        <div key={_news.id} className="container">
          <img src={_news.image} alt="news image" />
          <div className="text-group">
              <h3>{_news.title}</h3>
              <ShowMoreText
                  lines={3}
                  more={moreButton}
                  less={lessButton}
                  className="text"
                  anchorClass="show-more"
              >              
                {_news.description}
              </ShowMoreText>
          </div>
        </div>
      ))}
    </article>
  )
}

export default News