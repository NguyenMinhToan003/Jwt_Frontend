import Category from "../home/Category";
import BuyEb from "../EBook/BuyEb";
import "./buyEbook.scss";
import Header from "../Header/Header";
import NavShop from "../Navigation/NavShop";
import { ebookRead } from "../../services/bookService";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const BuyEbook = (props) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [ebook, setEbook] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const fetchEBook = async () => {
    let data = await ebookRead(page, limit);
    setEbook(data.DT.book);
    setTotalPage(+data.DT.totalPage);
  };
  useEffect(() => {
    fetchEBook();
  }, []);
  useEffect(() => {
    fetchEBook();
  }, [page, setPage]);
  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  return (
    <>
      <NavShop />
      <div className=" mt-10 ebook home">
        <Category />
        <div className="container">
          <div className="ebook-list">
            {ebook && ebook.length > 0
              ? ebook.map((item, index) => {
                  return (
                    <BuyEb
                      key={item.id}
                      id={item.id}
                      img={item.urlImage}
                      name={item.name}
                      description={item.description}
                      author={item.author}
                      vote={+item.vote}
                    />
                  );
                })
              : ""}
          </div>
          <div className="paginate">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={totalPage}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
      <Header />
    </>
  );
};
export default BuyEbook;
