import ReactPaginate from "react-paginate";
import { readRole } from "../../services/permissionService";
import { useEffect, useState } from "react";
import ModaEditRole from "./ModalEditRole";
import ModalDeleteRole from "./ModelDeleteRole";
const TableRole = (props) => {
  let [limit, setLimit] = useState(5);
  let [page, setPage] = useState(1);
  let [totalPage, setTotalPage] = useState(0);
  const [currentRole, setCurrentRole] = useState({});
  const fetchRole = async () => {
    let response = await readRole(page, limit);
    if (response && response.EC === 0) {
      let role = response.DT.role;
      let totalPage = response.DT.totalPage;
      setCurrentRole(role);
      setTotalPage(totalPage);
    }
  };
  useEffect(() => {
    fetchRole();
  }, [page, setCurrentRole]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
    fetchRole();
    console.log(event.selected + 1);
  };
  return (
    <>
      <div className="container mt-5">
        <span className="d-flex align-center justify-content-start fw-bold fs-4 mb-3 mt-2 text-warning">
          Table Roles :
        </span>
        <div className="d-flex flex-column">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">url</th>
                <th scope="col">description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(currentRole).map(([item, value], index) => {
                return (
                  <tr key={value.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{value.url}</td>
                    <td>{value.description}</td>
                    <td className="action d-flex gap-2">
                      <ModaEditRole
                        url={value.url}
                        description={value.description}
                        id={value.id}
                      />
                      <ModalDeleteRole id={value.id} url={value.url} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="d-flex align-center justify-content-center">
            <ReactPaginate
              onPageChange={handlePageClick}
              pageCount={totalPage}
              nextLabel="next >"
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
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
    </>
  );
};
export default TableRole;
