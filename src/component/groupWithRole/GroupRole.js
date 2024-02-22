import Dropdown from "react-bootstrap/Dropdown";
import { readGroup, readGroupWithRole } from "../../services/permissionService";
import { useState, useEffect } from "react";
import NavHeader from "../Navigation/NavHeader";
import "./groupRole.scss";

const GroupRole = (props) => {
  const [group, setGroup] = useState([]);
  const [currentRole, setCurrentRole] = useState([]);
  const [choose, setChoose] = useState({ id: 0 });

  const fetchGroup = async () => {
    let response = await readGroup();
    setGroup(response.DT);
  };
  useEffect(() => {
    fetchGroup();
  }, []);

  // useEffect(() => {}, [group, choose]);

  const fetchGroupWithRole = async () => {
    let response = await readGroupWithRole(choose);
    setCurrentRole(response.DT);
    console.log("Roles : ", response);
  };
  const handlerChooseGroup = (value) => {
    setChoose({ id: value.id });
    fetchGroupWithRole();
  };
  return (
    <>
      <NavHeader />
      <div className="container">
        {group && group.length > 0 && (
          <Dropdown className="mt-2">
            <Dropdown.Toggle className="btn btn-danger">
              {choose && choose.name ? choose.name : "choose group"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {group.map((item) => {
                return (
                  <Dropdown.Item
                    onClick={() => handlerChooseGroup(item)}
                    key={item.id}
                    className="dropdown-item">
                    {item.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </>
  );
};
export default GroupRole;
