import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminSidebar.scss';

const AdminSidebar = () => {
  return (
    <div className="area__sidebar">
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><NavLink activeClassName="active" to={"/admin/list"}><span>List</span></NavLink></li>
          <li className="sidebar-list-item"><NavLink activeClassName="active" to={"/admin/register"}><span>Register</span></NavLink></li>
        </ul>
      </aside>
    </div>
  )
}

export default AdminSidebar