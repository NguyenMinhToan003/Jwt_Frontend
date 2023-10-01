import { useEffect, useState } from "react";
import { dataUserService } from "../../services/userService";
import ReactPaginate from "react-paginate";
const User = (props) => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(4);
  // const [totalRows, setTotalRows] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    fetchData();
  }, [page]);
  const fetchData = async () => {
    let data = await dataUserService(page, limit);
    console.log(data);
    setUser(data.data.DT.user);
    setTotalPage(data.data.DT.totalPage);
  };
  const handlePageClick = (event) => {
    setPage(event.selected + 1);
    // console.log(">>>check ", event.selected);
  };
  useEffect(() => {}, [ReactPaginate]);
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-3 mb-4 fw-bold">Account Table</h3>
        <div className="d-flex gap-2 justify-content-end">
          <button className="btn btn-success">Refresh</button>
          <button className="btn btn-primary">Create Account</button>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user && user.length > 0 ? (
              user.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td className="action d-flex gap-2">
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <span>not found</span>
            )}
          </tbody>
        </table>
        <div className="footer-table d-flex  justify-content-center mt-5">
          {page <= totalPage ? (
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
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default User;
