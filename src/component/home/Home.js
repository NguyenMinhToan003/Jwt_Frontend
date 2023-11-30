import Category from "./Category";
import Ebook1 from "../EBook/Ebook1";
import Ebook2 from "../EBook/Ebook2";
import "./home.scss";
import Header from "../Header/Header";
const Home = (props) => {
  return (
    <>
      <div className=" mt-5 home">
        <Category />
        <div className="home-content">
          <div className="home-content-recomend">
            <span className="title">Recommended</span>
            <div className="list-book1">
              <Ebook1 />
              <Ebook1 />
              <Ebook1 />
              <Ebook1 />
            </div>
            <span className="title">Populer</span>
            <div className="list-book2">
              <Ebook2 />
              <Ebook2 />
              <Ebook2 />
              <Ebook2 />
            </div>
          </div>
          <div className="home-content-newstory">
            <span className="title">This new story</span>

            <div className="list-book1">
              <Ebook1 />
              <Ebook1 />
              <Ebook1 />
              <Ebook1 />
            </div>
            <span className="title">Which they like</span>
            <div className="list-book2">
              <Ebook2 />
              <Ebook2 />
              <Ebook2 />
              <Ebook2 />
            </div>
          </div>
        </div>
      </div>
      <Header />
    </>
  );
};
export default Home;
