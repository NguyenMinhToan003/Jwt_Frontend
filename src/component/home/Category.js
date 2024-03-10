import "./category.scss";
const Category = (props) => {
  return (
    <>
      <div className="home-category d-flex flex-column">
        <ul className="home-category-book">
          <span className="title">Book by Genre</span>
          <li>
            <span>All Genres</span>
          </li>
          <li>
            <span>Business</span>
          </li>
          <li>
            <span>Science</span>
          </li>
          <li>
            <span>Fiction</span>
          </li>
          <li>
            <span>Philosophy</span>
          </li>
          <li>
            <span>Biography</span>
          </li>
        </ul>
        <ul className="home-category-recomend">
          <span className="title">Recomendations</span>
          <li>Artist of the Month</li>
          <li>Book of the Year</li>
          <li>Top Genre</li>
          <li>Trending</li>
        </ul>
      </div>
    </>
  );
};
export default Category;
