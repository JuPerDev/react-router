import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='container'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Technology</th>
            <th scope='col'>Email</th>
            <th scope='col'>Social Networks</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          <tr>
            <td>{user.userName}</td>
            <td>{user.technology}</td>
            <td>{user.mail}</td>
            <td>{user.socialNetworks}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
