import Category from "./Category";
import Ebook1 from "../EBookComponent/Ebook1";
import Ebook2 from "../EBookComponent/Ebook2";
import "./home.scss";
import Header from "../Header/Header";
import NavHeader from "../Navigation/NavShop";

const Home = (props) => {
  return (
    <>
      <NavShop />
      <div className=" mt-5 home">
        <Category />
        <div className="home-content">
          <div className="home-content-recomend">
            <span className="title">Recommended</span>
            <div className="list-book-n2">
              <Ebook1 />
              <Ebook1 />
              <Ebook1 />
              <Ebook1 />
            </div>
            <span className="title">Populer</span>
            <div className="list-book-n4">
              <Ebook2 />
              <Ebook2 />
              <Ebook2 />
              <Ebook2 />
            </div>
          </div>
          <div className="home-content-newstory">
            <span className="title">This new story</span>

            <div className="list-book-n2">
              <Ebook1 />
              <Ebook1 />
              <Ebook1 />
              <Ebook1 />
            </div>
            <span className="title">Which they like</span>
            <div className="list-book-n4">
              <Ebook2 />
              <Ebook2 />
              <Ebook2 />
              <Ebook2 />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
