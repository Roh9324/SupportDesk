function SearchBox({ keyword, setKeyword }) {

    return (

        <input
            className="search-box"
            type="text"
            placeholder="Search by customer or subject..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
        />

    );
}

export default SearchBox;