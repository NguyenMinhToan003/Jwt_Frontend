import { readRole } from "../../services/roleService";
import { useEffect, useState } from "react";

const TableRole = (props) => {
  const [role, setRole] = useState({});
  const fetchRole = async () => {
    let role = await readRole();
    setRole(role.DT);
  };
  useEffect(() => {
    fetchRole();
  }, [role]);
  return (
    <>
      <div className="container mt-5">
        <span className="d-flex align-center justify-content-start fw-bold fs-4 mb-3 mt-2 text-warning">
          Table Roles :
        </span>
        <div className="d-flex flex-column">
          {Object.entries(role).map(([key, value], i) => {
            return (
              <div key={key} className="input-group mb-3 gap-3">
                <input
                  type="text"
                  placeholder="url"
                  className="form-control rounded-3 border border-1 px-4 py-2"
                  required
                  value={value.url}
                />
                <input
                  type="text"
                  placeholder="description"
                  className="form-control rounded-3 border border-1 px-4 py-2"
                  aria-label="Text input with checkbox"
                />
                <div className="input-group-text bg-dark">
                  <input
                    className="form-check-input mt-0 checked"
                    type="checkbox"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default TableRole;
