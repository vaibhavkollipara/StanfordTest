import React, { Component } from 'react';
import userdata from '.././data/userData';
import style from './user.css';

class Users extends Component {

  displayUsers(){
    let i =0;
    let users = userdata.map((user)=>{
      return (
        <tr className={`${style.user_row}`} key={i++}>
            <td className={`${style.row_cell}`}>{user.username}</td>
            <td  className={`${style.row_cell}`}>{user.email}</td>
        </tr>
      );
    });

    return(
      <table  className={`${style.users_table}`}>
      <tbody>
        <tr className={`${style.user_header}`}>
          <th className={`${style.header_cell}`}>UserName</th>
          <th className={`${style.header_cell}`}>Email</th>
        </tr>
        {users}
        </tbody>
      </table>
    );
  }

  render() {

    return (
      <div className='users_container'>
        {this.displayUsers()}
      </div>
    );
  }
}

export default Users;
