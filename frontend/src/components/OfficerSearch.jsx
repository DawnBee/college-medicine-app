import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { API_BASE_URL } from "../api"
import axios from "axios"

// Custom function that adds delay to each search request
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
  
      return () => {
        clearTimeout(handler)
      }
    }, [value, delay])
  
    return debouncedValue
  }

const OfficerSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const debouncedSearchTerm = useDebounce(searchTerm, 500)
    const navigateToDetail = useNavigate()
  
    useEffect(() => {
      const fetchResults = async () => {
        if (debouncedSearchTerm) {
          try {
            const { data } = await axios.get(`${API_BASE_URL}/others/officers/?search=${debouncedSearchTerm}`)
            setResults(data)
          } catch (err) {
            console.error('Error fetching search results:', err)
          }
        } else {
          setResults([])
        }
      }
  
      fetchResults()
    }, [debouncedSearchTerm])

    // Add feedbacks to user when button is clicked
    const handleButtonClick = () => {
        if (searchTerm.trim() === "" || results.length === 0) {
            alert("Please enter a search term!")
        } else {
            const validResult = results.find(result => result.name.toLowerCase() === searchTerm.toLowerCase());
            if (validResult) {
                navigateToDetail(`/officers/${validResult.id}`)
            } else {
                alert("Not a valid search term!")
            }
        }
    }

  return (
    <section className="search-section">
        <div className="layout-container">
            <form className="form-group" onSubmit={(e) => e.preventDefault()}>
                <div className="label-group">
                    <label htmlFor="search"> Search the college </label>
                    <em>Interested on learning more about the persons behind the scene?</em>
                </div>
                <div className="search-wrapper">
                    <div className="field-group">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input 
                            type="search" 
                            id="search" 
                            name="search" 
                            placeholder="Search by name, position... "
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ul className="result-list">
                            {results
                                .filter((result) => 
                                    result.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                    result.position.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .map((result) => (
                                  <li className="result-item" key={result.id}>
                                    <Link to={`/officers/${result.id}`}>
                                      <img src={result.image} alt="search-result-img"/>
                                      <p>{result.name} - <em>{result.position}</em></p>
                                    </Link>                                        
                                  </li>
                                ))
                            }
                        </ul>
                    </div>
                    <button 
                        type="submit"
                        onClick={handleButtonClick}
                    >
                        <i className="fa-solid fa-user-group" />
                        <p>Search People</p>
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default OfficerSearch