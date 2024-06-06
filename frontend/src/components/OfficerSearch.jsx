const OfficerSearch = () => {
  return (
    <section className="search-section">
        <div className="layout-container">
            <form className="form-group">
                <div className="label-group">
                    <label htmlFor="search"> Search the college </label>
                    <em>Interested on learning more about the persons behind the scene?</em>
                </div>
                <div className="search-wrapper">
                    <div className="field-group">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="search" id="search" name="search" placeholder="Search by name, position... "/>
                    </div>
                    <button type="submit"><i className="fa-solid fa-user-group"></i><p>Search People</p></button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default OfficerSearch