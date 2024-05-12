const AlumniSearch = () => {
  return (
    <section className="search-section">
        <div className="layout-container">
            <form className="form-group">
                <div className="label-group">
                    <label htmlFor="search"> Search the college </label>
                    <em>Alumni or know someone from the College?</em>
                </div>
                <div className="search-wrapper">
                    <div className="field-group">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="search" id="search" name="search" placeholder="Search by name, Premed Courses... "/>
                    </div>
                    <button type="submit"><i className="fa-solid fa-user-group"></i><p>Search People</p></button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default AlumniSearch
