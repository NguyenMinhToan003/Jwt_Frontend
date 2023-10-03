import { useEffect, useState } from "react";
import { dataUserService, deleteUser } from "../../services/userService";
import ModeDelete from "./modelDelete";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import ModelCreate from "./modelCreate";
const User = (props) => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(4);
  // const [totalRows, setTotalRows] = useState(0);
  const [selectUser, setSelectUser] = useState({});

  const [totalPage, setTotalPage] = useState(0);
  const [isShowModelDelete, setIsShowModelDelete] = useState(false);
  const [isShowModelCreate, setIsShowModelCreate] = useState(false);
  useEffect(() => {
    fetchData();
  }, [page, setUser]);
  const fetchData = async () => {
    let data = await dataUserService(page, limit);
    setUser(data.data.DT.user);
    setTotalPage(data.data.DT.totalPage);
  };
  const handlePageClick = (event) => {
    fetchData();
    setPage(event.selected + 1);
  };
  const handlerDelete = (user) => {
    setSelectUser(user);
    setIsShowModelDelete(true);
  };
  const handerCloseModelDelete = () => {
    setIsShowModelDelete(false);
  };
  const handerCloseModelCreate = () => {
    setIsShowModelCreate(false);
  };
  const handlerConfimDelete = async () => {
    setIsShowModelDelete(false);
    console.log(">>>> check data select user: ", selectUser);
    let response = await deleteUser(selectUser);
    if (response && response.data.EC === 0) {
      toast.success(response.data.EM);
      await fetchData();
    } else toast.error(response.data.EM);
  };
  const handlerShowModelCreate = async () => {
    setIsShowModelCreate(true);
  };
  const handlerRefreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      <ModelCreate show={isShowModelCreate} close={handerCloseModelCreate} />
      <ModeDelete
        show={isShowModelDelete}
        close={handerCloseModelDelete}
        comfimDelete={handlerConfimDelete}
        user={selectUser}
      />
      <div className="container">
        <h3 className="text-center mt-3 mb-4 fw-bold">Account Table</h3>
        <div className="d-flex gap-2 justify-content-end">
          <button
            className="btn btn-success"
            onClick={() => {
              handlerRefreshPage();
            }}>
            Refresh
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              handlerShowModelCreate();
            }}>
            Create Account
          </button>
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
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handlerDelete(item);
                      }}>
                      Delete
                    </button>
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
