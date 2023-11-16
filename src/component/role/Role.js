import "./role.scss";
import { useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
const Role = (props) => {
  let [role, setRole] = useState({});
  let [deleteRole, setDeleteRole] = useState({});
  const handlerOnchange = (name, value, key) => {
    // key = ten object doi tuong
    // value = gia tri thay doi
    // name = thuoc tinh cua key can thay doi
    let _listh = _.cloneDeep(role);
    _listh[key][name] = value;
    setRole(_listh);
  };
  const handlerAddRole = (role) => {
    let _listh = _.cloneDeep(role);
    _listh[`role - ${uuidv4()}`] = {
      url: "",
      description: "",
    };
    setRole(_listh);
  };
  const handlerAddListDeleteRole = (key) => {
    let _listDelete = _.cloneDeep(deleteRole); // Sao chép đối tượng
    if (_listDelete.hasOwnProperty(key)) {
      // Nếu key đã tồn tại, xóa nó
      delete _listDelete[key];
    } else {
      // Nếu key không tồn tại, thêm nó vào đối tượng
      _listDelete = { ..._listDelete, [key]: key };
    }
    setDeleteRole(_listDelete);
  };
  const handlerDeleteRole = () => {
    let _listh = _.cloneDeep(role);
    let _listDelete = _.cloneDeep(deleteRole);
    const keysToDelete = _.keys(_listDelete);
    _listh = _.omit(_listh, keysToDelete);
    setRole(_listh);
    setDeleteRole({});
  };
  const handlerSubmit = () => {
    console.log(role);
  };
  return (
    <>
      <div className="container">
        <span className="d-flex align-center justify-content-center fw-bold fs-2 mb-5 mt-3">
          Roles
        </span>
        <div className="option d-flex justify-content-end  mb-4">
          <button
            className="btn btn-warning fw-bolder "
            onClick={() => handlerAddRole(role)}>
            + Role
          </button>
        </div>
        <div className="d-flex flex-column">
          {Object.entries(role).map(([key, value], i) => {
            return (
              <div key={key} className="input-group mb-3 gap-3 ">
                <input
                  type="text"
                  placeholder="url"
                  className="form-control rounded-3 border border-1 px-4 py-2"
                  value={value.url}
                  onChange={(event) => {
                    handlerOnchange("url", event.target.value, key);
                  }}
                />
                <input
                  type="text"
                  placeholder="description"
                  className="form-control rounded"
                  aria-label="Text input with checkbox"
                  value={value.description}
                  onChange={(event) => {
                    handlerOnchange("description", event.target.value, key);
                  }}
                />
                <div className="input-group-text bg-dark">
                  <input
                    className="form-check-input mt-0 checked"
                    type="checkbox"
                    value=""
                    onClick={() => handlerAddListDeleteRole(key)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-success" onClick={() => handlerSubmit()}>
            Save
          </button>
          {Object.keys(deleteRole).length > 0 && (
            <button
              className="btn btn-danger"
              onClick={() => handlerDeleteRole()}>
              Delete Role
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Role;
