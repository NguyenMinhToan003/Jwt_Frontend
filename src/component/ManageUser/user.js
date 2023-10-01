import { useEffect, useState } from "react";
import { dataUserService } from "../../services/userService";

const User = (props) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await dataUserService();
    setUser(data.data.DT);
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-3 mb-4 fw-bold">Table Account</h3>
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
      </div>
    </>
  );
};

export default User;
