export default function SearchBar() {
  return (
    <div className="search-bar">
      <h3> Employee Search</h3>
      <form>
        <input type="text" name="search-employee" placeholder="John Smith" />
        <input type="submit" value="search" />
        <hr />
      </form>
    </div>
  );
}
