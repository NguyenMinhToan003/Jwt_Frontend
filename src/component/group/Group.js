import React, { useState, useEffect } from "react";
import {
  readGroup,
  readGroupWithRole,
  readAllRole,
  createGroupWithRole,
} from "../../services/permissionService";
import Dropdown from "react-bootstrap/Dropdown";
import _ from "lodash";
import { toast } from "react-toastify";

const Group = (props) => {
  const [group, setGroup] = useState([]);
  const [currentGroup, setCurrentGroup] = useState({});
  const [role, setRole] = useState([]);
  const [roleActive, setRoleActive] = useState([]);

  const fetchRoleActive = async (group) => {
    let response = await readGroupWithRole(group);
    if (response && response.EC === 0) {
      setRoleActive(response.DT.Roles);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const groupResponse = await readGroup();
      if (groupResponse && groupResponse.EC === 0) {
        setGroup(groupResponse.DT);
        if (groupResponse.DT.length > 0) {
          setCurrentGroup(groupResponse.DT[0]);
          fetchRoleActive(groupResponse.DT[0]);
        }
      }
    };

    const fetchAllRole = async () => {
      const roleResponse = await readAllRole();
      if (roleResponse && roleResponse.EC === 0) {
        let data = roleResponse.DT;
        setRole(buildDataRoleView(data, roleActive));
      }
    };
    fetchData();
    fetchAllRole();
  }, []);
  useEffect(() => {
    setRole(buildDataRoleView(role, roleActive));
  }, [roleActive]);
  const handleChooseGroup = (selectedGroup) => {
    setCurrentGroup(selectedGroup);
    fetchRoleActive(selectedGroup);
  };
  const buildDataRoleView = (role, roleActive) => {
    let result = [];
    if (role && role.length > 0) {
      role.map((item, index) => {
        let ob = {};
        ob.url = item.url;
        ob.id = item.id;
        ob.description = item.description;
        ob.isAssigned = false;
        if (roleActive && roleActive.length > 0)
          ob.isAssigned = roleActive.some((el) => el.url === ob.url);
        result = [...result, ob];
      });
    }
    return result;
  };

  const handleChangeRole = (id) => {
    let cloneRole = _.cloneDeep(role);
    let selectRoleIndex = cloneRole.findIndex((item) => item.id === id);
    if (selectRoleIndex > -1) {
      cloneRole[selectRoleIndex] = {
        ...cloneRole[selectRoleIndex],
        isAssigned: !cloneRole[selectRoleIndex].isAssigned,
      };
    }
    setRole(cloneRole);
  };
  const buildDataSubmit = (data) => {
    let result = [];
    let roleClone = _.cloneDeep(data);
    roleClone.map((item, index) => {
      if (item.isAssigned) {
        let ob = {};
        ob.roleId = item.id;
        ob.GroupId = currentGroup.id;
        result = [...result, ob];
      }
    });
    if (result.length === 0) {
      let ob = {};
      ob.GroupId = currentGroup.id;
      ob.isEmpty = true;
      result = [ob];
    } else result[0].isEmpty = false;
    return result;
  };
  const handleSubmit = async () => {
    let data = buildDataSubmit(role);
    let response = await createGroupWithRole(data);
    if (response && response.EC === 0) {
      toast.info(response.EM);
    } else toast.error(response.EM);
  };

  return (
    <div className="container mt-3">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {currentGroup.name || "Choose Group"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {group.map((item, index) => (
            <Dropdown.Item key={index} onClick={() => handleChooseGroup(item)}>
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <div>
        {role.map((item, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`flexCheckDefault-${index}`}
              checked={item.isAssigned}
              onChange={() => {
                handleChangeRole(item.id);
              }}
            />
            <label
              className="form-check-label"
              htmlFor={`flexCheckDefault-${index}`}>
              {item.url}
            </label>
          </div>
        ))}
      </div>
      <button
        className="btn btn-warning"
        onClick={() => {
          handleSubmit();
        }}>
        Save
      </button>
    </div>
  );
};

export default Group;
