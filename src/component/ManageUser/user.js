import { useEffect, useState } from "react";
import { dataUserService, deleteUser } from "../../services/userService";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import ModeAlert from "./modelAlert";
import ModelCreate from "./modelCreate";
import ModelEdit from "./modelEdit";
// import Test from "./test";

const User = (props) => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(7);
  const [totalRows, setTotalRows] = useState(0);
  const [selectUser, setSelectUser] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [isShowModelAlert, setIsShowModelAlert] = useState(false);
  const [isShowModelCreate, setIsShowModelCreate] = useState(false);
  const [isShowModelEdit, setIsShowModeEdit] = useState(false);
  const [useAlert, setUseAlert] = useState(`DELETE`);
  const count = () => {
    return (page - 1) * limit;
  };

  useEffect(() => {
    fetchData();
  }, [page, setUser]);
  const fetchData = async () => {
    let data = await dataUserService(page, limit);
    setUser(data.DT.user);
    setTotalPage(data.DT.totalPage);
  };
  const handlePageClick = (event) => {
    fetchData();
    setPage(event.selected + 1);
  };
  const handlerShowModelDelete = (user) => {
    setSelectUser(user);
    setIsShowModelAlert(true);
  };
  const handerCloseModelDelete = () => {
    setIsShowModelAlert(false);
  };
  const handerCloseModelCreate = () => {
    setIsShowModelCreate(false);
  };
  const handlerCloseModelEdit = () => {
    setIsShowModeEdit(false);
  };
  const handlerConfimDelete = async () => {
    setIsShowModelAlert(false);
    let response = await deleteUser(selectUser);
    if (response && response.EC === 0) {
      toast.success(response.EM);
      await fetchData();
    } else toast.error(response.EM);
  };
  const handlerShowModelCreate = () => {
    setIsShowModelCreate(true);
  };
  const handlerShowModelEdit = (user) => {
    setSelectUser(user);
    setIsShowModeEdit(true);
  };

  const handlerRefreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <ModelEdit
        show={isShowModelEdit}
        close={handlerCloseModelEdit}
        user={selectUser}
      />
      <ModelCreate show={isShowModelCreate} close={handerCloseModelCreate} />
      <ModeAlert
        use={useAlert}
        show={isShowModelAlert}
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
                  <th scope="row">{count() + index + 1}</th>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td className="action d-flex gap-2">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        handlerShowModelEdit(item);
                      }}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handlerShowModelDelete(item);
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
