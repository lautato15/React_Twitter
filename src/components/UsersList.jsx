import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function UsersList() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/users",
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    /*  users.length > 0 && ( */
    <div>
      {/* <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              {user.firstname}
            </li>
          ))}
        </ul> */}
      <h1>Esta es la home </h1>
    </div>
  );
  /* ); */
}

export default UsersList;
